# Lecture 03. Why the Repository Must Become the System of Record

## Question

Why should essential project knowledge be stored in the repository instead of
external chats, tickets, or memory?

## Why It Matters

Agents can only use what they can read during execution. OpenAI emphasizes
repo-local context as a prerequisite for reliable automation, and Anthropic
highlights durable state as necessary for long-running continuity. Knowledge
outside the repository is often inaccessible at run time.

## Core Concepts

- Agent-invisible knowledge is operationally unavailable.
- The repository is both codebase and execution memory surface.
- Durable project state should be discoverable by a fresh agent session.
- "System of record" means structured retrieval, not large volumes of prose.

## Detailed Explanation

Human teams can compensate for missing information through meetings, chat
history, and interpersonal memory. Agents usually cannot. As a result,
repository design must assume limited context windows and no implicit recall.

A repository that functions as a system of record provides concise, current
artifacts for the questions an agent must answer:

- What is this system and what does it do?
- How is it organized?
- How do I run and verify it?
- What work is in progress?
- What constraints are non-negotiable?

These artifacts should be close to execution paths and maintained with the same
discipline as source code. The goal is not "more documentation"; the goal is
minimal, durable, high-utility context for repeatable work.

## Examples and Artifacts

- Typical repository artifacts:
- Architecture overview with current module boundaries.
- Product and behavior constraints relevant to implementation.
- Startup and verification command references.
- Active plan/progress notes for ongoing tasks.
- Interfaces to external systems and quality gates.
- Validation check:
- Start a new agent session and ask it to explain the system and next tasks
  using repository contents only.
- Lecture examples: [`code/index.md`](./code/index.md)

## Readings

- Primary:
- OpenAI: *Harness engineering: leveraging Codex in an agent-first world*
- Anthropic: *Effective harnesses for long-running agents*
- Secondary:
- Thoughtworks: *Harness Engineering*
- LangChain: *The Anatomy of an Agent Harness*

## Exercises

1. Run a "cold-start audit": remove prior chat context and evaluate whether a
   fresh agent can discover architecture, run commands, and open work items.
2. Convert one external knowledge source (for example, a recurring ticket note)
   into a repo-local artifact and measure reusability in subsequent sessions.
3. Identify one stale repository document and replace it with a smaller,
   command-linked artifact that is easier to keep current.
