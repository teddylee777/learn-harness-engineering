# Project 03. Scope Control and Grounded Verification

## Objective

Evaluate whether explicit scope control and verification gates improve delivery
accuracy when implementing indexing and grounded Q&A features.

## Learning Goals

- Use feature-level state tracking to prevent scope drift.
- Enforce "failing -> passing" transitions with evidence.
- Validate grounded answers with citation checks, not confidence claims.

## Task

Implement the following product slice:

- Document chunking.
- Metadata extraction.
- Indexing state display in the UI.
- Minimal grounded Q&A flow with source citations.

At least one feature must be shown moving from failing to passing.

## Baseline Harness Setup

Run 1 must use a weak control model:

- Vague task prompt.
- No explicit feature list or state file.
- No pass-state gating rules.
- Minimal or ad hoc verification.

## Improved Harness Setup

Run 2 must use explicit scope and verification controls:

- `feature_list.json` (or equivalent) with per-feature status.
- One-feature-at-a-time execution policy.
- Status may switch to `pass` only after verification evidence is captured.
- Grounded Q&A checks must verify citation presence and citation relevance.

## Procedure

1. Start from one common commit and branch into `p03-baseline` and
   `p03-improved`.
2. Define the same feature set for both runs before coding begins.
3. Run the baseline harness with Codex or Claude Code and collect outcomes.
4. Run the improved harness with the same model and comparable budget.
5. In the improved run, require status updates after each feature checkpoint.
6. Execute verification steps for indexing and grounded Q&A in both runs.
7. Archive evidence showing at least one feature transition from fail to pass.

## What to Measure

- Scope drift incidents (work outside agreed feature set).
- False completion rate (claimed done but failed checks).
- Percentage of features with explicit verification evidence.
- Grounded Q&A quality (citation presence and relevance).
- Total implementation retries required to reach passing state.

## Deliverables

- Baseline run artifacts (prompt, transcript/log, verification results).
- Improved run artifacts (feature list history, transcript/log, verification).
- Evidence of at least one fail-to-pass feature transition.
- Short comparison note focused on scope discipline and completion accuracy.
