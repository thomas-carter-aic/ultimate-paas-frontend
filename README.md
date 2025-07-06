# Ultimate PaaS Frontend

A comprehensive frontend for the AI-Native Cloud-Native PaaS Platform built with Turborepo, Next.js, TypeScript, and microfrontend architecture.

## 🏗️ Architecture

This project follows a **microfrontend architecture** using **Turborepo** as the monorepo management tool. Each microfrontend is a standalone Next.js application that can be developed, deployed, and scaled independently.

### Microfrontends

- **Dashboard** (`apps/dashboard`) - Main dashboard and overview (Port: 3000)
- **App Management** (`apps/app-management`) - Application lifecycle management (Port: 3001)
- **Deployment** (`apps/deployment`) - Deployment management and CI/CD (Port: 3002)
- **AI Analytics** (`apps/ai-analytics`) - AI-powered insights and analytics (Port: 3003)
- **Plugin Management** (`apps/plugin-management`) - Plugin ecosystem management (Port: 3004)
- **Security** (`apps/security`) - Security settings and compliance (Port: 3005)
- **Monitoring** (`apps/monitoring`) - System monitoring and observability (Port: 3006)

### Shared Packages

- **UI** (`packages/ui`) - Shared UI components with Tailwind CSS
- **Types** (`packages/types`) - TypeScript type definitions
- **Auth** (`packages/auth`) - Authentication logic with OAuth/OIDC
- **API Client** (`packages/api-client`) - REST and GraphQL client utilities
- **Config** (`packages/config`) - Shared configuration (ESLint, Tailwind)
- **Utils** (`packages/utils`) - Shared utility functions

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Authentication**: NextAuth.js with OAuth/OIDC
- **Monorepo**: Turborepo
- **Package Manager**: npm with workspaces

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ 
- npm 10+

### Installation

1. **Clone and navigate to the project**:
   ```bash
   cd /home/oss/Business/workspaces/nexus-workspace/v7/ultimate-paas-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   # Copy environment template for each app
   cp apps/dashboard/.env.example apps/dashboard/.env.local
   # Repeat for other apps as needed
   ```

4. **Start development servers**:
   ```bash
   # Start all microfrontends
   npm run dev
   
   # Or start individual microfrontends
   npm run dev --filter=@ultimate-paas/dashboard
   npm run dev --filter=@ultimate-paas/app-management
   ```

### Environment Variables

Each microfrontend requires the following environment variables:

```env
# Backend API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:8000/graphql

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
OAUTH_CLIENT_ID=your-oauth-client-id
OAUTH_CLIENT_SECRET=your-oauth-client-secret
OAUTH_ISSUER=your-oauth-issuer-url
```

## 📦 Available Scripts

### Root Level Commands

```bash
# Development
npm run dev              # Start all microfrontends in development mode
npm run build           # Build all applications and packages
npm run lint            # Lint all packages
npm run type-check      # Type check all packages
npm run test            # Run tests across all packages

# Utilities
npm run clean           # Clean all build artifacts
npm run format          # Format code with Prettier
```

### Individual Microfrontend Commands

```bash
# Target specific microfrontend
npm run dev --filter=@ultimate-paas/dashboard
npm run build --filter=@ultimate-paas/app-management
npm run lint --filter=@ultimate-paas/ai-analytics
```

## 🔗 Backend Integration

This frontend connects to the `ultimate-paas-base` backend located at `../ultimate-paas-base/`. The backend provides:

- **REST API**: Standard HTTP endpoints for CRUD operations
- **GraphQL API**: Flexible query interface for complex data fetching
- **OAuth/OIDC**: Authentication and authorization
- **WebSocket**: Real-time updates for deployments and monitoring

### API Endpoints

- REST API: `http://localhost:8000/api/v1/`
- GraphQL: `http://localhost:8000/graphql`
- WebSocket: `ws://localhost:8000/ws`

## 🎨 UI Components

The shared UI package (`@ultimate-paas/ui`) provides:

- **Design System**: Consistent styling with Tailwind CSS
- **Components**: Reusable React components (Button, Card, Modal, etc.)
- **Themes**: Light/dark mode support
- **Accessibility**: WCAG compliant components

### Using UI Components

```tsx
import { Button, Card, Modal } from "@ultimate-paas/ui";

function MyComponent() {
  return (
    <Card>
      <Button variant="primary" size="lg">
        Deploy Application
      </Button>
    </Card>
  );
}
```

## 🔐 Authentication

Authentication is handled through the `@ultimate-paas/auth` package using:

- **NextAuth.js**: Session management
- **OAuth/OIDC**: Integration with identity providers
- **Zustand**: Client-side auth state management
- **JWT**: Token-based authentication

### Auth Usage

```tsx
import { useAuthStore } from "@ultimate-paas/auth";

function ProtectedComponent() {
  const { user, isAuthenticated, hasPermission } = useAuthStore();
  
  if (!isAuthenticated) {
    return <LoginForm />;
  }
  
  if (!hasPermission('applications', 'read')) {
    return <AccessDenied />;
  }
  
  return <ApplicationList />;
}
```

## 📊 State Management

- **Zustand**: Lightweight state management for auth and global state
- **TanStack Query**: Server state management with caching and synchronization
- **Local State**: React hooks for component-level state

## 🚀 Deployment

### Development Deployment

```bash
# Build all applications
npm run build

# Start production servers
npm run start
```

### Production Deployment

Each microfrontend can be deployed independently:

```bash
# Build specific microfrontend
npm run build --filter=@ultimate-paas/dashboard

# Deploy to your preferred platform
# (Vercel, Netlify, AWS, etc.)
```

### Docker Deployment

```dockerfile
# Example Dockerfile for a microfrontend
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests for specific package
npm run test --filter=@ultimate-paas/ui

# Run tests in watch mode
npm run test:watch
```

## 📝 Contributing

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the established patterns

3. **Run quality checks**:
   ```bash
   npm run lint
   npm run type-check
   npm run test
   ```

4. **Submit a pull request**

## 📚 Documentation

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest)

## 🔧 Troubleshooting

### Common Issues

1. **Port conflicts**: Each microfrontend runs on a different port (3000-3006)
2. **Package resolution**: Use `npm run clean` and reinstall if packages aren't resolving
3. **Type errors**: Run `npm run type-check` to identify TypeScript issues
4. **Build failures**: Check that all dependencies are properly installed

### Getting Help

- Check the [Issues](../../issues) for known problems
- Review the backend documentation at `../ultimate-paas-base/README.md`
- Ensure the backend is running before starting the frontend

## 📄 License

This project is part of the Ultimate PaaS platform. See the main project license for details.