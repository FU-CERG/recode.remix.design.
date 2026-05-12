# Deployment

## Target

The site is prepared for root deployment at:

`https://gallery.computingeducation.de`

## Commands

Install dependencies:

```bash
npm install
```

Run the full release gate:

```bash
npm run verify
```

Build static output:

```bash
npm run build
```

Deploy the generated `dist/` directory as the web root for `gallery.computingeducation.de`.

## Static Site Notes

- Astro is configured with `output: 'static'`.
- No CMS, server runtime, or runtime WordPress request is required.
- Migrated media is stored under `public/assets/recode-remix-design/` and is copied into `dist/assets/recode-remix-design/`.
- `npm run verify` checks build output, local assets, internal links, migrated content completeness, and responsive Playwright screenshots.

## Expected Gate

Before deployment, `npm run verify` should complete with:

- Astro check: 0 errors, 0 warnings, 0 hints
- Successful production build
- Static shell verification
- Migration verification
- Exhibit page and navigation verification
- Build output link/asset verification
- Desktop/mobile Playwright rendering checks
