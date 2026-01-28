/**
 * Webhook Routes for Twilio and Vapi
 *
 * These endpoints receive callbacks from:
 * - Twilio: incoming calls, SMS, call status changes
 * - Vapi: AI agent events (call start, transcript, end-of-call reports)
 *
 * All events are broadcast via WebSocket to the real-time dashboard.
 */

import { Router, type Request, type Response } from "express";
import { handleVapiWebhook, webhookToConversation } from "../services/vapi.js";
import {
  generateCallRoutingTwiml,
  handleIncomingSms,
  callWebhookToConversation,
  validateTwilioSignature,
} from "../services/twilio.js";
import { trackConversation } from "../ws.js";
import type { VapiWebhookPayload, TwilioCallWebhook, TwilioSmsWebhook } from "../types.js";

export const webhookRouter = Router();

// ─── Vapi Webhooks ────────────────────────────────────────────────────────────

/**
 * POST /api/webhooks/vapi
 * Receives all Vapi events: assistant-request, status-update, function-call, end-of-call-report
 */
webhookRouter.post("/vapi", async (req: Request, res: Response) => {
  try {
    // Validate server secret
    const serverSecret = process.env.VAPI_SERVER_SECRET;
    if (serverSecret) {
      const headerSecret = req.headers["x-vapi-secret"];
      if (headerSecret !== serverSecret) {
        console.warn("[Webhook] Invalid Vapi secret");
        res.status(401).json({ error: "Unauthorized" });
        return;
      }
    }

    const payload = req.body as VapiWebhookPayload;
    console.log(`[Webhook] Vapi event: ${payload.message.type}`);

    // Track conversation status for the real-time dashboard
    const conversation = webhookToConversation(payload);
    if (conversation) {
      trackConversation(conversation);
    }

    // Process the webhook and generate response
    const result = await handleVapiWebhook(payload);

    if (result?.assistantConfig) {
      // Return assistant config for assistant-request events
      res.json({ assistant: result.assistantConfig });
    } else if (result?.result) {
      // Return function call result
      res.json({ result: result.result });
    } else {
      res.json({ ok: true });
    }
  } catch (error) {
    console.error("[Webhook] Vapi error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ─── Twilio Webhooks ──────────────────────────────────────────────────────────

/**
 * POST /api/webhooks/twilio/voice
 * Handles incoming phone calls - routes them to the Vapi AI agent.
 */
webhookRouter.post("/twilio/voice", (req: Request, res: Response) => {
  try {
    const signature = (req.headers["x-twilio-signature"] as string) || "";
    const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;

    if (!validateTwilioSignature(signature, fullUrl, req.body)) {
      console.warn("[Webhook] Invalid Twilio signature");
      res.status(403).send("Forbidden");
      return;
    }

    const callData = req.body as TwilioCallWebhook;
    console.log(`[Webhook] Twilio call from ${callData.From}, status: ${callData.CallStatus}`);

    // Track the incoming call for the dashboard
    const conversation = callWebhookToConversation(callData);
    trackConversation(conversation);

    // Return TwiML to route to Vapi AI agent
    const twiml = generateCallRoutingTwiml();
    res.type("text/xml").send(twiml);
  } catch (error) {
    console.error("[Webhook] Twilio voice error:", error);
    res.type("text/xml").send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>We're experiencing technical difficulties. Please try again later.</Say>
</Response>`);
  }
});

/**
 * POST /api/webhooks/twilio/voice/status
 * Receives call status callbacks (ringing, in-progress, completed, etc.)
 * Updates the real-time dashboard via WebSocket.
 */
webhookRouter.post("/twilio/voice/status", (req: Request, res: Response) => {
  try {
    const callData = req.body as TwilioCallWebhook;
    console.log(`[Webhook] Call ${callData.CallSid} status: ${callData.CallStatus}`);

    // Update conversation status
    const conversation = callWebhookToConversation(callData);
    trackConversation(conversation);

    res.sendStatus(200);
  } catch (error) {
    console.error("[Webhook] Twilio status error:", error);
    res.sendStatus(500);
  }
});

/**
 * POST /api/webhooks/twilio/sms
 * Handles incoming SMS messages - responds using AI + knowledge base.
 */
webhookRouter.post("/twilio/sms", async (req: Request, res: Response) => {
  try {
    const signature = (req.headers["x-twilio-signature"] as string) || "";
    const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;

    if (!validateTwilioSignature(signature, fullUrl, req.body)) {
      console.warn("[Webhook] Invalid Twilio SMS signature");
      res.status(403).send("Forbidden");
      return;
    }

    const smsData = req.body as TwilioSmsWebhook;
    console.log(`[Webhook] SMS from ${smsData.From}: ${smsData.Body}`);

    // Process SMS with AI and knowledge base
    const { twiml, conversation } = await handleIncomingSms(smsData);

    // Track for the dashboard
    trackConversation(conversation);

    res.type("text/xml").send(twiml);
  } catch (error) {
    console.error("[Webhook] Twilio SMS error:", error);
    res.type("text/xml").send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>Sorry, we're experiencing an issue. Please try again or call us directly.</Message>
</Response>`);
  }
});
