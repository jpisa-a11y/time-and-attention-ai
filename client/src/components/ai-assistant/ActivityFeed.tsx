/**
 * Activity Feed Component
 *
 * Shows a real-time scrolling feed of all AI assistant interactions:
 * calls answered, SMS handled, chats completed, with timestamps
 * and status indicators. Visible on the dashboard.
 */

import { Phone, PhoneIncoming, PhoneOff, MessageSquare, MessageCircle, Clock } from "lucide-react";
import type { ActiveConversation, ConversationStats } from "@/hooks/useWebSocket";

interface WsEvent {
  type: string;
  data: ActiveConversation | ConversationStats;
  timestamp: string;
}

interface ActivityFeedProps {
  events: WsEvent[];
}

export function ActivityFeed({ events }: ActivityFeedProps) {
  if (events.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Activity Feed</h3>
        <div className="text-center py-8 text-gray-400">
          <Clock className="h-8 w-8 mx-auto mb-2 opacity-50" />
          <p className="text-sm">No activity yet. The AI assistant is standing by.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Activity Feed</h3>
      <div className="space-y-3 max-h-[400px] overflow-y-auto">
        {events.map((event, index) => (
          <ActivityItem key={`${event.timestamp}-${index}`} event={event} />
        ))}
      </div>
    </div>
  );
}

function ActivityItem({ event }: { event: WsEvent }) {
  const { icon, color, title, description } = getEventDisplay(event);
  const timeAgo = getTimeAgo(event.timestamp);

  return (
    <div className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0">
      <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${color}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800">{title}</p>
        {description && (
          <p className="text-xs text-gray-500 mt-0.5 truncate">{description}</p>
        )}
      </div>
      <span className="text-xs text-gray-400 shrink-0">{timeAgo}</span>
    </div>
  );
}

function isConversation(data: ActiveConversation | ConversationStats): data is ActiveConversation {
  return "callerNumber" in data;
}

function getEventDisplay(event: WsEvent): {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
} {
  const data = event.data;
  const conv = isConversation(data) ? data : null;
  const caller = conv?.callerName || conv?.callerNumber || "Unknown";

  switch (event.type) {
    case "call:started":
      return {
        icon: <PhoneIncoming className="h-4 w-4 text-white" />,
        color: "bg-amber-500",
        title: `Incoming call from ${caller}`,
        description: "AI assistant answering...",
      };
    case "call:status-update":
      return {
        icon: <Phone className="h-4 w-4 text-white" />,
        color: "bg-green-600",
        title: `Call with ${caller}`,
        description: conv?.status === "in-progress" ? "AI handling call" : `Status: ${conv?.status}`,
      };
    case "call:ended":
      return {
        icon: <PhoneOff className="h-4 w-4 text-white" />,
        color: "bg-gray-500",
        title: `Call ended with ${caller}`,
        description: conv?.summary || "Call completed",
      };
    case "sms:received":
      return {
        icon: <MessageSquare className="h-4 w-4 text-white" />,
        color: "bg-blue-500",
        title: `SMS from ${caller}`,
        description: conv?.transcript?.[0]?.content || "New text message",
      };
    case "sms:sent":
      return {
        icon: <MessageSquare className="h-4 w-4 text-white" />,
        color: "bg-blue-400",
        title: `SMS reply sent to ${caller}`,
        description: "AI responded to text",
      };
    case "chat:message":
      return {
        icon: <MessageCircle className="h-4 w-4 text-white" />,
        color: "bg-purple-500",
        title: "Web chat message",
        description: "AI handling chat conversation",
      };
    case "stats:update":
      return {
        icon: <Clock className="h-4 w-4 text-white" />,
        color: "bg-gray-400",
        title: "Stats updated",
        description: "",
      };
    default:
      return {
        icon: <Clock className="h-4 w-4 text-white" />,
        color: "bg-gray-400",
        title: event.type,
        description: "",
      };
  }
}

function getTimeAgo(timestamp: string): string {
  const now = Date.now();
  const then = new Date(timestamp).getTime();
  const diff = Math.floor((now - then) / 1000);

  if (diff < 5) return "now";
  if (diff < 60) return `${diff}s`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  return `${Math.floor(diff / 86400)}d`;
}
