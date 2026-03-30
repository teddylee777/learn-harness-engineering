# Lecture 04. Why One Giant Instruction File Fails

## Question

Why does a large, all-in-one instruction file often reduce agent performance?

## Why It Matters

Instruction design directly affects context allocation and task focus. OpenAI
and Anthropic both show that long-running agent quality depends on clear
priorities, recoverable state, and accessible references. Oversized instruction
files usually degrade all three.

## Core Concepts

- Context windows are limited; low-value global text displaces task-critical
  content.
- Undifferentiated rules create priority ambiguity.
- Large files become stale quickly and are difficult to validate.
- Progressive disclosure outperforms monolithic instruction accumulation.

## Detailed Explanation

Teams commonly respond to failures by appending more rules to one central file.
This local fix creates a global cost: the entry document becomes a mixed set of
timeless constraints, historical edge cases, and obsolete advice.

As the file grows, three problems appear:

1. The agent spends early context budget parsing generic guidance.
2. New, relevant instructions are harder to detect.
3. Maintenance quality declines because edits are risky and slow.

A more reliable pattern is to keep the top-level instruction document short and
routing-oriented. It should provide orientation, startup commands, verification
requirements, and hard constraints. Topic detail should live in linked,
maintained documents near the code they describe.

This structure supports both OpenAI-style repo legibility and Anthropic-style
long-horizon continuity by keeping high-priority control information concise and
moving specialized detail to targeted references.

## Examples and Artifacts

- Effective entrypoint file content:
- Repository purpose and scope.
- First-run commands (setup, start, test).
- Globally binding constraints.
- Links to architecture, domain, and workflow documents.
- Anti-pattern indicators:
- Repeated edge-case rules with no source links.
- Contradictory instructions across one large file.
- Large sections with unclear ownership and update cadence.
- Lecture examples: [`code/index.md`](./code/index.md)

## Readings

- Primary:
- OpenAI: *Harness engineering: leveraging Codex in an agent-first world*
- Anthropic: *Effective harnesses for long-running agents*
- Secondary:
- HumanLayer: *Skill Issue: Harness Engineering for Coding Agents*
- Thoughtworks: *Harness Engineering*

## Exercises

1. Split a monolithic instruction file into a short entrypoint plus linked
   topic documents. Compare task completion quality before and after.
2. Mark each instruction in the entrypoint as either "global constraint" or
   "local guidance." Remove items that fit neither class.
3. Run a maintenance audit: for each linked instruction document, assign an
   owner and update trigger to reduce staleness.
