# apps/gateway/Dockerfile

FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy entire monorepo (to allow workspace resolution)
COPY . .

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install only the gateway's dependencies
RUN pnpm install --filter gateway...

# Build TypeScript
RUN pnpm --filter gateway build

# Expose port
EXPOSE 4000


# Run built file
CMD ["node", "apps/gateway/dist/index.js"]
