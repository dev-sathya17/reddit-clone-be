# apps/user/Dockerfile

FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy the entire monorepo to resolve workspace dependencies
COPY . .

# Enable and setup PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies scoped to user service
RUN pnpm install --filter user...

# Build TypeScript for user service
RUN pnpm --filter user build

# Expose user service port
EXPOSE 4001

# Run built JS
CMD ["node", "apps/user/dist/index.js"]
