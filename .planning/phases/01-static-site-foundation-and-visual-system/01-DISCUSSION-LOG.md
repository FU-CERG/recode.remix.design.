# Phase 1: Static Site Foundation and Visual System - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md - this log preserves the alternatives considered.

**Date:** 2026-05-12
**Phase:** 01-static-site-foundation-and-visual-system
**Areas discussed:** Startseiten-Shell, Computingeducation-Anbindung, Footer-Wortlaut, Technische Strenge

---

## Startseiten-Shell

| Option | Description | Selected |
|--------|-------------|----------|
| Platzhalter | Phase 1 proves shell/layout only; real content comes later | yes |
| Echte Ausstellungs-Anmutung | Build a richer first impression without final migrated content | |

**User's choice:** Platzhalter
**Notes:** Phase 1 should not pull content migration forward.

---

## Computingeducation-Anbindung

| Option | Description | Selected |
|--------|-------------|----------|
| Eigenständig im Computingeducation-Stil | Gallery has its own identity while using Computingeducation visual language | yes |
| Stärker wie Unterseite | Header would feel closer to the main Computingeducation site | |

**User's choice:** Eigenständig, aber im Stil von computingeducation
**Notes:** `Recode.Remix.Design` remains the dominant site identity.

---

## Footer-Wortlaut

| Option | Description | Selected |
|--------|-------------|----------|
| ComputingEducation 2026 + Impressum | Minimal gallery-specific footer, Impressum links to Computingeducation | yes |
| Voller Computingeducation-Footertext | Copy the maintainer sentence from the reference footer | |

**User's choice:** angepasst, nur mit ComputingEducation 2026 und Impressum
**Notes:** Impressum should link to `https://computingeducation.de/impressum/`.

---

## Technische Strenge

| Option | Description | Selected |
|--------|-------------|----------|
| Mit Checks | Include automated build/static checks and browser/screenshot checks | yes |
| Nur Build + manuelle Browserprüfung | Keep Phase 1 verification lighter | |

**User's choice:** mit checks
**Notes:** Planner should include Playwright screenshots or equivalent browser checks for desktop/mobile shell rendering.

## the agent's Discretion

- Exact Astro component/file names.
- Exact placeholder layout details within the approved UI-SPEC.

## Deferred Ideas

None.
