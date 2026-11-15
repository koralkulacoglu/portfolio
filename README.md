# Portfolio

Personal site. Next.js, Tailwind, and a chess puzzle widget built on chess.js and react-chessboard.

```bash
npm install
npm run dev
```

## Puzzles

`public/puzzles.json` is generated from [chess-puzzle-maker](https://github.com/koralkulacoglu/chess-puzzle-maker). To refresh it, run the pipeline there, then:

```bash
npm run puzzles            # reads ../chess-puzzle-maker/out/puzzles.json
npm run puzzles -- <path>  # or any other export
```

The sync script keeps only what the widget needs; player names and game links are dropped.
