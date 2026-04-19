# My Portfolio (Next.js + GitHub Pages)

This repository contains a personal portfolio website built with **Next.js** and configured for **static export** to deploy on **GitHub Pages**.

## Sections included

- About
- Skills
- Projects
- Experience
- Education
- Contact
- Resume button (links to `public/resume.pdf`)

## Tech stack

- Next.js (App Router)
- React
- CSS Modules + global CSS

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build (static export)

```bash
npm run build
```

This generates static files in the `out/` directory.

## GitHub Pages deploy

Deployment is automatic through GitHub Actions on pushes to `main` or `master` using:

- `actions/configure-pages`
- `actions/upload-pages-artifact`
- `actions/deploy-pages`

Workflow file: `.github/workflows/deploy-pages.yml`

## Customize content

Edit portfolio content in:

- `data/portfolioData.js`

Update these files as needed:

- `public/resume.pdf` for your actual resume
- `app/page.js` for section layout/content structure
- `app/page.module.css` and `app/globals.css` for styling

## GitHub Pages subpath support

The app is configured for repository deployment under:

- `/My-Portfolio/`

using Next.js `basePath` and `assetPrefix` in `next.config.mjs`.
