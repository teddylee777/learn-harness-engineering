# Learn Harness Engineering

> A project-based course on building the environment, state management, verification, and control mechanisms that make Codex and Claude Code work more reliably.

This course is a work in progress. Content may change as it evolves.

Chinese is now the default site language. The Chinese homepage is available at [/zh/](/zh/).

## Overview

Harness engineering is about building a complete working environment around the model so it produces reliable results. It's not just about writing prompts. It also covers:

- Where code lives and how it's organized
- What the agent is and isn't allowed to do
- How to track task progress and pick up where you left off
- How to verify that work was done correctly
- How to diagnose problems when they arise
- What rules must always be followed
- How to leave things clean after each session

This course is **hands-on**. We won't stop at concepts. You'll have Codex or Claude Code work repeatedly on the same evolving Electron application, comparing weak harnesses against strong ones.

The questions this course actually cares about:

- Which harness designs improve task completion rates?
- Which designs reduce rework and incorrect completions?
- Which mechanisms keep long-running tasks progressing steadily?
- Which structures keep the system maintainable after multiple agent runs?

## Core Thesis

When you let models do work, the human's job is to define the rules and boundaries. That's the harness.

**The key point:** Models are powerful, but that doesn't mean they can reliably complete real engineering tasks on their own. They need explicit rules to constrain their scope, clear handoff mechanisms to maintain continuity across long tasks, and verification methods to confirm they did the work correctly.

We're not trying to "make the model smarter." We're studying how to build a reliable working environment around the model so the same model produces more reliable output.

## Syllabus

### Lectures

- [Lecture 01. Strong models don't mean reliable execution](/en/lectures/lecture-01-why-capable-agents-still-fail/)
- [Lecture 02. What harness actually means](/en/lectures/lecture-02-what-a-harness-actually-is/)
- [Lecture 03. Make the repository your single source of truth](/en/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/)
- [Lecture 04. Split instructions across files, not one giant file](/en/lectures/lecture-04-why-one-giant-instruction-file-fails/)
- [Lecture 05. Keep context alive across sessions](/en/lectures/lecture-05-why-long-running-tasks-lose-continuity/)
- [Lecture 06. Initialize before every agent session](/en/lectures/lecture-06-why-initialization-needs-its-own-phase/)
- [Lecture 07. Draw clear task boundaries for agents](/en/lectures/lecture-07-why-agents-overreach-and-under-finish/)
- [Lecture 08. Use feature lists to constrain what the agent does](/en/lectures/lecture-08-why-feature-lists-are-harness-primitives/)
- [Lecture 09. Stop agents from declaring victory early](/en/lectures/lecture-09-why-agents-declare-victory-too-early/)
- [Lecture 10. Only a full-pipeline run counts as real verification](/en/lectures/lecture-10-why-end-to-end-testing-changes-results/)
- [Lecture 11. Make the agent's runtime observable](/en/lectures/lecture-11-why-observability-belongs-inside-the-harness/)
- [Lecture 12. Clean handoff at the end of every session](/en/lectures/lecture-12-why-every-session-must-leave-a-clean-state/)

### Projects

- [Project 01. Prompt-only vs. rules-first: how much difference does it make](/en/projects/project-01-baseline-vs-minimal-harness/)
- [Project 02. Make the project readable and pick up where you left off](/en/projects/project-02-agent-readable-workspace/)
- [Project 03. Keep the agent working across session restarts](/en/projects/project-03-multi-session-continuity/)
- [Project 04. Use runtime feedback to correct agent behavior](/en/projects/project-04-incremental-indexing/)
- [Project 05. Make the agent verify its own work](/en/projects/project-05-grounded-qa-verification/)
- [Project 06. Build a complete agent harness](/en/projects/project-06-runtime-observability-and-debugging/)

### Resource Library

- [English Resource Overview](/en/resources/)
- [Chinese Resource Library](/zh/resources/)
