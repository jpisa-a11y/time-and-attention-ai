/**
 * Assistant Stats Component
 *
 * Dashboard statistics cards showing today's AI assistant performance:
 * calls handled, SMS processed, chats completed, active conversations,
 * and sentiment analysis breakdown.
 */

import { Phone, MessageSquare, MessageCircle, Activity, PhoneMissed, Clock } from "lucide-react";
import type { ConversationStats } from "@/hooks/useWebSocket";

interface AssistantStatsProps {
  stats: ConversationStats;
  connected: boolean;
}

export function AssistantStats({ stats, connected }: AssistantStatsProps) {
  return (
    <div className="space-y-4">
      {/* Connection Status */}
      <div className="flex items-center gap-2">
        <div className={`h-2.5 w-2.5 rounded-full ${connected ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
        <span className={`text-sm font-medium ${connected ? "text-green-700" : "text-red-600"}`}>
          {connected ? "Connected - Real-time updates active" : "Disconnected - Reconnecting..."}
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <StatCard
          icon={<Phone className="h-5 w-5" />}
          label="Calls Today"
          value={stats.totalCallsToday}
          color="text-green-600"
          bgColor="bg-green-50"
        />
        <StatCard
          icon={<MessageSquare className="h-5 w-5" />}
          label="SMS Today"
          value={stats.totalSmsToday}
          color="text-blue-600"
          bgColor="bg-blue-50"
        />
        <StatCard
          icon={<MessageCircle className="h-5 w-5" />}
          label="Chats Today"
          value={stats.totalChatsToday}
          color="text-purple-600"
          bgColor="bg-purple-50"
        />
        <StatCard
          icon={<Activity className="h-5 w-5" />}
          label="Active Now"
          value={stats.activeConversations}
          color="text-amber-600"
          bgColor="bg-amber-50"
        />
        <StatCard
          icon={<PhoneMissed className="h-5 w-5" />}
          label="Missed"
          value={stats.missedCalls}
          color="text-red-600"
          bgColor="bg-red-50"
        />
        <StatCard
          icon={<Clock className="h-5 w-5" />}
          label="Avg Duration"
          value={formatDuration(stats.avgCallDuration)}
          color="text-gray-600"
          bgColor="bg-gray-50"
        />
      </div>

      {/* Sentiment Breakdown */}
      {(stats.sentimentBreakdown.positive > 0 ||
        stats.sentimentBreakdown.neutral > 0 ||
        stats.sentimentBreakdown.negative > 0) && (
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <p className="text-xs font-medium text-gray-500 uppercase mb-3">Caller Sentiment</p>
          <div className="flex gap-4">
            <SentimentBar label="Positive" count={stats.sentimentBreakdown.positive} color="bg-green-500" />
            <SentimentBar label="Neutral" count={stats.sentimentBreakdown.neutral} color="bg-gray-400" />
            <SentimentBar label="Negative" count={stats.sentimentBreakdown.negative} color="bg-red-500" />
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  color,
  bgColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  color: string;
  bgColor: string;
}) {
  return (
    <div className={`rounded-xl ${bgColor} p-4`}>
      <div className={`${color} mb-2`}>{icon}</div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  );
}

function SentimentBar({ label, count, color }: { label: string; count: number; color: string }) {
  const total = count || 1;
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-600">{label}</span>
        <span className="text-xs font-medium text-gray-800">{count}</span>
      </div>
      <div className="h-2 rounded-full bg-gray-200">
        <div
          className={`h-2 rounded-full ${color} transition-all`}
          style={{ width: `${Math.min((count / total) * 100, 100)}%` }}
        />
      </div>
    </div>
  );
}

function formatDuration(seconds: number): string {
  if (seconds === 0) return "0s";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}s`;
  return `${m}m ${s}s`;
}
