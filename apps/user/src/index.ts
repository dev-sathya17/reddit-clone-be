import express from "express";

const app = express();
const PORT = process.env.PORT || 4002;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("🚀 User Service is alive");
});

app.get("/health", (_req, res) => {
  res.json({ status: "User service healthy" });
});

app.listen(PORT, () => {
  console.log(`✅ User Service running on http://localhost:${PORT}`);
});
