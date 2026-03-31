# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Learn Harness Engineering is a project-based course on building reliable coding environments for AI agents. The repo contains a VitePress documentation site plus hands-on project code.

## Commands

```sh
# Documentation site
npm install
npm run docs:dev        # Dev server with hot reload
npm run docs:build      # Production build
npm run docs:preview    # Preview built site

# Run lecture code examples
npx tsx docs/lectures/<lecture-dir>/code/<file>.ts

# Project Electron apps (from each project directory)
cd projects/project-NN/starter  # or solution/
npm install
npm run dev              # Build + launch Electron
npm run check            # Type-check only
npm run test             # Run Vitest tests
```

## Repository Structure

- `docs/` — VitePress documentation site (lectures, projects, resources)
- `docs/lectures/` — 12 lectures, each with `index.md` + `code/` examples
- `docs/projects/` — 6 project descriptions
- `docs/resources/` — Bilingual (en/zh) templates, references, OpenAI advanced pack
- `projects/shared/` — Shared Electron + TypeScript + React foundation
- `projects/project-NN/` — Per-project `starter/` and `solution/` directories

## Architecture

The course revolves around an Electron knowledge-base desktop app that evolves across 6 projects:
- **Main process** (`src/main/`): Window management, IPC handlers, service initialization
- **Preload** (`src/preload/`): contextBridge exposing typed API to renderer
- **Renderer** (`src/renderer/`): React UI with document list, Q&A panel, status bar
- **Services** (`src/services/`): DocumentService, IndexingService, QaService, PersistenceService
- **Shared types** (`src/shared/types.ts`): Cross-boundary interfaces and IPC channel constants

Each project's starter/solution is a complete copy of the Electron app at that evolutionary stage. P(N+1) starter is derived from P(N) solution.

## Key Patterns

- IPC channels defined as constants in `src/shared/types.ts` (IPC_CHANNELS)
- All data stored locally as JSON/text files (no database)
- Mock Q&A returns structured answers with citations (no real LLM API)
- Harness files in project roots: AGENTS.md, CLAUDE.md, feature_list.json, init.sh, claude-progress.md
- Progressive disclosure: short AGENTS.md entrypoint linking to focused docs

## Bilingual Content

All resources exist in both English (`docs/resources/en/`) and Chinese (`docs/resources/zh/`). Keep both in sync.
