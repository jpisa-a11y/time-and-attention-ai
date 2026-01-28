/**
 * WebSocket Server for Real-Time Dashboard Updates
 *
 * Broadcasts live call status, transcript updates, and activity events
 * to connected dashboard clients (including your smartphone browser).
 * This is what powers the "Call in Progress" real-time display.
 */

import { WebSocketServer, WebSocket } from "ws";
import type { Server } from "http";
import type { WsEvent, WsEventType, ActiveConversation, ConversationStats } from "./types.js";

let wss: WebSocketServer | null = null;

// In-memory store for active conversations and stats
const activeConversations = new Map<string, ActiveConversation>();
let stats: ConversationStats = {
  totalCallsToday: 0,
  totalSmsToday: 0,
  totalChatsToday: 0,
  activeConversations: 0,
  avgCallDuration: 0,
  missedCalls: 0,
  sentimentBreakdown: { positive: 0, neutral: 0, negative: 0 },
};

/**
 * Initialize the WebSocket server on the existing HTTP server.
 */
export function initWebSocket(server: Server): WebSocketServer {
  wss = new WebSocketServer({ server, path: "/ws" });

  wss.on("connection", (ws) => {
    console.log("[WS] Client connected");

    // Send current state to newly connected client
    const initPayload: WsEvent = {
      type: "stats:update",
      data: stats,
      timestamp: new Date().toISOString(),
    };
    ws.send(JSON.stringify(initPayload));

    // Send all active conversations
    for (const conversation of Array.from(activeConversations.values())) {
      const event: WsEvent = {
        type: "call:status-update",
        data: conversation,
        timestamp: new Date().toISOString(),
      };
      ws.send(JSON.stringify(event));
    }

    ws.on("close", () => {
      console.log("[WS] Client disconnected");
    });

    ws.on("error", (error) => {
      console.error("[WS] Client error:", error);
    });
  });

  console.log("[WS] WebSocket server initialized on /ws");
  return wss;
}

/**
 * Broadcast an event to all connected WebSocket clients.
 * This is called whenever a call starts, status changes, or ends.
 */
export function broadcast(type: WsEventType, data: ActiveConversation | ConversationStats): void {
  if (!wss) return;

  const event: WsEvent = {
    type,
    data,
    timestamp: new Date().toISOString(),
  };

  const payload = JSON.stringify(event);

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  });
}

/**
 * Track a new or updated conversation and broadcast the change.
 */
export function trackConversation(conversation: ActiveConversation): void {
  const existing = activeConversations.get(conversation.id);

  if (conversation.status === "completed" || conversation.status === "failed") {
    activeConversations.delete(conversation.id);
    broadcast("call:ended", conversation);

    // Update stats
    if (conversation.channel === "phone") stats.totalCallsToday++;
    if (conversation.channel === "sms") stats.totalSmsToday++;
    if (conversation.channel === "chat") stats.totalChatsToday++;
  } else if (!existing) {
    activeConversations.set(conversation.id, conversation);
    broadcast("call:started", conversation);
  } else {
    activeConversations.set(conversation.id, { ...existing, ...conversation });
    broadcast("call:status-update", conversation);
  }

  // Update active count
  stats.activeConversations = activeConversations.size;
  broadcast("stats:update", stats);
}

/**
 * Get all currently active conversations.
 */
export function getActiveConversations(): ActiveConversation[] {
  return Array.from(activeConversations.values());
}

/**
 * Get current conversation stats.
 */
export function getStats(): ConversationStats {
  return { ...stats };
}

/**
 * Reset daily stats (call this from a cron job at midnight).
 */
export function resetDailyStats(): void {
  stats = {
    totalCallsToday: 0,
    totalSmsToday: 0,
    totalChatsToday: 0,
    activeConversations: activeConversations.size,
    avgCallDuration: 0,
    missedCalls: 0,
    sentimentBreakdown: { positive: 0, neutral: 0, negative: 0 },
  };
  broadcast("stats:update", stats);
}
