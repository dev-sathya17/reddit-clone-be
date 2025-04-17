import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (_req, res) => {
  res.send("Auth Service is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Auth Service listening on port ${PORT}`);
});
