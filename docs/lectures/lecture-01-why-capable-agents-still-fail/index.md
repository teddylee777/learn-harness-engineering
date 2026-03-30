# Lecture 01. Why Capable Agents Still Fail

## Question

Why do strong foundation models still fail on practical software tasks?

## Why It Matters

If failures are misdiagnosed as model limitations, teams often spend effort on
model upgrades when the larger issue is execution design. OpenAI and Anthropic
both emphasize that agent reliability depends heavily on the harness: task
definition, tool access, state handling, and verification flow.

## Core Concepts

- Reliability is a system-level outcome, not a model-only metric.
- Many observed failures are harness-induced, even when the model is capable.
- Failures should be treated as diagnostic signals for missing environment
  structure.
- Iterative improvement requires a repeatable loop: run, inspect, patch, rerun.

## Detailed Explanation

In controlled benchmarks, a model may appear highly capable. In real
repositories, the same model often fails because it operates under uncertainty:
unclear task boundaries, incomplete setup instructions, weak observability, or
no enforced definition of done.

OpenAI frames this as harness engineering: external scaffolding that allows the
model to act coherently on real work. Anthropic similarly shows that
long-running agent performance depends on explicit recovery paths, stable state,
and reliable feedback loops.

Typical failure pattern:

1. The agent starts with incomplete context.
2. It makes locally reasonable changes.
3. It cannot verify global correctness.
4. It overestimates completion and exits early.

This pattern does not imply weak reasoning. It indicates insufficient structure
around reasoning. Therefore, the first response to failure should be
instrumentation and diagnosis, followed by targeted harness changes.

## Examples and Artifacts

- Failure signals to capture:
- Excessive exploration before the first concrete change.
- Partial implementation without durable progress notes.
- "Task complete" claims without test evidence.
- New sessions repeating prior discovery work.
- Practice artifacts:
- Task brief with explicit scope boundaries.
- Startup and health-check command list.
- Required verification command set.
- Session handoff notes in the repository.
- Code examples for this lecture: [`code/index.md`](./code/index.md)

## Readings

- Primary:
- OpenAI: *Harness engineering: leveraging Codex in an agent-first world*
- Anthropic: *Effective harnesses for long-running agents*
- Secondary:
- LangChain: *The Anatomy of an Agent Harness*
- HumanLayer: *Skill Issue: Harness Engineering for Coding Agents*

## Exercises

1. Run the same task in two environments: one with minimal repo guidance and
   one with explicit startup plus verification instructions. Record differences
   in time-to-first-correct-step.
2. Provide a task without a verification plan. Observe where and why completion
   is asserted prematurely.
3. Add one harness improvement (for example, a required test command), rerun the
   task, and compare failure frequency.
