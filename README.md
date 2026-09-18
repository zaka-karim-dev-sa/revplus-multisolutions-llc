# Revplus Multisolutions LLC

Official marketing website for Revplus Multisolutions LLC, a Houston-based provider of business process outsourcing and IT solutions.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Static export for GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

The production site is exported to `out/`.

## Contact form setup

The form is ready for a static form provider. Add its submission URL as:

```bash
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://form-provider.example/endpoint
```

No credentials or email addresses are included in the repository.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys on every push to `main`. It automatically supplies the repository base path required by GitHub Pages. In repository settings, choose **GitHub Actions** as the Pages source.

The official custom domain can be connected later without changing the site content. When building for the custom domain, leave `NEXT_PUBLIC_BASE_PATH` empty.
