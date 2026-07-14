# AGENTS.md

Guidance for Codex and other coding agents working on this website.

## Project Shape

- This is a static GitHub Pages site built with plain HTML, CSS, and vanilla JavaScript.
- There is no package manager, framework, bundler, or build step.
- Main pages live at the repository root. Blog posts live in `blog/`.
- Shared styling lives in `css/main.css`; shared JavaScript lives in `js/main.js`.
- `archive/` contains the previous website and should be left alone unless explicitly requested.

## Local Development

- Prefer testing through a local static server:

  ```bash
  python3 -m http.server 8000
  ```

- Then open `http://localhost:8000`.
- Opening `index.html` directly also works for many checks, but a local server is closer to GitHub Pages behavior.

## Editing Guidelines

- Keep changes small and consistent with the existing hand-written HTML/CSS style.
- Use relative links that match the current file location:
  - Root pages link to assets as `assets/...`.
  - Blog pages link to root assets as `../assets/...`.
  - Blog pages link to the shared stylesheet as `../css/main.css`.
- Avoid adding a build system unless the user explicitly asks for one.
- Do not rewrite the site into a framework unless that migration is the task.
- Preserve German legal content in `impressum.html` unless the user asks to update it.
- Do not edit generated or binary assets unless the task is specifically about those files.

## Content Workflow

- For new blog posts, follow `BLOGGING_GUIDE.txt`.
- When adding a blog post, update `blog/index.html` and optionally the homepage preview in `index.html`.
- Check that all new local links, images, PDFs, audio files, and scripts resolve.

## Known Checks

- Run `git status --short` before editing because the working tree may contain user changes.
- Check local links after edits, especially references under `assets/documents/`.
- The Places page currently uses mock weather data in `js/places.js`; do not describe it as live API-backed weather unless that is implemented.
