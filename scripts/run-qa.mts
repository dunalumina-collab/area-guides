// Entry point for `npm run qa`. Validates every PUBLISHED guide in the
// registry and exits non-zero on any error-level issue, so it can gate
// both local checks and the "Update all area and project guides" workflow
// (see docs/UPDATE_WORKFLOW.md).
import { registry } from "../lib/registry";
import { loadGuideData } from "../lib/registry";
import { validateGuide, formatReport, type ValidationIssue } from "./validate-guide";

const allIssues: ValidationIssue[] = [];
for (const entry of registry) {
  if (entry.status !== "published") continue;
  const data = await loadGuideData(entry);
  allIssues.push(...validateGuide(entry, data));
}

console.log(formatReport(allIssues));

const hasErrors = allIssues.some((i) => i.severity === "error");
if (hasErrors) process.exit(1);
