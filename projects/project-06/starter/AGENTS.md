# AGENTS.md -- Project 06: Runtime Observability and Debugging (Capstone)

## Startup Rules

1. Read this file.
2. Run `npm install && npm run check` to verify the build.
3. The app should launch with `npm run dev`.

## Project Description

This is the capstone project for the Learn Harness Engineering course. It combines all features from previous projects:
- Document import, indexing, and Q&A
- Conversation history view
- Structured logging for observability
- Clean state management for testing

## What to Build

The application needs:
1. A working ConversationHistory component with chat-style display
2. Feedback buttons on Q&A responses (thumbs up/down)
3. Structured logging that all services use
4. A clean state reset function
5. Benchmark scripts for measuring performance

## Conventions

- TypeScript strict mode.
- Named exports only.
- IPC channels defined in `src/shared/types.ts`.
- Services use constructor-injected `PersistenceService`.
