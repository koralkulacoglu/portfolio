import { Chess } from "chess.js";
import { palette } from "@/lib/og";
import { pieceSvgs } from "@/lib/piece-svgs";

function mix(a: string, b: string, t: number) {
  const c = (h: string, i: number) => parseInt(h.slice(1 + i * 2, 3 + i * 2), 16);
  const ch = [0, 1, 2].map((i) => Math.round(c(a, i) * (1 - t) + c(b, i) * t));
  return `#${ch.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

/** Renders a puzzle's starting position as a data-URI SVG board in the site's colours. */
export function boardSvg(fenBefore: string, lastMove: string, orientation: "white" | "black") {
  const game = new Chess(fenBefore);
  game.move({ from: lastMove.slice(0, 2), to: lastMove.slice(2, 4), promotion: lastMove[4] });
  const highlight = [lastMove.slice(0, 2), lastMove.slice(2, 4)];
  const S = 100;
  let out = "";

  game.board().forEach((row, r) =>
    row.forEach((piece, f) => {
      const rank = 8 - r;
      const x = (orientation === "white" ? f : 7 - f) * S;
      const y = (orientation === "white" ? r : 7 - r) * S;
      let fill = (f + rank) % 2 === 0 ? palette.sqLight : palette.sqDark;
      if (highlight.includes("abcdefgh"[f] + rank)) fill = mix(fill, palette.accent, 0.25);
      out += `<rect x="${x}" y="${y}" width="${S}" height="${S}" fill="${fill}"/>`;
      if (piece) {
        const key = piece.color + piece.type.toUpperCase();
        out += pieceSvgs[key]
          .replaceAll("__FILL__", piece.color === "w" ? palette.pcWhite : palette.pcBlack)
          .replace("<svg ", `<svg x="${x}" y="${y}" width="${S}" height="${S}" `);
      }
    }),
  );

  const doc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${S * 8} ${S * 8}">${out}</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(doc).toString("base64")}`;
}
