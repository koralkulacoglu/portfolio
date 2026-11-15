// Copies puzzles from chess-puzzle-maker into public/, keeping only what the widget needs.
// Usage: npm run puzzles [-- path/to/puzzles.json]
import { readFileSync, writeFileSync } from "node:fs";

const src = process.argv[2] ?? "../chess-puzzle-maker/out/puzzles.json";
const { puzzles } = JSON.parse(readFileSync(src, "utf8"));

const slim = puzzles.map((p) => ({
  id: p.id,
  fenBefore: p.fenBefore,
  lastMove: p.lastMove,
  solution: p.solution,
  color: p.playerColor,
  mateIn: p.mateIn ?? null,
  anyMate: p.acceptAnyMate,
  found: p.found,
  played: p.played,
  date: p.game.date,
  speed: p.game.speed,
  tc: p.game.timeControl,
  me: p.game.me.rating,
  opp: p.game.opponent.rating,
  result: p.game.result,
  end: p.game.termination,
  clock: p.game.clock?.secondsLeft ?? null,
}));

writeFileSync("public/puzzles.json", JSON.stringify(slim));
console.log(`wrote ${slim.length} puzzles`);
