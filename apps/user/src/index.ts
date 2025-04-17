import express from "express";

const app = express();
const PORT = process.env.PORT || 4001;

app.get("/", (_req, res) => {
  res.send("User Service is running 🚀");
});

app.listen(PORT, () => {
  console.log(`User Service listening on port ${PORT}`);
});
