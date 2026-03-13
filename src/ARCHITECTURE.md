# Frontend Architecture

This project is organized by responsibility to keep growth simple and predictable:

- `config/`
  - Global project configuration and static profile data (`site.ts`).
- `content/`
  - Typed content collections (project entries in markdown).
- `layouts/`
  - Page shells and shared document structure (`MainLayout.astro`).
- `pages/`
  - Route-level views (`index`, `about`, `projects`, `contact`).
- `styles/`
  - Global design tokens and base styles (`global.css`).
- `ui/`
  - Reusable interface building blocks, grouped by role:
  - `ui/navigation/` navigation and language controls.
  - `ui/layout/` structural UI blocks (sections, footer).
  - `ui/cards/` content cards and compact data UI.
  - `ui/motion/` motion behavior and interaction orchestration.

## Import Rules

- Pages import reusable pieces only from `ui/*`, `layouts/*`, `config/*`, and `content`.
- Layouts do not depend on pages.
- UI components should avoid route-specific business logic.
- Global data should live in `config/`, not inside components.

## Why this structure

- Faster onboarding: predictable place for each file type.
- Lower coupling: content, view, and UI layers stay separated.
- Easier scaling: new features can be added by extending `ui/*` and `pages/*` without refactors.
