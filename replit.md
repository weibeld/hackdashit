# Hacker Simulator

## Overview

A web application that simulates a "hacking" experience with a retro-futuristic terminal aesthetic. Users can enter URLs or IP addresses and watch a simulated hacking process with progress indicators and terminal-style messages. The application features a dark, hacker-themed interface inspired by classic hacker movies and modern terminal applications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight routing library. The application has three main routes:
- Home page (`/`) - Main hacking simulator interface
- FAQ page (`/faq`) - Information about the tool
- 404 page - Fallback for undefined routes

**State Management**: Uses React hooks for local component state and TanStack Query (React Query) for server state management and caching. The query client is configured with infinite stale time and disabled refetching to minimize unnecessary network requests.

**UI Framework**: Shadcn UI component library with Radix UI primitives, providing accessible and customizable components. The design system uses:
- Tailwind CSS for styling with a custom configuration
- CSS variables for theming (dark mode by default)
- Monospace fonts (Space Mono) for terminal aesthetic
- Green/cyan color scheme on dark backgrounds

**Design System**: Terminal/hacker aesthetic with:
- Dark backgrounds (near-black)
- High-contrast green/cyan text
- Retro-futuristic styling
- Single-page focused interface
- Minimal borders with subtle glow effects

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development Setup**: Custom Vite integration for hot module replacement in development, with middleware for serving the React application.

**Storage Layer**: Abstracted through an `IStorage` interface with two implementations:
- `MemStorage` - In-memory storage for development/testing
- Database integration prepared via Drizzle ORM (schema defined but routes not yet implemented)

**API Design**: RESTful endpoints prefixed with `/api`. The server includes request logging middleware that captures method, path, status code, duration, and response bodies (truncated to 80 characters).

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL with:
- Schema definition in TypeScript
- Type-safe query building
- Zod schema validation integration
- Migration support

**Database Schema**: 
- Users table with fields: id (UUID primary key), username (unique), password
- Schema exported with TypeScript types for compile-time safety

**Provider**: Configured to use Neon Database serverless PostgreSQL via `@neondatabase/serverless` driver.

**Rationale**: Drizzle provides a lightweight, type-safe ORM that integrates well with TypeScript and serverless environments. The abstracted storage interface allows swapping between in-memory and database implementations without changing application code.

### External Dependencies

**UI Component Libraries**:
- Radix UI - Complete set of accessible React primitives for building the UI
- Shadcn UI - Pre-built component patterns using Radix UI
- Embla Carousel - Carousel/slider functionality
- CMDK - Command menu component
- Lucide React - Icon library

**Form Management**:
- React Hook Form - Form state management
- Hookform Resolvers - Schema validation integration
- Zod - Runtime type validation

**Styling**:
- Tailwind CSS - Utility-first CSS framework
- Class Variance Authority - Component variant management
- clsx/tailwind-merge - Conditional className utilities

**Data Fetching**:
- TanStack Query - Server state management and caching

**Database & ORM**:
- Drizzle ORM - Type-safe ORM
- Neon Database Serverless - PostgreSQL database provider
- connect-pg-simple - PostgreSQL session store

**Utilities**:
- date-fns - Date manipulation
- nanoid - Unique ID generation

**Development Tools**:
- Replit plugins - Development banner, cartographer, runtime error overlay
- ESBuild - Production bundling
- TSX - TypeScript execution for development