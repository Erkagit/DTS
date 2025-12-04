import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";

import { vendorsRoute } from "./routes/vendors";
import { servicesRoute } from "./routes/services";
import { bookingsRoute } from "./routes/bookings";
import { categoriesRoute } from "./routes/categories";

const app = new Hono();

// Middleware
app.use("*", logger());
app.use("*", prettyJSON());
app.use(
  "*",
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

// Health check
app.get("/", (c) => {
  return c.json({
    name: "Evently API",
    version: "0.1.0",
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
const api = new Hono();

api.route("/vendors", vendorsRoute);
api.route("/services", servicesRoute);
api.route("/bookings", bookingsRoute);
api.route("/categories", categoriesRoute);

app.route("/api/v1", api);

// 404 handler
app.notFound((c) => {
  return c.json({ error: "Not Found", message: "The requested resource was not found" }, 404);
});

// Error handler
app.onError((err, c) => {
  console.error("Error:", err);
  return c.json({ error: "Internal Server Error", message: err.message }, 500);
});

const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;

console.log(`🚀 Evently API server running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

export default app;
