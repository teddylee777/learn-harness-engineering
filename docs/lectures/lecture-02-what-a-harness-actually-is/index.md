# Lecture 02. What a Harness Actually Is

## Question

What is included in an agent harness, and what is outside that boundary?

## Why It Matters

Without a precise definition, teams underinvest in critical infrastructure and
overfocus on prompt edits. OpenAI and Anthropic both treat the harness as a
first-class engineering surface that determines whether model capability can be
used reliably.

## Core Concepts

- Working definition: Agent system = Model + Harness.
- The model contributes reasoning; the harness contributes execution conditions.
- Prompts are one harness component, not the whole harness.
- Any component that changes agent perception, action, memory, or verification
  belongs to harness design.

## Detailed Explanation

For this course, use an operational boundary:

**If a component is not model weights, it is part of the harness.**

This boundary is useful because it avoids false distinctions such as "real
engineering" versus "prompt work." From the agent's perspective, instructions,
tooling, runtime limits, repository layout, and validation hooks all influence
outcomes.

A practical harness usually includes:

- Instructions: system messages and repo-local directives.
- Capabilities: shell, APIs, MCP tools, browser, and file operations.
- Environment: sandbox, dependency state, and runtime configuration.
- State: plans, progress logs, feature artifacts, and commit history.
- Control and feedback: tests, linters, evaluators, retry logic, and logs.

The same model can perform very differently across repositories because these
surfaces vary. Performance changes are often harness effects, not model changes.

## Examples and Artifacts

- Boundary test:
- Remove a component and ask whether agent access, action, state continuity, or
  error recovery changed.
- If behavior changes materially, the removed component is harness-critical.
- Lecture examples: [`code/index.md`](./code/index.md)
- Typical artifacts to audit:
- `AGENTS.md` or equivalent instruction entrypoint.
- Setup and verification scripts.
- Persistent work-state files.
- Post-run logs or evaluation summaries.

## Readings

- Primary:
- OpenAI: *Harness engineering: leveraging Codex in an agent-first world*
- Anthropic: *Effective harnesses for long-running agents*
- Secondary:
- LangChain: *The Anatomy of an Agent Harness*
- Thoughtworks: *Harness Engineering*
- HumanLayer: *Skill Issue: Harness Engineering for Coding Agents*

## Exercises

1. Compare one model across two repositories with different instruction and tool
   surfaces. List which behavior differences are attributable to harness changes.
2. Disable one harness layer (for example, validation hooks) and classify the
   new failures that appear.
3. Create a one-page harness inventory for a current project and mark missing
   or weak components.
