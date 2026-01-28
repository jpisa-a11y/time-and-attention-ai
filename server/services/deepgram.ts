/**
 * Deepgram Speech Service
 *
 * Provides Speech-to-Text (STT) and Text-to-Speech (TTS) capabilities.
 * Deepgram is configured as the transcriber and voice provider within Vapi,
 * but this service also supports direct usage for SMS/chat audio processing.
 */

interface DeepgramConfig {
  apiKey: string;
  sttModel: string;
  ttsModel: string;
  ttsVoice: string;
  language: string;
}

interface DeepgramTranscriptResult {
  text: string;
  confidence: number;
  words: Array<{
    word: string;
    start: number;
    end: number;
    confidence: number;
  }>;
  duration: number;
}

interface DeepgramSpeakResult {
  audioBuffer: Buffer;
  contentType: string;
}

function getConfig(): DeepgramConfig {
  const apiKey = process.env.DEEPGRAM_API_KEY;
  if (!apiKey) {
    throw new Error("DEEPGRAM_API_KEY is required");
  }

  return {
    apiKey,
    sttModel: process.env.DEEPGRAM_STT_MODEL || "nova-2",
    ttsModel: process.env.DEEPGRAM_TTS_MODEL || "aura",
    ttsVoice: process.env.DEEPGRAM_TTS_VOICE || "asteria-en",
    language: process.env.DEEPGRAM_LANGUAGE || "en-US",
  };
}

/**
 * Transcribe audio buffer to text using Deepgram Nova-2 model.
 * Used for voicemail transcription and audio message processing.
 */
export async function transcribeAudio(
  audioBuffer: Buffer,
  mimeType: string = "audio/wav"
): Promise<DeepgramTranscriptResult> {
  const config = getConfig();

  const response = await fetch(
    `https://api.deepgram.com/v1/listen?model=${config.sttModel}&language=${config.language}&smart_format=true&punctuate=true&diarize=true`,
    {
      method: "POST",
      headers: {
        Authorization: `Token ${config.apiKey}`,
        "Content-Type": mimeType,
      },
      body: audioBuffer,
    }
  );

  if (!response.ok) {
    throw new Error(`Deepgram STT error: ${response.status}`);
  }

  const result = (await response.json()) as {
    results: {
      channels: Array<{
        alternatives: Array<{
          transcript: string;
          confidence: number;
          words: Array<{ word: string; start: number; end: number; confidence: number }>;
        }>;
      }>;
      duration: number;
    };
  };

  const alternative = result.results.channels[0]?.alternatives[0];
  return {
    text: alternative?.transcript || "",
    confidence: alternative?.confidence || 0,
    words: alternative?.words || [],
    duration: result.results.duration || 0,
  };
}

/**
 * Convert text to speech using Deepgram Aura TTS model.
 * Returns an audio buffer that can be streamed to Twilio or played in the chat widget.
 */
export async function textToSpeech(text: string): Promise<DeepgramSpeakResult> {
  const config = getConfig();

  const response = await fetch(
    `https://api.deepgram.com/v1/speak?model=${config.ttsVoice}&encoding=mp3`,
    {
      method: "POST",
      headers: {
        Authorization: `Token ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }
  );

  if (!response.ok) {
    throw new Error(`Deepgram TTS error: ${response.status}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return {
    audioBuffer: Buffer.from(arrayBuffer),
    contentType: "audio/mpeg",
  };
}

/**
 * Get Deepgram provider configuration for Vapi assistant setup.
 * Vapi uses Deepgram as both the transcriber (STT) and voice (TTS) provider.
 */
export function getVapiDeepgramConfig() {
  const config = getConfig();

  return {
    transcriber: {
      provider: "deepgram" as const,
      model: config.sttModel,
      language: config.language,
      keywords: [] as string[], // Add business-specific keywords for better recognition
    },
    voice: {
      provider: "deepgram" as const,
      voiceId: config.ttsVoice,
    },
  };
}
