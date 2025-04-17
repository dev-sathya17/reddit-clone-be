# Reddit Clone Backend

This repository contains the backend for the Reddit Clone project, which is designed using a microservices architecture. The backend is set up in a monorepo structure, using `pnpm` as the package manager to manage multiple services.

## Architecture

- **Microservices-based**: The backend is divided into separate services, each responsible for a specific domain. The current services include:

  - **Auth Service**: Handles user authentication, registration, and authorization.
  - **User Service**: Manages user profiles, interactions, and other related features.

- **Monorepo Setup**: All services are contained within a single repository, using `pnpm` workspaces to manage dependencies across services.

- **TypeScript**: The backend is written in TypeScript for type safety and better development experience.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or above)
- [pnpm](https://pnpm.io/) (to manage dependencies in the monorepo)
- [Git](https://git-scm.com/) (for version control)
