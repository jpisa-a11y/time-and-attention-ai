/**
 * Twilio Communication Service
 *
 * Handles inbound/outbound calls, SMS, and chat via Twilio.
 * For voice calls, Twilio routes to Vapi's AI agent.
 * For SMS, this service processes messages and responds using the AI + Pinecone knowledge base.
 */

import { queryKnowledgeBase, buildContextFromResults } from "./pinecone.js";
import type { TwilioCallWebhook, TwilioSmsWebhook, ActiveConversation } from "../types.js";

interface TwilioConfig {
  accountSid: string;
  authToken: string;
  phoneNumber: string;
  vapiWebhookUrl: string;
}

function getConfig(): TwilioConfig {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const phoneNumber = process.env.TWILIO_PHONE_NUMBER || "";
  const vapiWebhookUrl = process.env.VAPI_SERVER_URL || "";

  if (!accountSid || !authToken) {
    throw new Error("TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN are required");
  }

  return { accountSid, authToken, phoneNumber, vapiWebhookUrl };
}

/**
 * Generate TwiML response to route incoming calls to the Vapi AI agent.
 * Twilio uses TwiML (XML) to control call behavior.
 */
export function generateCallRoutingTwiml(): string {
  const config = getConfig();

  // Forward to Vapi for AI handling
  // Vapi's phone number will be configured to handle the call directly,
  // but this TwiML is used as a fallback or for custom routing logic
  return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna">Please hold while I connect you with our AI assistant.</Say>
  <Dial>
    <Sip>${config.vapiWebhookUrl}</Sip>
  </Dial>
  <Say voice="Polly.Joanna">I'm sorry, we're unable to connect you right now. Please try again later.</Say>
</Response>`;
}

/**
 * Handle incoming SMS and generate an AI-powered response.
 * Queries Pinecone knowledge base for context, then generates a reply.
 */
export async function handleIncomingSms(
  smsData: TwilioSmsWebhook
): Promise<{ twiml: string; conversation: ActiveConversation }> {
  const incomingMessage = smsData.Body;

  // Query knowledge base for relevant context
  const kbResults = await queryKnowledgeBase(incomingMessage);
  const context = buildContextFromResults(kbResults);

  // Generate AI response (using a simple template for now - in production,
  // you'd call an LLM API with the context)
  const aiResponse = generateSmsResponse(incomingMessage, context);

  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>${escapeXml(aiResponse)}</Message>
</Response>`;

  const conversation: ActiveConversation = {
    id: smsData.MessageSid,
    channel: "sms",
    direction: "inbound",
    status: "completed",
    callerNumber: smsData.From,
    startedAt: new Date().toISOString(),
    transcript: [
      { role: "user", content: incomingMessage, timestamp: new Date().toISOString() },
      { role: "assistant", content: aiResponse, timestamp: new Date().toISOString() },
    ],
  };

  return { twiml, conversation };
}

/**
 * Send an outbound SMS using the Twilio REST API.
 */
export async function sendSms(to: string, body: string): Promise<{ sid: string }> {
  const config = getConfig();
  const url = `https://api.twilio.com/2010-04-01/Accounts/${config.accountSid}/Messages.json`;

  const params = new URLSearchParams({
    To: to,
    From: config.phoneNumber,
    Body: body,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.accountSid}:${config.authToken}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Twilio SMS send failed: ${error}`);
  }

  const result = (await response.json()) as { sid: string };
  console.log(`[Twilio] SMS sent to ${to}: ${result.sid}`);
  return result;
}

/**
 * Convert a Twilio call webhook to our ActiveConversation format.
 */
export function callWebhookToConversation(data: TwilioCallWebhook): ActiveConversation {
  const statusMap: Record<string, ActiveConversation["status"]> = {
    ringing: "ringing",
    "in-progress": "in-progress",
    completed: "completed",
    busy: "busy",
    "no-answer": "no-answer",
    failed: "failed",
  };

  return {
    id: data.CallSid,
    channel: "phone",
    direction: data.Direction === "inbound" ? "inbound" : "outbound",
    status: statusMap[data.CallStatus] || "in-progress",
    callerNumber: data.From,
    callerName: data.CallerName,
    startedAt: new Date().toISOString(),
  };
}

/**
 * Validate that a Twilio webhook request is authentic using the auth token.
 */
export function validateTwilioSignature(
  signature: string,
  url: string,
  params: Record<string, string>
): boolean {
  // In production, use Twilio's validateRequest helper
  // This is a simplified check - the full implementation uses HMAC-SHA1
  const config = getConfig();
  if (!config.authToken) return false;

  // For development, allow all requests if TWILIO_VALIDATE_WEBHOOKS is not set
  if (process.env.NODE_ENV !== "production" && !process.env.TWILIO_VALIDATE_WEBHOOKS) {
    return true;
  }

  // In production, implement full Twilio signature validation
  // See: https://www.twilio.com/docs/usage/security
  return !!signature;
}

// ─── Helper Functions ─────────────────────────────────────────────────────────

function generateSmsResponse(message: string, context: string): string {
  // Simple response generation - in production, call an LLM API
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("hours") || lowerMessage.includes("open")) {
    return "We're available 24/7 through our AI assistant! For a human representative, our office hours are Mon-Fri 9am-5pm EST. How else can I help?";
  }

  if (lowerMessage.includes("appointment") || lowerMessage.includes("schedule")) {
    return "I'd love to help schedule an appointment! Please reply with your preferred date and time, and I'll check availability for you.";
  }

  if (context) {
    return `Thanks for reaching out! Based on your question: ${context.slice(0, 200)}. Reply with more details or call us for immediate assistance.`;
  }

  return "Thanks for texting Time & Attention AI! I'm here to help 24/7. What can I assist you with? You can also call us for immediate voice support.";
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
