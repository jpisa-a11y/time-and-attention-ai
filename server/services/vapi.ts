/**
 * Vapi Voice Agent Service
 *
 * Configures and manages the AI voice agent that answers every phone call 24/7.
 * Vapi handles the real-time voice conversation, using Deepgram for STT/TTS
 * and our knowledge base (Pinecone) for context-aware responses.
 */

import { getVapiDeepgramConfig } from "./deepgram.js";
import { queryKnowledgeBase, buildContextFromResults } from "./pinecone.js";
import type { VapiAssistantConfig, VapiWebhookPayload, ActiveConversation } from "../types.js";

interface VapiConfig {
  apiKey: string;
  phoneNumberId: string;
  serverUrl: string;
  serverSecret: string;
}

function getConfig(): VapiConfig {
  const apiKey = process.env.VAPI_API_KEY;
  const phoneNumberId = process.env.VAPI_PHONE_NUMBER_ID || "";
  const serverUrl = process.env.VAPI_SERVER_URL || "";
  const serverSecret = process.env.VAPI_SERVER_SECRET || "";

  if (!apiKey) {
    throw new Error("VAPI_API_KEY is required");
  }

  return { apiKey, phoneNumberId, serverUrl, serverSecret };
}

const SYSTEM_PROMPT = `You are a friendly, professional AI receptionist for Time & Attention AI.
Your role is to:
- Answer every call warmly and professionally
- Help callers with questions about our services
- Schedule appointments and take messages
- Provide information from our knowledge base
- Never leave a caller without a resolution or next step

Key behaviors:
- Be conversational but efficient
- If you don't know something, say so honestly and offer to take a message
- Always confirm important details (names, numbers, appointment times)
- End every call with a clear next step

{knowledgeBaseContext}`;

/**
 * Build the Vapi assistant configuration with Deepgram as the voice and transcription provider.
 */
export function buildAssistantConfig(knowledgeContext: string = ""): VapiAssistantConfig {
  const config = getConfig();
  const deepgramConfig = getVapiDeepgramConfig();

  const systemPrompt = SYSTEM_PROMPT.replace(
    "{knowledgeBaseContext}",
    knowledgeContext
      ? `\n\nUse this business context to answer questions:\n${knowledgeContext}`
      : ""
  );

  return {
    name: "Time & Attention AI Receptionist",
    model: {
      provider: "openai",
      model: "gpt-4o",
      systemPrompt,
      temperature: 0.7,
    },
    voice: deepgramConfig.voice,
    transcriber: deepgramConfig.transcriber,
    firstMessage:
      "Hey there, I'm the AI assistant for Time and Attention. How can I help you today?",
    endCallMessage: "Thanks for calling! Have a great day.",
    serverUrl: config.serverUrl,
    serverUrlSecret: config.serverSecret,
  };
}

/**
 * Create or update the Vapi assistant via the Vapi API.
 */
export async function createOrUpdateAssistant(
  assistantId?: string
): Promise<{ id: string }> {
  const config = getConfig();

  // Fetch knowledge base context for the system prompt
  const kbResults = await queryKnowledgeBase("business information services overview");
  const knowledgeContext = buildContextFromResults(kbResults);
  const assistantConfig = buildAssistantConfig(knowledgeContext);

  const url = assistantId
    ? `https://api.vapi.ai/assistant/${assistantId}`
    : "https://api.vapi.ai/assistant";

  const response = await fetch(url, {
    method: assistantId ? "PATCH" : "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(assistantConfig),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Vapi assistant ${assistantId ? "update" : "create"} failed: ${error}`);
  }

  const result = (await response.json()) as { id: string };
  console.log(`[Vapi] Assistant ${assistantId ? "updated" : "created"}: ${result.id}`);
  return result;
}

/**
 * Assign a phone number to the Vapi assistant so it answers incoming calls.
 */
export async function assignPhoneNumber(assistantId: string): Promise<void> {
  const config = getConfig();

  if (!config.phoneNumberId) {
    console.warn("[Vapi] No VAPI_PHONE_NUMBER_ID configured, skipping phone number assignment");
    return;
  }

  const response = await fetch(`https://api.vapi.ai/phone-number/${config.phoneNumberId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      assistantId,
      serverUrl: config.serverUrl,
      serverUrlSecret: config.serverSecret,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Vapi phone number assignment failed: ${error}`);
  }

  console.log(`[Vapi] Phone number ${config.phoneNumberId} assigned to assistant ${assistantId}`);
}

/**
 * Handle incoming Vapi webhook events.
 * Returns assistant config for assistant-request, processes status updates,
 * and handles function calls (e.g., knowledge base queries).
 */
export async function handleVapiWebhook(
  payload: VapiWebhookPayload
): Promise<{ assistantConfig?: VapiAssistantConfig; result?: unknown } | null> {
  const { message } = payload;

  switch (message.type) {
    case "assistant-request": {
      // Vapi is asking for the assistant configuration for an incoming call
      const kbResults = await queryKnowledgeBase("business information services overview");
      const knowledgeContext = buildContextFromResults(kbResults);
      return { assistantConfig: buildAssistantConfig(knowledgeContext) };
    }

    case "function-call": {
      // AI is requesting a function call (e.g., knowledge base lookup)
      if (message.functionCall?.name === "lookupKnowledgeBase") {
        const query = message.functionCall.parameters.query as string;
        const results = await queryKnowledgeBase(query);
        return {
          result: buildContextFromResults(results) || "No relevant information found.",
        };
      }
      return null;
    }

    case "status-update": {
      // Call status changed - we broadcast this via WebSocket
      console.log(`[Vapi] Call status: ${message.status} for call ${message.call?.id}`);
      return null;
    }

    case "end-of-call-report": {
      // Call ended - log summary and transcript
      console.log(
        `[Vapi] Call ended: ${message.call?.id}, reason: ${message.endedReason}`
      );
      if (message.summary) {
        console.log(`[Vapi] Summary: ${message.summary}`);
      }
      return null;
    }

    default:
      return null;
  }
}

/**
 * Convert a Vapi webhook payload to our ActiveConversation format for the dashboard.
 */
export function webhookToConversation(payload: VapiWebhookPayload): ActiveConversation | null {
  const { message } = payload;
  if (!message.call) return null;

  const statusMap: Record<string, ActiveConversation["status"]> = {
    ringing: "ringing",
    "in-progress": "in-progress",
    forwarding: "in-progress",
    ended: "completed",
  };

  return {
    id: message.call.id,
    channel: "phone",
    direction: "inbound",
    status: statusMap[message.status || ""] || "in-progress",
    callerNumber: message.call.customer?.number || "Unknown",
    callerName: message.call.customer?.name,
    startedAt: new Date().toISOString(),
    transcript: message.messages?.map((m) => ({
      role: m.role === "assistant" ? ("assistant" as const) : ("user" as const),
      content: m.message,
      timestamp: new Date().toISOString(),
    })),
    summary: message.summary,
  };
}
