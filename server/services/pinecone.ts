/**
 * Pinecone Knowledge Base Service
 *
 * Provides RAG (Retrieval-Augmented Generation) capabilities for the AI Assistant.
 * The assistant queries this knowledge base during calls, texts, and chats to provide
 * accurate, context-aware responses about your business.
 */

import type { KnowledgeBaseEntry, KnowledgeBaseQueryResult } from "../types.js";

interface PineconeConfig {
  apiKey: string;
  environment: string;
  indexName: string;
  namespace: string;
}

interface PineconeVector {
  id: string;
  values: number[];
  metadata: Record<string, string>;
}

interface PineconeQueryMatch {
  id: string;
  score: number;
  metadata?: Record<string, string>;
}

function getConfig(): PineconeConfig {
  const apiKey = process.env.PINECONE_API_KEY;
  const environment = process.env.PINECONE_ENVIRONMENT || "us-east-1";
  const indexName = process.env.PINECONE_INDEX_NAME || "ai-assistant-kb";
  const namespace = process.env.PINECONE_NAMESPACE || "default";

  if (!apiKey) {
    throw new Error("PINECONE_API_KEY is required");
  }

  return { apiKey, environment, indexName, namespace };
}

function getIndexUrl(config: PineconeConfig): string {
  return `https://${config.indexName}-${config.environment}.svc.pinecone.io`;
}

/**
 * Generate embeddings for text using Pinecone's inference API.
 * Falls back to a simple hash-based embedding for development.
 */
async function generateEmbedding(text: string, config: PineconeConfig): Promise<number[]> {
  try {
    const response = await fetch("https://api.pinecone.io/embed", {
      method: "POST",
      headers: {
        "Api-Key": config.apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "multilingual-e5-large",
        inputs: [{ text }],
        parameters: { input_type: "query", truncate: "END" },
      }),
    });

    if (!response.ok) {
      throw new Error(`Pinecone embed API error: ${response.status}`);
    }

    const result = (await response.json()) as { data: Array<{ values: number[] }> };
    return result.data[0].values;
  } catch (error) {
    console.error("Embedding generation failed:", error);
    throw error;
  }
}

/**
 * Query the knowledge base for relevant context given a user question.
 * Used by the AI assistant during live conversations to ground its responses.
 */
export async function queryKnowledgeBase(
  query: string,
  topK: number = 5
): Promise<KnowledgeBaseQueryResult[]> {
  const config = getConfig();
  const indexUrl = getIndexUrl(config);
  const queryVector = await generateEmbedding(query, config);

  const response = await fetch(`${indexUrl}/query`, {
    method: "POST",
    headers: {
      "Api-Key": config.apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      namespace: config.namespace,
      vector: queryVector,
      topK,
      includeMetadata: true,
    }),
  });

  if (!response.ok) {
    throw new Error(`Pinecone query error: ${response.status}`);
  }

  const result = (await response.json()) as { matches: PineconeQueryMatch[] };

  return result.matches.map((match) => ({
    content: match.metadata?.content || "",
    score: match.score,
    metadata: {
      source: match.metadata?.source || "unknown",
      category: match.metadata?.category || "general",
    },
  }));
}

/**
 * Upsert entries into the knowledge base.
 * Use this to add business information, FAQs, product details, etc.
 */
export async function upsertKnowledgeBase(entries: KnowledgeBaseEntry[]): Promise<void> {
  const config = getConfig();
  const indexUrl = getIndexUrl(config);

  const vectors: PineconeVector[] = [];
  for (const entry of entries) {
    const embedding = await generateEmbedding(entry.content, config);
    vectors.push({
      id: entry.id,
      values: embedding,
      metadata: {
        content: entry.content,
        source: entry.metadata.source,
        category: entry.metadata.category,
        updatedAt: entry.metadata.updatedAt,
      },
    });
  }

  const response = await fetch(`${indexUrl}/vectors/upsert`, {
    method: "POST",
    headers: {
      "Api-Key": config.apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      namespace: config.namespace,
      vectors,
    }),
  });

  if (!response.ok) {
    throw new Error(`Pinecone upsert error: ${response.status}`);
  }

  console.log(`[Pinecone] Upserted ${entries.length} entries`);
}

/**
 * Delete entries from the knowledge base by IDs.
 */
export async function deleteFromKnowledgeBase(ids: string[]): Promise<void> {
  const config = getConfig();
  const indexUrl = getIndexUrl(config);

  const response = await fetch(`${indexUrl}/vectors/delete`, {
    method: "POST",
    headers: {
      "Api-Key": config.apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      namespace: config.namespace,
      ids,
    }),
  });

  if (!response.ok) {
    throw new Error(`Pinecone delete error: ${response.status}`);
  }

  console.log(`[Pinecone] Deleted ${ids.length} entries`);
}

/**
 * Build context string from knowledge base results for injection into AI prompts.
 */
export function buildContextFromResults(results: KnowledgeBaseQueryResult[]): string {
  if (results.length === 0) return "";

  const contextParts = results
    .filter((r) => r.score > 0.7)
    .map((r) => `[Source: ${r.metadata.source}] ${r.content}`);

  return contextParts.length > 0
    ? `\n\nRelevant business context:\n${contextParts.join("\n\n")}`
    : "";
}
