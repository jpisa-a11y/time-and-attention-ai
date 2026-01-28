/**
 * AI Assistant Dashboard Page
 *
 * Real-time monitoring dashboard accessible from your smartphone browser.
 * Shows:
 * - Live "Call in Progress" status with caller info and transcript
 * - Active SMS and chat conversations
 * - Today's stats (calls, texts, chats handled)
 * - Activity feed with all AI interactions
 *
 * Connect from your phone: https://your-domain.com/dashboard
 * Add to home screen for app-like experience (PWA).
 */

import { useWebSocket } from "@/hooks/useWebSocket";
import { CallStatus } from "@/components/ai-assistant/CallStatus";
import { AssistantStats } from "@/components/ai-assistant/AssistantStats";
import { ActivityFeed } from "@/components/ai-assistant/ActivityFeed";
import { Bot, RefreshCw } from "lucide-react";

export default function Dashboard() {
  const { connected, activeConversations, stats, recentEvents } = useWebSocket();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[#2d5a3d] flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900">AI Assistant</h1>
              <p className="text-xs text-gray-500">Time & Attention</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`h-2.5 w-2.5 rounded-full ${connected ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
            />
            <span className="text-xs text-gray-500">{connected ? "Live" : "Offline"}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-4 py-6 space-y-6">
        {/* Active Conversations - "Call in Progress" */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Live Status
            </h2>
            {connected && (
              <div className="flex items-center gap-1.5 text-xs text-green-600">
                <RefreshCw className="h-3 w-3 animate-spin" />
                Real-time
              </div>
            )}
          </div>
          <CallStatus conversations={activeConversations} />
        </section>

        {/* Stats */}
        <section>
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
            Today's Performance
          </h2>
          <AssistantStats stats={stats} connected={connected} />
        </section>

        {/* Activity Feed */}
        <section>
          <ActivityFeed
            events={recentEvents.filter((e) => e.type !== "stats:update")}
          />
        </section>

        {/* Setup Info */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">How It Works</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2d5a3d] text-white text-xs font-bold">
                1
              </span>
              <p>
                <strong>Calls</strong> - Twilio receives the call, Vapi's AI agent answers using
                Deepgram for voice. Knowledge base (Pinecone) provides context.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2d5a3d] text-white text-xs font-bold">
                2
              </span>
              <p>
                <strong>Texts</strong> - Incoming SMS is processed by the AI with knowledge base
                context. An intelligent reply is sent automatically.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2d5a3d] text-white text-xs font-bold">
                3
              </span>
              <p>
                <strong>Chat</strong> - Website visitors get instant AI responses through the chat
                widget, backed by your knowledge base.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2d5a3d] text-white text-xs font-bold">
                4
              </span>
              <p>
                <strong>This Dashboard</strong> - Real-time monitoring via WebSocket. Open on your
                phone to see live call status, transcripts, and activity.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
