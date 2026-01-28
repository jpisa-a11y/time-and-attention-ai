/**
 * Call Status Component
 *
 * Displays the real-time "CALL IN PROGRESS" indicator with caller info,
 * live transcript, and call duration. This is the core component that
 * shows on your smartphone dashboard when the AI is handling a call.
 */

import { useState, useEffect } from "react";
import { Phone, PhoneIncoming, PhoneOff, MessageSquare, Mic } from "lucide-react";
import type { ActiveConversation } from "@/hooks/useWebSocket";

interface CallStatusProps {
  conversations: ActiveConversation[];
}

export function CallStatus({ conversations }: CallStatusProps) {
  const activeCalls = conversations.filter((c) => c.channel === "phone");
  const activeSms = conversations.filter((c) => c.channel === "sms");
  const activeChats = conversations.filter((c) => c.channel === "chat");

  if (conversations.length === 0) {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-[#2d5a3d] to-[#1a3a25] p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-green-300">AI ASSISTANT ONLINE</span>
        </div>
        <p className="text-lg font-semibold">Ready to answer calls, texts & chats</p>
        <p className="text-sm text-white/60 mt-2">24/7 AI receptionist standing by</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {activeCalls.map((call) => (
        <CallCard key={call.id} conversation={call} />
      ))}
      {activeSms.map((sms) => (
        <SmsCard key={sms.id} conversation={sms} />
      ))}
      {activeChats.map((chat) => (
        <ChatCard key={chat.id} conversation={chat} />
      ))}
    </div>
  );
}

function CallCard({ conversation }: { conversation: ActiveConversation }) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const start = new Date(conversation.startedAt).getTime();
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [conversation.startedAt]);

  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const isRinging = conversation.status === "ringing";
  const isActive = conversation.status === "in-progress";

  return (
    <div
      className={`rounded-2xl p-5 text-white transition-all ${
        isRinging
          ? "bg-gradient-to-br from-amber-600 to-amber-800 animate-pulse"
          : isActive
            ? "bg-gradient-to-br from-[#2d5a3d] to-[#1a3a25]"
            : "bg-gradient-to-br from-gray-600 to-gray-800"
      }`}
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className={`h-3 w-3 rounded-full ${
              isRinging ? "bg-amber-300 animate-ping" : isActive ? "bg-green-400 animate-pulse" : "bg-gray-400"
            }`}
          />
          <span className="text-xs font-bold uppercase tracking-wider">
            {isRinging ? "INCOMING CALL" : isActive ? "CALL IN PROGRESS" : conversation.status}
          </span>
        </div>
        {isActive && (
          <span className="font-mono text-sm text-white/80">{formatDuration(elapsed)}</span>
        )}
      </div>

      {/* Caller Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
          {isRinging ? (
            <PhoneIncoming className="h-6 w-6" />
          ) : isActive ? (
            <Phone className="h-6 w-6" />
          ) : (
            <PhoneOff className="h-6 w-6" />
          )}
        </div>
        <div>
          <p className="text-lg font-semibold">
            {conversation.callerName || conversation.callerNumber}
          </p>
          {conversation.callerName && (
            <p className="text-sm text-white/60">{conversation.callerNumber}</p>
          )}
        </div>
      </div>

      {/* Live Transcript */}
      {isActive && conversation.transcript && conversation.transcript.length > 0 && (
        <div className="mt-3 rounded-xl bg-black/20 p-3 max-h-40 overflow-y-auto">
          <div className="flex items-center gap-2 mb-2">
            <Mic className="h-3 w-3 text-green-300" />
            <span className="text-xs text-white/50">LIVE TRANSCRIPT</span>
          </div>
          <div className="space-y-2">
            {conversation.transcript.slice(-4).map((entry, i) => (
              <div key={i} className="text-sm">
                <span className={`font-medium ${entry.role === "assistant" ? "text-green-300" : "text-blue-300"}`}>
                  {entry.role === "assistant" ? "AI:" : "Caller:"}
                </span>{" "}
                <span className="text-white/80">{entry.content}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Handling Indicator */}
      {isActive && (
        <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
          <div className="flex gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
          <span>AI Assistant is handling this call</span>
        </div>
      )}
    </div>
  );
}

function SmsCard({ conversation }: { conversation: ActiveConversation }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-5 text-white">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-3 w-3 rounded-full bg-blue-300 animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wider">SMS CONVERSATION</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
          <MessageSquare className="h-6 w-6" />
        </div>
        <div>
          <p className="text-lg font-semibold">
            {conversation.callerName || conversation.callerNumber}
          </p>
          <p className="text-sm text-white/60">AI handling text message</p>
        </div>
      </div>
      {conversation.transcript && conversation.transcript.length > 0 && (
        <div className="mt-3 rounded-xl bg-black/20 p-3">
          {conversation.transcript.slice(-2).map((entry, i) => (
            <p key={i} className="text-sm text-white/80">
              <span className="font-medium">{entry.role === "user" ? "Them:" : "AI:"}</span>{" "}
              {entry.content}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function ChatCard({ conversation }: { conversation: ActiveConversation }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 p-5 text-white">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-3 w-3 rounded-full bg-purple-300 animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wider">CHAT ACTIVE</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
          <MessageSquare className="h-6 w-6" />
        </div>
        <div>
          <p className="text-lg font-semibold">Web Chat</p>
          <p className="text-sm text-white/60">AI handling live chat</p>
        </div>
      </div>
    </div>
  );
}
