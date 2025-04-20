import express from "express";

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("🚀 Auth Service is alive");
});

app.get("/health", (_req, res) => {
  res.json({ status: "Auth service healthy" });
});

app.listen(PORT, () => {
  console.log(`✅ Auth Service running on http://localhost:${PORT}`);
});
