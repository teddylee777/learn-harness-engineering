# AGENTS.md

This repository is designed for long-running coding-agent work. The goal is not
to maximize raw code output. The goal is to leave the repo in a state where the
next session can continue without guessing.

## Startup Workflow

Before writing code:

1. Confirm the working directory with `pwd`.
2. Read `claude-progress.md` for the latest verified state and next step.
3. Read `feature_list.json` and choose the highest-priority unfinished feature.
4. Review recent commits with `git log --oneline -5`.
5. Run `./init.sh`.
6. Run the required smoke or end-to-end verification before starting new work.

If baseline verification is already failing, fix that first. Do not stack new
feature work on top of a broken starting state.

## Working Rules

- Work on one feature at a time.
- Do not mark a feature complete just because code was added.
- Keep changes within the selected feature scope unless a blocker forces a
  narrow supporting fix.
- Do not silently change verification rules during implementation.
- Prefer durable repo artifacts over chat summaries.

## Runtime Observability

All services use structured logging via `src/services/logger.ts`. Log output is
JSON-formatted with timestamp, level, service name, and message. Log levels:
DEBUG, INFO, WARN, ERROR.

When debugging, check logs for:
- Service initialization events at startup
- IPC channel invocations and their parameters
- Indexing chunk counts and content lengths
- Q&A confidence scores and citation counts

## Architecture Constraints

The following layer boundaries are enforced by `scripts/check-architecture.sh`:

- **Renderer** must not import `fs`, `path`, or any Node.js core modules.
- **Services** must not import Electron IPC or renderer-specific modules.
- **Preload** must only expose the typed API via contextBridge.

Run `bash scripts/check-architecture.sh` before committing.

## Required Artifacts

- `feature_list.json`: source of truth for feature state
- `claude-progress.md`: session log and current verified status
- `init.sh`: standard startup and verification path
- `session-handoff.md`: optional compact handoff for larger sessions
- `clean-state-checklist.md`: pre-commit repository health check

## Definition Of Done

A feature is done only when all of the following are true:

- the target behavior is implemented
- the required verification actually ran
- evidence is recorded in `feature_list.json` or `claude-progress.md`
- the repository remains restartable from the standard startup path
- `scripts/check-architecture.sh` passes with no violations

## End Of Session

Before ending a session:

1. Update `claude-progress.md`.
2. Update `feature_list.json`.
3. Record any unresolved risk or blocker.
4. Run `bash scripts/check-architecture.sh`.
5. Commit with a descriptive message once the work is in a safe state.
6. Leave the repo clean enough for the next session to run `./init.sh`
   immediately.
