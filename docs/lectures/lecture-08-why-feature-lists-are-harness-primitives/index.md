# Lecture 08. Why Feature Lists Are Harness Primitives

## Question

Why are feature lists a core harness primitive rather than optional planning
documentation?

## Why It Matters

Without an explicit feature state model, agents and evaluators cannot reliably
coordinate scope, verification, and completion. Work appears active, but system
state remains ambiguous.

## Core Concepts

- Feature list: a structured task surface containing units of behavior to build
  and verify.
- State model: explicit feature status values (for example, not started,
  in progress, blocked, passing).
- Verification binding: a required link between each feature and objective
  evidence of correctness.
- Harness primitive: a structure other harness components depend on directly.
- Back-pressure: feedback that prevents unverified work from being marked done.

## Detailed Explanation

Anthropic’s harness patterns highlight a key idea: feature lists are not only
for planning; they are control structures for execution. A coding agent needs a
concrete work surface, and the harness needs a place to enforce state
transitions.

OpenAI’s harness framing is compatible with this approach. If repository
artifacts are the system of record, then feature state should also be external
and machine-readable. This allows planners, generators, and evaluators to
operate on the same source of truth instead of exchanging ambiguous summaries.

A feature list becomes a harness primitive when other mechanisms depend on it:

1. Scheduling uses it to select the next unit of work.
2. Verification uses it to gate pass-state transitions.
3. Handoffs use it to recover current status quickly.
4. Reporting uses it to distinguish implemented code from validated behavior.

The practical effect is stronger convergence. Agents can still generate broadly,
but they cannot claim completion without satisfying explicit per-feature
criteria.

## Examples and Artifacts

- See [`code/`](./code/index.md) for pass-state gating and evaluator-loop
  examples.
- A useful feature record includes identifier, behavior statement, verification
  method, status, and evidence reference.
- Strong harnesses permit status changes to `passing` only after a defined test
  or evaluator check succeeds.

## Readings

- Anthropic: Effective harnesses for long-running agents
- Anthropic: Harness design for long-running application development
- OpenAI: Harness engineering: leveraging Codex in an agent-first world

## Exercises

1. Define a minimal feature-list schema with fields for behavior, verification,
   and status history.
2. Select one feature and specify the exact evidence required for transition
   from `in progress` to `passing`.
3. Compare two runs on the same task: one with free-form progress notes, one
   with a structured feature list and status gates. Measure false-completion
   rate.
