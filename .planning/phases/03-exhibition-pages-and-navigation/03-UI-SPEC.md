---
phase: 3
status: approved
created_at: 2026-05-12
---

# Phase 3 UI Spec: Exhibition Pages and Navigation

## Experience Goal

Visitors should land directly in the exhibition, read the migrated introduction, scan all 17 works, and move into and between exhibit pages without losing the restrained Computingeducation visual identity.

## Layout Contract

- Reuse the Phase 1 header/footer shell.
- Keep content constrained to the existing `--container-max`.
- Use white content surfaces on the light page background.
- Avoid nested cards. Exhibit cards may be repeated individual cards; article sections should be unframed or single white surfaces.
- Mobile layout must stack cleanly at 390px width without horizontal overflow.

## Start Page

- First section: exhibition title and migrated introduction content.
- Below introduction: exhibit grid with all 17 items in source order.
- Cards show order, title, optional local preview image, and a concise local link.
- Cards use no border radius above the existing 5px token.

## Exhibit Detail Pages

- Page header shows the exhibit title and source-order context.
- Migrated content renders in a readable article column.
- Images scale to container width and preserve aspect ratio.
- Previous/next navigation appears after the article and remains usable on mobile.
- Include a clear overview link back to `/`.

## Content Styling

- Normalize WordPress-generated figures, captions, images, paragraphs, headings, lists, and iframes inside `.content-body`.
- Source links keep the existing link color and focus style.
- Long German titles and URLs must wrap rather than overflow.

## Verification Expectations

- Astro check/build pass.
- Static route generation creates all 17 exhibit pages.
- Automated checks verify all exhibit links from the manifest render locally.
- Existing Playwright checks should be updated or extended so they hit a real exhibit page instead of the placeholder.
