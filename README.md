# Duna Area & Project Guides

Public Next.js site at `areaguides.dunagroup.ae` — one homepage hub plus a
dynamic `/[slug]` route for every Dubai area/project investment guide
(areas and projects share the same routing; no separate structures).

No Supabase. No login. No auth middleware. This is a separate app/repo from
`duna-intelligence-platform` by design, so public guide pages never run
session-refresh middleware.

## Architecture

- `app/page.tsx` — homepage hub (ported from the approved hub design),
  reads the guide list from `lib/registry.ts`.
- `app/[slug]/page.tsx` — one dynamic route rendering any published guide
  via the shared `GuideTemplate` component, using `generateStaticParams`
  from the registry.
- `components/GuideTemplate.tsx` — the Stella Maris master design, ported
  once and shared by every guide. Never redesigned per guide.
- `data/<slug>.ts` — one typed data file per guide (facts, pricing,
  history, specialist bio, source configuration, per-metric provenance).
- `lib/registry.ts` — single source of truth for every guide: slug, name,
  type, area/community, specialist, status, data file, lastUpdated,
  source configuration, dataIssues. Published guides automatically appear
  on the homepage and automatically join the monthly update workflow.
  No manual duplicate list anywhere.
- `scripts/update-all-guides.ts` — the "Update all area and project
  guides" pipeline: refresh → validate → build → commit → push → deploy →
  verify → one consolidated report. Never invents a metric it can't
  verify (see reliability rule below).
- `scripts/add-guide.ts` — scaffolds a new guide from the shared template,
  registers it centrally, and folds it into all future update runs.

## Reliability rule

If a metric can't be refreshed reliably, it is never invented. Outcomes:
`UPDATED`, `LAST VALID PERIOD RETAINED` (old figure kept, with its real
period/last-verified date visibly shown), `HIDDEN`, `SOURCE MISSING`,
`FAILED QA`, `NEEDS REVIEW`.

## Status

Foundation build in progress — see implementation order A–M in project
history. Do not add new guides beyond Stella Maris / Cayan Tower until the
registry, provenance structure, and monthly updater are working end to end.
