# Phase 1: Static Site Foundation and Visual System - Context

**Gathered:** 2026-05-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 1 delivers the static Astro foundation and the reusable Computingeducation-compatible visual shell for the Recode.Remix.Design gallery. It includes project scaffolding, shared layout, global visual tokens, header, footer, placeholder start/exhibit shell pages, and verification checks for the foundation. It does not migrate real exhibition content, download source media, or implement final exhibit detail pages; those belong to later phases.

</domain>

<decisions>
## Implementation Decisions

### Start Page Shell
- **D-01:** Phase 1 should use placeholders only. The shell should prove the layout and visual system, but the real exhibition intro, exhibit cards, migrated images, and final exhibit content wait for later phases.
- **D-02:** Placeholder copy may indicate that exhibition content is being prepared, but it must stay minimal and should not read like a marketing landing page.

### Computingeducation Relationship
- **D-03:** The gallery should feel eigenständig, but im Stil von Computingeducation. Use the Computingeducation visual language without making the header feel like a direct clone of the main site.
- **D-04:** The site identity should remain `Recode.Remix.Design`; Computingeducation can appear as an association/context label, not as the dominant title.

### Footer Contract
- **D-05:** Footer copy is gallery-specific and minimal: use `ComputingEducation 2026` plus an `Impressum` link.
- **D-06:** The `Impressum` link must point to the Computingeducation impressum: `https://computingeducation.de/impressum/`.
- **D-07:** Do not include the full Computingeducation maintainer sentence in the gallery footer.

### Verification Expectations
- **D-08:** Phase 1 should include checks, not just a manual browser pass.
- **D-09:** Required checks for Phase 1 planning: production build, at least one automated/static verification command, and Playwright screenshots or equivalent browser checks for desktop and mobile shell rendering.

### the agent's Discretion
- Exact Astro file/component names are flexible as long as they support shared layouts and later content-driven pages.
- Placeholder visual content can be simple, but it must exercise header, footer, main layout, placeholder cards/surfaces, responsive behavior, and focus states enough for verification.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Scope
- `.planning/PROJECT.md` — Project intent, constraints, source content scope, independence requirement, and gallery domain.
- `.planning/REQUIREMENTS.md` — Phase 1 requirement IDs FOUND-01, FOUND-02, FOUND-03, VIS-01, VIS-02, VIS-03.
- `.planning/ROADMAP.md` — Phase 1 boundary, success criteria, and plan outline.

### UI Contract
- `.planning/phases/01-static-site-foundation-and-visual-system/01-UI-SPEC.md` — Approved visual and interaction contract for Phase 1.

### Research
- `.planning/research/SUMMARY.md` — Project research summary and phase ordering rationale.
- `.planning/research/STACK.md` — Recommended Astro/Vite/TypeScript stack and version assumptions.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- No application code exists yet. Phase 1 starts from an empty codebase plus planning artifacts.

### Established Patterns
- Planning artifacts establish Astro as the preferred static-site stack, global CSS tokens, shared layouts, and no UI component library for Phase 1.
- The UI-SPEC locks Computingeducation-inspired values: `#0a3d7c` header/footer, `#f4f8fb` page background, white surfaces, system sans typography, max-width `1040px`, 5px radius, subtle card shadow, compact uppercase nav labels.

### Integration Points
- Phase 1 output becomes the shell used by later content migration and exhibit page generation.
- The site should be prepared for root deployment at `https://gallery.computingeducation.de`.

</code_context>

<specifics>
## Specific Ideas

- Start page in Phase 1 should remain placeholder-only.
- Header should make `Recode.Remix.Design` the site identity while feeling like a Computingeducation-adjacent gallery.
- Footer should be minimal: `ComputingEducation 2026` and `Impressum`, with the Impressum linking to `https://computingeducation.de/impressum/`.
- Phase 1 verification should include automated checks, including browser/screenshot checks for desktop and mobile.

</specifics>

<deferred>
## Deferred Ideas

None - discussion stayed within phase scope.

</deferred>

---

*Phase: 1-Static Site Foundation and Visual System*
*Context gathered: 2026-05-12*
