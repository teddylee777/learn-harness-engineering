[中文版本 →](/projects/project-03-multi-session-continuity/)

# Project 03. Keep the Agent Working Across Session Restarts

## What You Do

Add scope control and verification gates to the agent. Implement document chunking, metadata extraction, indexing progress display, and citation-based Q&A flow. Use `feature_list.json` to track feature status — one feature at a time, no marking as "pass" without verification evidence.

You run it twice: first without constraints, second with strict enforcement.

## Tools

- Claude Code or Codex
- Git
- Node.js + Electron

## Harness Mechanism

Progress log + session handoff + multi-session continuity
