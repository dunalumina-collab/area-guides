# Update workflow

Two repeatable procedures. Both are run by a Claude session (not a cron job) because
refreshing live DLD/DXB Interact data requires judgment calls the reliability rule
below can't fully automate — deciding what counts as a valid refresh, what to retain,
and what to flag is not mechanical.

## Reliability rule (governs every metric, every run)

Never invent or carry forward a value that can't be verified from a real source this
run. For each metric on each guide, the outcome is one of:

- **UPDATED** — refreshed from source this run, value changed or confirmed.
- **LAST VALID PERIOD RETAINED** — source unreachable/incomplete this run; previous
  verified value kept, with its `asOf`/`lastVerified` left untouched (never bumped to
  today's date).
- **HIDDEN** — no valid value, current or historical; the UI omits the metric rather
  than showing a zero or placeholder.
- **SOURCE MISSING** — guide's `sourceConfig` doesn't cover this metric at all.
- **FAILED QA** — a refreshed value exists but `scripts/validate-guide.ts` rejects it
  (NaN, non-positive, stale label, etc.); previous value retained, issue logged.
- **NEEDS REVIEW** — ambiguous result (e.g. source returned a sample instead of a
  total, or a number moved implausibly far); flagged for a human look before publishing.

Every `provenance[]` entry in `lib/registry.ts` records the outcome, source, `asOf`
period, and `lastVerified` date — this is the audit trail, not just a cache.

## "Update all area and project guides"

1. For each `published` entry in `lib/registry.ts`, re-pull each metric per its
   `sourceConfig` (DLD sales/rentals, DXB Interact, portals, developer source) and
   recompute `dataset`/`content` fields in the guide's `data/<slug>.ts` file.
2. Apply the reliability rule per metric; update `provenance[]` accordingly.
3. Run `npm run qa` — validates every published guide (NaN/Infinity, fake-zero,
   stale-period, broken CTA/media, specialist mismatch, bed-filter gaps, sample-totals
   presence). Any error-level issue blocks that guide's update (previous data stands)
   until fixed; it does not block other guides.
4. `npm run build` — must succeed (SSG for every published slug).
5. Manual/browser QA pass on changed guides: visual spot-check (charts render, tables
   populate, no layout breaks) — this is the step a script can't fully do, per the
   project's own instruction that this isn't a pure cron job.
6. Commit with a message listing which guides changed and why (e.g. "Update Stella
   Maris, Cayan Tower: Oct 2026 DLD refresh").
7. Push to `main`.
8. Deploy (Vercel auto-deploys on push once connected — see open item below; until
   then, deploy manually).
9. Verify the live production URLs for every changed guide.
10. Post one consolidated report: per guide, per metric outcome (UPDATED / LAST VALID
    PERIOD RETAINED / HIDDEN / SOURCE MISSING / FAILED QA / NEEDS REVIEW), plus build,
    QA, and deploy status.

## "Add [guide]"

See `scripts/add-guide.ts` (scaffolds `data/<slug>.ts` + registry entry). After
scaffolding: populate real content/data, run `npm run qa`, `npm run build`, visual
check, then follow steps 6–10 above.

## Known open item

Vercel deployment (steps 8–9) requires either a `VERCEL_TOKEN` this session can use
via the Vercel CLI, or the repo connected to a Vercel project via the dashboard
(simpler for ongoing auto-deploy-on-push). Not yet resolved — see conversation.
