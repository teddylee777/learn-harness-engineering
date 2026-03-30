# Lecture 07. Why Agents Overreach and Under-Finish

## Question

Why do agent runs often attempt too much scope at once and still fail to finish
end-to-end behavior?

## Why It Matters

Overreach causes wide but shallow changes. The repository accumulates partial
implementations, while verified outcomes remain limited. Over time, this
increases maintenance cost and reduces trust in completion claims.

## Core Concepts

- Overreach: attempting multiple loosely defined objectives in one iteration.
- Under-finish: producing partial implementation without verified completion.
- Scope surface: an explicit, enumerable list of work units and their states.
- Work-in-progress limit: a rule that constrains active scope to preserve
  completion quality.
- Completion evidence: objective verification required before status changes.

## Detailed Explanation

Anthropic’s long-running observations show a recurring pattern: when prompts are
broad, generator behavior tends toward "start many things" rather than "finish
one thing." This is a harness-level failure mode because the run lacks explicit
control over active scope.

OpenAI’s harness engineering approach suggests a practical correction:
externalize scope and make progress stateful. Instead of a single broad goal,
the harness should define a small next unit of work, expected behavior, and
verification gate. This creates operational back-pressure against premature
completion.

A reliable scope model should let any session answer:

1. Which unit is active right now?
2. What exact behavior marks it complete?
3. What verification has passed?
4. What remains blocked?

When these fields are explicit, the harness can enforce "finish before expand."
This reduces partial drift and increases the share of changes that become
durable, testable behavior.

## Examples and Artifacts

- See [`code/`](./code/index.md) for one-shot failure patterns and incremental
  task-shaping examples.
- Useful artifacts include a structured feature/task list with explicit status
  values and a single active-item policy.
- A run summary should report completed behavior and evidence, not only changed
  files.

## Readings

- Anthropic: Effective harnesses for long-running agents
- Anthropic: Harness design for long-running application development
- OpenAI: Harness engineering: leveraging Codex in an agent-first world

## Exercises

1. Rewrite a broad request into five atomic work units, each with one explicit
   completion test.
2. Run one experiment with unlimited active tasks and one with a strict
   single-active-task rule. Compare verified completion count.
3. Inspect a recent diff and classify each change as completed behavior,
   incomplete behavior, or scaffolding. Record evidence for each classification.
