/**
 * WebSocket Hook for Real-Time Dashboard Updates
 *
 * Connects to the server's WebSocket endpoint and provides
 * live updates for call status, transcripts, and stats.
 * Powers the "Call in Progress" real-time display.
 */

import { useState, useEffect, useCallback, useRef } from "react";

export type WsEventType =
  | "call:started"
  | "call:status-update"
  | "call:ended"
  | "sms:received"
  | "sms:sent"
  | "chat:message"
  | "transcript:update"
  | "stats:update";

export interface ActiveConversation {
  id: string;
  channel: "phone" | "sms" | "chat";
  direction: "inbound" | "outbound";
  status: "ringing" | "in-progress" | "completed" | "failed" | "no-answer" | "busy";
  callerNumber: string;
  callerName?: string;
  startedAt: string;
  duration?: number;
  transcript?: Array<{
    role: "assistant" | "user";
    content: string;
    timestamp: string;
  }>;
  sentiment?: "positive" | "neutral" | "negative";
  summary?: string;
}

export interface ConversationStats {
  totalCallsToday: number;
  totalSmsToday: number;
  totalChatsToday: number;
  activeConversations: number;
  avgCallDuration: number;
  missedCalls: number;
  sentimentBreakdown: {
    positive: number;
    neutral: number;
    negative: number;
  };
}

interface WsEvent {
  type: WsEventType;
  data: ActiveConversation | ConversationStats;
  timestamp: string;
}

interface UseWebSocketReturn {
  connected: boolean;
  activeConversations: ActiveConversation[];
  stats: ConversationStats;
  recentEvents: WsEvent[];
}

const DEFAULT_STATS: ConversationStats = {
  totalCallsToday: 0,
  totalSmsToday: 0,
  totalChatsToday: 0,
  activeConversations: 0,
  avgCallDuration: 0,
  missedCalls: 0,
  sentimentBreakdown: { positive: 0, neutral: 0, negative: 0 },
};

export function useWebSocket(): UseWebSocketReturn {
  const [connected, setConnected] = useState(false);
  const [activeConversations, setActiveConversations] = useState<ActiveConversation[]>([]);
  const [stats, setStats] = useState<ConversationStats>(DEFAULT_STATS);
  const [recentEvents, setRecentEvents] = useState<WsEvent[]>([]);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const addEvent = useCallback((event: WsEvent) => {
    setRecentEvents((prev) => [event, ...prev].slice(0, 50));
  }, []);

  const handleMessage = useCallback(
    (data: string) => {
      try {
        const event = JSON.parse(data) as WsEvent;
        addEvent(event);

        switch (event.type) {
          case "call:started": {
            const conv = event.data as ActiveConversation;
            setActiveConversations((prev) => [...prev, conv]);
            break;
          }
          case "call:status-update": {
            const conv = event.data as ActiveConversation;
            setActiveConversations((prev) =>
              prev.map((c) => (c.id === conv.id ? { ...c, ...conv } : c))
            );
            break;
          }
          case "call:ended": {
            const conv = event.data as ActiveConversation;
            setActiveConversations((prev) => prev.filter((c) => c.id !== conv.id));
            break;
          }
          case "sms:received":
          case "sms:sent":
          case "chat:message":
            // These are tracked in recentEvents
            break;
          case "stats:update": {
            const newStats = event.data as ConversationStats;
            setStats(newStats);
            break;
          }
        }
      } catch (error) {
        console.error("[WS] Failed to parse message:", error);
      }
    },
    [addEvent]
  );

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/ws`;

    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log("[WS] Connected");
      setConnected(true);
    };

    ws.onmessage = (event) => {
      handleMessage(event.data);
    };

    ws.onclose = () => {
      console.log("[WS] Disconnected, reconnecting...");
      setConnected(false);
      wsRef.current = null;

      // Reconnect after 3 seconds
      reconnectTimeoutRef.current = setTimeout(connect, 3000);
    };

    ws.onerror = (error) => {
      console.error("[WS] Error:", error);
    };

    wsRef.current = ws;
  }, [handleMessage]);

  useEffect(() => {
    connect();

    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [connect]);

  return { connected, activeConversations, stats, recentEvents };
}
