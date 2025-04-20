# apps/auth/Dockerfile

FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy the entire monorepo to resolve workspace dependencies
COPY . .

# Enable and setup PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install only the dependencies for the auth service
RUN pnpm install --filter auth...

# Build the TypeScript code
RUN pnpm --filter auth build

# Expose the service port
EXPOSE 4000

# Run the built JavaScript
CMD ["node", "apps/auth/dist/index.js"]
