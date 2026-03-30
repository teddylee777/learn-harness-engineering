# Project 01. Baseline vs Minimal Harness

## Objective

Establish a measurable baseline for harness engineering by comparing a weak
prompt-only setup against a minimal but explicit harness while building the
first runnable slice of the Electron knowledge app.

## Learning Goals

- Observe how harness quality changes completion reliability.
- Practice controlling variables across two agent runs.
- Produce evidence that distinguishes "looks complete" from "is runnable."

## Task

Implement the smallest usable shell of the application:

- Electron window launches successfully.
- UI shows a document list region.
- UI shows a question panel region.
- App creates and uses a local data directory.

Use the same task prompt, model, and time budget for both runs.

## Baseline Harness Setup

Run 1 must intentionally use a weak harness:

- Provide only a high-level product prompt.
- Do not provide repo-local agent instructions (`AGENTS.md`).
- Do not provide a startup command.
- Do not provide a completion checklist.

## Improved Harness Setup

Run 2 must use a minimal explicit harness:

- Add a short `AGENTS.md` in the repo root.
- Include one canonical startup command.
- Include a short definition of done for this project.
- Include a note enforcing Electron layer boundaries.

## Procedure

1. Start from one common commit and record the commit hash.
2. Create two branches: `p01-baseline` and `p01-improved`.
3. In each branch, run Codex or Claude Code with the same task prompt.
4. Cap each run to the same budget (time and number of agent turns).
5. For each run, execute the startup command and verify the app launches.
6. Capture terminal output, key diffs, and final agent summary.
7. Do not manually fix code between the run and measurement step.
8. Compare outcomes only after both runs are complete.

## What to Measure

- Task completion status (`fully complete`, `partial`, `failed`).
- Time to first successful launch.
- Number of retries needed before runnable state.
- Missing acceptance criteria at run end.
- Evidence of early-stop behavior (agent declared done before runnable state).

## Deliverables

- Baseline run record: prompt, transcript/log, final diff, launch evidence.
- Improved run record: prompt, transcript/log, final diff, launch evidence.
- One comparison note (1-2 pages) with measured differences and conclusion.
