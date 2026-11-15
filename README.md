# Portfolio

Personal site at [koralkulacoglu.com](https://koralkulacoglu.com). Next.js 16, React 19, Tailwind 4.

```bash
npm install
npm run dev
```

## Layout

- `lib/content.ts`: jobs, projects and links. Most edits happen here.
- `app/page.tsx`: home page.
- `app/projects/[slug]`: one page per project, rendering the repo's README from GitHub.
- `components/puzzle.tsx`: the chess puzzle widget (chess.js + react-chessboard).
- `app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx`: favicons and the link preview, generated at build time.

## Project pages

READMEs are fetched from the GitHub API at build time and refreshed at most once a day. Relative images and links are rewritten to point at the repo. Set `GITHUB_TOKEN` (read-only, no scopes needed) to avoid the unauthenticated rate limit; without it, pages fall back to the project's image.

## Puzzles

`public/puzzles.json` is generated from [chess-puzzle-maker](https://github.com/koralkulacoglu/chess-puzzle-maker). To refresh it, run the pipeline there, then:

```bash
npm run puzzles            # reads ../chess-puzzle-maker/out/puzzles.json
npm run puzzles -- <path>  # or any other export
```

The sync script keeps only what the widget needs; player names and game links are dropped.
