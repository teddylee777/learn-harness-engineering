# Lecture 09. Why Agents Declare Victory Too Early

## Question

Why do agents report completion before system-level correctness is established?

## Why It Matters

Premature completion claims create hidden defects, fragile handoffs, and repeated
rework. OpenAI and Anthropic both show that reliable completion depends on
evidence from execution, not only confidence from code edits.

## Core Concepts

- Completion evidence must be observable and reproducible.
- Runtime feedback (logs, traces, process state) is required to validate claims.
- End-of-session cleanliness is part of the definition of done.
- Recovery quality determines whether later sessions can continue productively.

## Detailed Explanation

OpenAI’s harness guidance emphasizes that repository diffs are not enough to
judge success. Agents need runtime signals that confirm the application started,
critical paths executed, and expected outputs were produced. Without these
signals, agents may treat partial progress as full completion.

Anthropic’s long-running harness work adds a second requirement: each session
must leave the environment in a clean, restartable state. If a session ends
with ambiguous indexing status, stale artifacts, or undocumented partial work,
the next session inherits uncertainty and spends time re-diagnosing state.

In practice, early victory declarations usually follow this sequence:

1. Local code changes appear plausible.
2. Runtime behavior is under-observed.
3. Verification is skipped or incomplete.
4. Completion is asserted without durable evidence.

A strong harness breaks this sequence by requiring runtime checks and clean-state
exit criteria before completion can be accepted.

## Examples and Artifacts

- `code/indexing.log`: sample runtime record showing startup, import, chunking,
  and completion signals.
- [`code/clean-state-checklist.md`](./code/clean-state-checklist.md): session-exit
  criteria for restartable state.
- [`code/index.md`](./code/index.md): index of lecture artifacts.

## Readings

Primary:
- OpenAI: *Harness engineering: leveraging Codex in an agent-first world*
- Anthropic: *Effective harnesses for long-running agents*

Secondary:
- LangChain: *The Anatomy of an Agent Harness*

## Exercises

1. Define a completion checklist that requires at least three runtime signals.
   Apply it to one feature task and record which previously hidden issues are
   detected.
2. Run a task twice: once without explicit clean-state exit rules and once with
   [`code/clean-state-checklist.md`](./code/clean-state-checklist.md). Compare
   startup time and diagnostic effort in the next session.
3. Review a past "done" claim and identify which missing runtime artifact would
   have made verification stronger.
