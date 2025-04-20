import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = process.env.PORT || 4000;

// Proxy /auth/* to auth service
app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://auth:4001", // Docker Compose service name + port
    changeOrigin: true,
    pathRewrite: {
      "^/auth": "", // remove "/auth" prefix before forwarding
    },
  })
);

// Proxy /user/* to user service
app.use(
  "/user",
  createProxyMiddleware({
    target: "http://user:4002",
    changeOrigin: true,
    pathRewrite: {
      "^/user": "",
    },
  })
);

app.listen(PORT, () => {
  console.log(`🚪 API Gateway running at http://localhost:${PORT}`);
});
