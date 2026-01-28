import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { webhookRouter } from "./routes/webhooks.js";
import { assistantRouter } from "./routes/assistant.js";
import { initWebSocket } from "./ws.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Parse JSON and URL-encoded request bodies (required for webhooks)
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // ─── API Routes ───────────────────────────────────────────────────────────
  app.use("/api/webhooks", webhookRouter);
  app.use("/api/assistant", assistantRouter);

  // ─── Health check ─────────────────────────────────────────────────────────
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // ─── WebSocket for real-time dashboard ────────────────────────────────────
  initWebSocket(server);

  // ─── Static files ─────────────────────────────────────────────────────────
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all non-API routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    console.log(`AI Assistant Dashboard: http://localhost:${port}/dashboard`);
    console.log(`WebSocket endpoint: ws://localhost:${port}/ws`);
    console.log(`Webhook endpoints:`);
    console.log(`  Vapi:  http://localhost:${port}/api/webhooks/vapi`);
    console.log(`  Voice: http://localhost:${port}/api/webhooks/twilio/voice`);
    console.log(`  SMS:   http://localhost:${port}/api/webhooks/twilio/sms`);
  });
}

startServer().catch(console.error);
