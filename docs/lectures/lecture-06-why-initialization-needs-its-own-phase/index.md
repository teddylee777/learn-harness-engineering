# Lecture 06. Why Initialization Needs Its Own Phase

## Question

Why should initialization be treated as a separate harness phase instead of
being mixed into ordinary feature implementation?

## Why It Matters

The first run sets the operating conditions for every later run. If startup
rules, verification paths, and state artifacts are unclear at the beginning,
later sessions inherit ambiguity and repeatedly pay for it.

## Core Concepts

- Initialization phase: a dedicated pass that creates stable project scaffolding
  before feature work begins.
- Bootstrap contract: explicit commands and assumptions for starting, testing,
  and inspecting the project.
- Durable baseline: an initial checkpoint with reproducible behavior and
  documented state.
- Handoff readiness: whether a new session can continue without guessing setup.

## Detailed Explanation

Anthropic distinguishes initialization from implementation because the two phases
optimize for different outcomes. Implementation aims to add behavior.
Initialization aims to make future behavior changes reliable.

A strong initializer usually establishes:

1. Startup and verification commands that run consistently.
2. Persistent state artifacts (for example, progress and feature-status files).
3. A first clean checkpoint in version control.
4. A decomposed task surface that supports incremental work.

OpenAI’s harness perspective leads to the same design decision: if the
repository is the system of record, then the first responsibility is to create
clear operational structure inside the repository. Without that structure, each
new run must infer project conventions, which increases error rates and slows
iteration.

Initialization quality should therefore be evaluated by downstream usability:
can a fresh session start, verify, and continue work using explicit artifacts
instead of implicit assumptions?

## Examples and Artifacts

- See [`code/`](./code/index.md) for initializer output and first-run
  scaffolding examples.
- Common initialization artifacts include `init.sh`, a baseline commit, a
  progress artifact, and a structured feature/task surface.
- A practical bootstrap contract includes startup command, test/smoke command,
  artifact locations, and known environmental assumptions.

## Readings

- Anthropic: Effective harnesses for long-running agents
- Anthropic: Harness design for long-running application development
- OpenAI: Harness engineering: leveraging Codex in an agent-first world

## Exercises

1. Define a bootstrap contract for a new repository using four required fields:
   startup, verification, progress artifact, and next-task source.
2. Compare two project starts: one with generated code only, one with an
   explicit initialization phase. Measure time to first verified feature.
3. Ask a fresh session to continue work using only initializer artifacts. Record
   which missing artifacts caused ambiguity.
