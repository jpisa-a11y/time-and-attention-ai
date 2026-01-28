/**
 * Shared types for AI Assistant integration
 * Stack: Vapi (Voice Agent) + Twilio (Calls/SMS/Chat) + Deepgram (STT/TTS) + Pinecone (RAG)
 */

// ─── Call & Conversation Types ────────────────────────────────────────────────

export type ChannelType = "phone" | "sms" | "chat";
export type CallDirection = "inbound" | "outbound";
export type ConversationStatus =
  | "ringing"
  | "in-progress"
  | "completed"
  | "failed"
  | "no-answer"
  | "busy";

export interface ActiveConversation {
  id: string;
  channel: ChannelType;
  direction: CallDirection;
  status: ConversationStatus;
  callerNumber: string;
  callerName?: string;
  startedAt: string;
  duration?: number;
  transcript?: TranscriptEntry[];
  sentiment?: "positive" | "neutral" | "negative";
  summary?: string;
}

export interface TranscriptEntry {
  role: "assistant" | "user";
  content: string;
  timestamp: string;
}

// ─── Vapi Types ───────────────────────────────────────────────────────────────

export interface VapiAssistantConfig {
  name: string;
  model: {
    provider: string;
    model: string;
    systemPrompt: string;
    temperature: number;
  };
  voice: {
    provider: "deepgram";
    voiceId: string;
  };
  transcriber: {
    provider: "deepgram";
    model: string;
    language: string;
  };
  firstMessage: string;
  endCallMessage: string;
  serverUrl: string;
  serverUrlSecret: string;
}

export interface VapiWebhookPayload {
  message: {
    type:
      | "assistant-request"
      | "function-call"
      | "status-update"
      | "end-of-call-report"
      | "hang"
      | "speech-update"
      | "transcript";
    call?: {
      id: string;
      orgId: string;
      type: string;
      status: string;
      phoneNumberId?: string;
      customer?: {
        number: string;
        name?: string;
      };
    };
    status?: string;
    endedReason?: string;
    transcript?: string;
    summary?: string;
    messages?: Array<{ role: string; message: string }>;
    functionCall?: {
      name: string;
      parameters: Record<string, unknown>;
    };
  };
}

// ─── Twilio Types ─────────────────────────────────────────────────────────────

export interface TwilioCallWebhook {
  CallSid: string;
  AccountSid: string;
  From: string;
  To: string;
  CallStatus: string;
  Direction: string;
  CallerName?: string;
  ApiVersion: string;
}

export interface TwilioSmsWebhook {
  MessageSid: string;
  AccountSid: string;
  From: string;
  To: string;
  Body: string;
  NumMedia: string;
}

// ─── Pinecone Knowledge Base Types ────────────────────────────────────────────

export interface KnowledgeBaseEntry {
  id: string;
  content: string;
  metadata: {
    source: string;
    category: string;
    updatedAt: string;
  };
}

export interface KnowledgeBaseQueryResult {
  content: string;
  score: number;
  metadata: {
    source: string;
    category: string;
  };
}

// ─── WebSocket Event Types ────────────────────────────────────────────────────

export type WsEventType =
  | "call:started"
  | "call:status-update"
  | "call:ended"
  | "sms:received"
  | "sms:sent"
  | "chat:message"
  | "transcript:update"
  | "stats:update";

export interface WsEvent {
  type: WsEventType;
  data: ActiveConversation | ConversationStats | TranscriptEntry;
  timestamp: string;
}

// ─── Dashboard Stats ──────────────────────────────────────────────────────────

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

// ─── API Response Types ───────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
