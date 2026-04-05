

## Diagnosis & Fix Plan

### Root Cause
The blank screen was caused by a **stale Vite dependency cache** (`node_modules/.vite/`) containing a pre-optimized copy of `@tanstack/react-query` that bundled its own React instance, creating a duplicate React runtime. This made `useEffect` resolve to `null` inside `QueryClientProvider`.

### Current Status
- The cache was already cleared in the previous turn (`rm -rf node_modules/.vite`)
- `src/main.tsx` was touched to trigger a full reload
- **The build succeeds** (`npx vite build` completes with 0 errors)
- **The dev server is running** and serving HTML correctly
- All assets exist (`aventuritas-logo.png`, `aventuritas-bg-pattern.png`)
- No runtime errors are currently being reported

### What Needs to Happen

**Step 1: Force a clean restart of the dev server**
The Vite dev server may still be serving stale pre-bundled dependencies from memory even though the cache directory was deleted. Touch `vite.config.ts` to force a full page reload and re-optimization.

**Step 2: Verify rendering**
Confirm the homepage loads with all 10 sections visible and no console errors.

**Step 3: Quick visual/code polish pass**
Review each section component for any minor issues (overflow, spacing, missing styles) and fix if found. No redesign — just stabilization and polish within the approved brand direction.

### Files to modify
- `vite.config.ts` — touch to force reload (no content change needed)
- Any component files only if broken rendering is found after restart

