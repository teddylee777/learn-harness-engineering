# Project 02. Agent-Readable Workspace and Continuity Scaffold

## Objective

Demonstrate that repository readability and explicit continuity artifacts reduce
context loss when development spans multiple agent sessions.

## Learning Goals

- Design workspace artifacts that survive session resets.
- Measure multi-session handoff quality instead of single-run output quality.
- Build repeatable continuity practices for Codex or Claude Code workflows.

## Task

Extend the app with three concrete capabilities:

- Document import flow.
- Document detail view.
- Basic persistence for imported documents.

Implementation must be completed across at least two separate agent sessions.

## Baseline Harness Setup

Run 1 must use weak continuity support:

- Sparse or generic instructions only.
- No explicit documentation hierarchy.
- No required progress or handoff artifact.
- No startup/bootstrap helper script.

## Improved Harness Setup

Run 2 must include explicit continuity scaffolding:

- Repo-root `AGENTS.md` with startup and working rules.
- Local docs for architecture, startup, and current status.
- A durable handoff file updated at end of each session.
- An `init.sh` (or equivalent) to restore runnable state quickly.

## Procedure

1. Start from one common commit and branch into `p02-baseline` and
   `p02-improved`.
2. For each branch, run Session A with Codex or Claude Code and stop before all
   tasks are complete.
3. End Session A by saving whatever continuity artifacts the harness allows.
4. Start Session B in a fresh agent context and continue from repository state
   only.
5. Use the same feature scope, model, and run budget in both branches.
6. Verify final behavior by running the project startup command and testing the
   three required capabilities.
7. Record where Session B had to rediscover missing context.

## What to Measure

- Session B startup time to first meaningful code edit.
- Number of rediscovery steps (architecture, commands, status).
- Continuity artifact completeness and correctness.
- Ratio of repeated work to new work in Session B.
- Final task completion status after Session B.

## Deliverables

- Baseline multi-session record (Session A + Session B logs/transcripts).
- Improved multi-session record (Session A + Session B logs/transcripts).
- Continuity artifacts produced in each run.
- One comparison note focused on continuity quality and recovery speed.
