# Project 04. Runtime Feedback and Structural Control

## Objective

Compare weak versus improved harnesses while introducing runtime observability
and enforcing structural boundaries in an Electron codebase.

## Learning Goals

- Add runtime signals that shorten debugging cycles.
- Encode architecture constraints so the agent cannot silently violate layers.
- Measure fix quality, not just bug closure speed.

## Task

Implement and validate the following:

- Startup logging.
- Import and indexing logs.
- A visible Q&A failure path (user-facing error state).
- Explicit boundaries between `main`, `preload`, `renderer`, and services.

Debug one seeded runtime defect during each run.

## Baseline Harness Setup

Run 1 must use weak runtime and structure controls:

- Weak or missing runtime signals.
- No formal structural checks.
- No encoded architecture rules in repository artifacts.

## Improved Harness Setup

Run 2 must encode observability and boundaries:

- Explicit runtime logs and health signals.
- Clean-state requirement before final handoff.
- Architecture constraints documented in repo instructions.
- Structural checks via lint rules, tests, or guard scripts.

## Procedure

1. Start from one common commit and create `p04-baseline` and `p04-improved`.
2. Seed the same runtime defect in both branches before agent execution.
3. Run Codex or Claude Code with identical defect context and task scope.
4. In baseline, allow default behavior without added enforcement.
5. In improved, require observability additions before defect triage.
6. Verify the fix, then verify no cross-layer violations were introduced.
7. Restart the app to confirm clean, repeatable runtime state.

## What to Measure

- Time to detect root cause of seeded defect.
- Time to confirm verified fix.
- Number of boundary violations introduced during implementation.
- Log usefulness (whether logs directly explain failure mode).
- Clean restart success after fix.

## Deliverables

- Baseline debug run record with defect diagnosis and fix evidence.
- Improved debug run record with observability and structural evidence.
- Structural enforcement artifacts (rules/tests/check scripts).
- Short comparison note on diagnosis speed and fix robustness.
