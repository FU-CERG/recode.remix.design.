# Phase 3: Exhibition Pages and Navigation - Context

**Gathered:** 2026-05-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 3 turns the migrated local content into the browsable exhibition website. It replaces placeholder content with the migrated introduction, builds an exhibit index for all 17 works, generates dedicated local exhibit pages from `src/data/exhibits/*.json`, and adds overview/back/previous/next navigation. It does not perform final deployment readiness, full link crawling, or exhaustive visual QA; those remain Phase 4.

</domain>

<decisions>
## Implementation Decisions

### Content Rendering
- Render migrated content from local JSON only; do not fetch WordPress at runtime.
- Preserve the prepared German source content as imported, using technical cleanup and CSS only where needed for static rendering.
- Use `set:html` on trusted locally generated migration output for Phase 3 rendering.
- Keep source media local via `/assets/recode-remix-design/...` paths.

### Start Page
- Replace Phase 1 placeholder copy with the migrated exhibition introduction.
- Add a browseable exhibit grid containing all 17 exhibits in source order.
- Use compact cards with title, order, optional preview image, and link to the local exhibit page.
- Avoid a marketing landing page; the first screen should be the actual exhibition information experience.

### Exhibit Pages
- Generate one static route per manifest slug under `/exponate/{slug}/`.
- Each page should show the exhibit title, migrated article content, source-preserving media, and local navigation.
- Provide a return link to the overview plus previous/next exhibit links.
- Use local manifest metadata for neighboring navigation instead of copied source-page links.

### the agent's Discretion
- Exact component names and CSS class names are flexible.
- Use the first local media item as card preview where available; cards without media should still render cleanly.
- Minor CSS additions may normalize WordPress-generated figure/image/table markup.

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `BaseLayout`, `SiteHeader`, and `SiteFooter` provide the shared shell.
- `global.css` contains the Computingeducation-compatible visual tokens.
- `src/data/exhibit-manifest.json`, `src/data/exhibition.json`, and `src/data/exhibits/*.json` contain migrated local content.
- `scripts/verify-migration.mjs` verifies migration completeness.

### Established Patterns
- Astro static routes and local JSON imports.
- Simple reusable `.astro` components.
- Root-relative public assets from `/assets/recode-remix-design/...`.
- Verification through npm scripts and Playwright.

### Integration Points
- `src/pages/index.astro` becomes the real exhibition overview.
- `src/pages/exponate/[slug].astro` should use `getStaticPaths()` over the manifest.
- Phase 4 will build on these pages for final link/responsive/deployment checks.

</code_context>

<specifics>
## Specific Ideas

- Required exhibit order: Schotter, Boxes, 500 Linien, Quadrate, Binary Rhythm, Grid Based Systems, Inequality, Permutationen, Labyrinth, Random Windows, n-Ecken, Kraftlinien, Komputerstrukturen, Farbzentren, Punkt.Linie.Flaeche, Fraktale, Sinus Addition.
- Footer remains `ComputingEducation 2026` plus Impressum link.
- The site remains standalone but in the Computingeducation style.

</specifics>

<deferred>
## Deferred Ideas

Final exhaustive link crawling, long-content visual polish, deployment-readiness documentation, and gallery-domain handoff remain in Phase 4.

</deferred>

---

*Phase: 3-Exhibition Pages and Navigation*
*Context gathered: 2026-05-12*
