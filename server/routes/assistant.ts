/**
 * AI Assistant API Routes
 *
 * REST endpoints for the dashboard to query assistant status,
 * manage knowledge base, send messages, and retrieve conversation history.
 */

import { Router, type Request, type Response } from "express";
import { getActiveConversations, getStats } from "../ws.js";
import { createOrUpdateAssistant, assignPhoneNumber } from "../services/vapi.js";
import { sendSms } from "../services/twilio.js";
import { queryKnowledgeBase, upsertKnowledgeBase } from "../services/pinecone.js";
import { transcribeAudio } from "../services/deepgram.js";
import type { ApiResponse, KnowledgeBaseEntry } from "../types.js";

export const assistantRouter = Router();

// ─── Dashboard Data ───────────────────────────────────────────────────────────

/**
 * GET /api/assistant/status
 * Returns the current AI assistant status and active conversations.
 */
assistantRouter.get("/status", (_req: Request, res: Response) => {
  const active = getActiveConversations();
  const stats = getStats();

  const response: ApiResponse = {
    success: true,
    data: {
      online: true,
      activeConversations: active,
      stats,
    },
  };

  res.json(response);
});

/**
 * GET /api/assistant/conversations
 * Returns all currently active conversations for the dashboard.
 */
assistantRouter.get("/conversations", (_req: Request, res: Response) => {
  const conversations = getActiveConversations();
  res.json({ success: true, data: conversations });
});

/**
 * GET /api/assistant/stats
 * Returns conversation statistics for the dashboard widgets.
 */
assistantRouter.get("/stats", (_req: Request, res: Response) => {
  const stats = getStats();
  res.json({ success: true, data: stats });
});

// ─── Assistant Management ─────────────────────────────────────────────────────

/**
 * POST /api/assistant/setup
 * Creates or updates the Vapi assistant and assigns a phone number.
 */
assistantRouter.post("/setup", async (req: Request, res: Response) => {
  try {
    const { assistantId } = req.body as { assistantId?: string };

    // Create or update the assistant
    const assistant = await createOrUpdateAssistant(assistantId);

    // Assign phone number
    await assignPhoneNumber(assistant.id);

    res.json({
      success: true,
      data: {
        assistantId: assistant.id,
        message: "AI Assistant configured and phone number assigned",
      },
    });
  } catch (error) {
    console.error("[API] Setup error:", error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Setup failed",
    });
  }
});

// ─── Messaging ────────────────────────────────────────────────────────────────

/**
 * POST /api/assistant/sms
 * Send an outbound SMS message.
 */
assistantRouter.post("/sms", async (req: Request, res: Response) => {
  try {
    const { to, body } = req.body as { to: string; body: string };

    if (!to || !body) {
      res.status(400).json({ success: false, error: "to and body are required" });
      return;
    }

    const result = await sendSms(to, body);
    res.json({ success: true, data: { messageSid: result.sid } });
  } catch (error) {
    console.error("[API] SMS send error:", error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "SMS send failed",
    });
  }
});

/**
 * POST /api/assistant/chat
 * Handle a web chat message from the chat widget.
 * Queries the knowledge base and returns an AI response.
 */
assistantRouter.post("/chat", async (req: Request, res: Response) => {
  try {
    const { message, conversationId } = req.body as {
      message: string;
      conversationId?: string;
    };

    if (!message) {
      res.status(400).json({ success: false, error: "message is required" });
      return;
    }

    // Query knowledge base for relevant context
    const kbResults = await queryKnowledgeBase(message);
    const context = kbResults
      .filter((r) => r.score > 0.7)
      .map((r) => r.content)
      .join("\n");

    // Generate response (simplified - in production, call an LLM API with context)
    const aiResponse = generateChatResponse(message, context);

    res.json({
      success: true,
      data: {
        conversationId: conversationId || crypto.randomUUID(),
        response: aiResponse,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("[API] Chat error:", error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Chat failed",
    });
  }
});

// ─── Knowledge Base ───────────────────────────────────────────────────────────

/**
 * POST /api/assistant/knowledge
 * Add entries to the knowledge base (Pinecone).
 */
assistantRouter.post("/knowledge", async (req: Request, res: Response) => {
  try {
    const { entries } = req.body as { entries: KnowledgeBaseEntry[] };

    if (!entries || entries.length === 0) {
      res.status(400).json({ success: false, error: "entries array is required" });
      return;
    }

    await upsertKnowledgeBase(entries);
    res.json({
      success: true,
      data: { upserted: entries.length },
    });
  } catch (error) {
    console.error("[API] Knowledge base error:", error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Knowledge base update failed",
    });
  }
});

/**
 * GET /api/assistant/knowledge/search
 * Search the knowledge base.
 */
assistantRouter.get("/knowledge/search", async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;
    if (!query) {
      res.status(400).json({ success: false, error: "q query parameter is required" });
      return;
    }

    const results = await queryKnowledgeBase(query);
    res.json({ success: true, data: results });
  } catch (error) {
    console.error("[API] Knowledge search error:", error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Search failed",
    });
  }
});

// ─── Audio Processing ─────────────────────────────────────────────────────────

/**
 * POST /api/assistant/transcribe
 * Transcribe audio using Deepgram.
 */
assistantRouter.post("/transcribe", async (req: Request, res: Response) => {
  try {
    const contentType = req.headers["content-type"] || "audio/wav";
    const chunks: Buffer[] = [];

    req.on("data", (chunk: Buffer) => chunks.push(chunk));
    req.on("end", async () => {
      const audioBuffer = Buffer.concat(chunks);
      const result = await transcribeAudio(audioBuffer, contentType);
      res.json({ success: true, data: result });
    });
  } catch (error) {
    console.error("[API] Transcription error:", error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Transcription failed",
    });
  }
});

// ─── Helper Functions ─────────────────────────────────────────────────────────

function generateChatResponse(message: string, context: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hey there! I'm the AI assistant for Time & Attention. How can I help you today?";
  }

  if (lower.includes("hours") || lower.includes("open")) {
    return "Our AI assistant is available 24/7! For human support, we're available Mon-Fri 9am-5pm EST.";
  }

  if (lower.includes("appointment") || lower.includes("schedule")) {
    return "I'd be happy to help schedule an appointment! What date and time work best for you?";
  }

  if (context) {
    return `Based on what I know: ${context.slice(0, 300)}. Would you like more details?`;
  }

  return "Thanks for reaching out! I'm here to help with any questions about Time & Attention AI. What would you like to know?";
}
