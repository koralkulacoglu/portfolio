"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Chess, type Square } from "chess.js";
import {
  Chessboard,
  defaultPieces,
  type PieceRenderObject,
} from "react-chessboard";

type PuzzleData = {
  id: string;
  fenBefore: string;
  lastMove: string;
  solution: string[];
  color: "white" | "black";
  mateIn: number | null;
  anyMate: boolean;
  found: boolean;
  played: string;
  date: string;
  speed: string;
  tc: string;
  me: number;
  opp: number;
  result: "win" | "loss" | "draw";
  end: string;
  clock: number | null;
};

type Status = "loading" | "watch" | "play" | "wrong" | "solved" | "revealed";
type LogEntry = { san: string; white: boolean; num: number };

const STORE = "solved-puzzles";
const CURRENT = "current-puzzle";

const pieces: PieceRenderObject = Object.fromEntries(
  Object.entries(defaultPieces).map(([key, render]) => [
    key,
    (props?: Parameters<PieceRenderObject[string]>[0]) =>
      render({ ...props, fill: key[0] === "w" ? "var(--pc-white)" : "var(--pc-black)" }),
  ]),
);

const tint = (pct: number) => `color-mix(in oklab, var(--accent) ${pct}%, transparent)`;

function readSolved(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORE) ?? "[]");
  } catch {
    return [];
  }
}

function parseUci(uci: string) {
  return {
    from: uci.slice(0, 2) as Square,
    to: uci.slice(2, 4) as Square,
    promotion: uci[4],
  };
}

function formatClock(sec: number) {
  if (sec < 20) return `0:${sec.toFixed(1).padStart(4, "0")}`;
  const s = Math.floor(sec);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = String(s % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${ss}` : `${m}:${ss}`;
}

function PlayerBar({
  name,
  rating,
  color,
  right,
}: {
  name: string;
  rating?: number;
  color?: "white" | "black";
  right?: React.ReactNode;
}) {
  return (
    <div className="flex h-8 items-center justify-between font-mono text-[12px]">
      <span className="flex items-center gap-2">
        <span
          aria-hidden
          className="size-2.5 rounded-full border border-faint"
          style={{ background: color === "white" ? "var(--pc-white)" : "var(--pc-black)" }}
        />
        <span className="text-ink">{name}</span>
        {rating && <span className="text-faint">{rating}</span>}
      </span>
      {right}
    </div>
  );
}

function aftermath(p: PuzzleData) {
  if (p.found) return null;
  const tail =
    p.result === "win"
      ? " and won anyway"
      : p.result === "draw"
        ? " and drew"
        : p.end === "outoftime"
          ? " and lost on time"
          : " and lost";
  return `In the game I played ${p.played}${tail}.`;
}

export function Puzzle() {
  const [puzzles, setPuzzles] = useState<PuzzleData[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [fen, setFen] = useState("8/8/8/8/8/8/8/8 w - - 0 1");
  const [status, setStatus] = useState<Status>("loading");
  const [lastMove, setLastMove] = useState<[string, string] | null>(null);
  const [selected, setSelected] = useState<Square | null>(null);
  const [hint, setHint] = useState(false);
  const [wrongSq, setWrongSq] = useState<string | null>(null);
  const [log, setLog] = useState<LogEntry[]>([]);
  const [solved, setSolved] = useState<string[]>([]);
  const [animate, setAnimate] = useState(false);

  const game = useRef(new Chess());
  const step = useRef(0);
  const timers = useRef<number[]>([]);

  const p = puzzles?.[idx];

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  const play = useCallback((uci: string) => {
    const g = game.current;
    const white = g.turn() === "w";
    const num = g.moveNumber();
    const m = g.move(parseUci(uci));
    setFen(g.fen());
    setLastMove([m.from, m.to]);
    setLog((l) => [...l, { san: m.san, white, num }]);
    return m;
  }, []);

  const load = useCallback((pz: PuzzleData) => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    game.current = new Chess(pz.fenBefore);
    step.current = 0;
    setFen(pz.fenBefore);
    setLastMove(null);
    setSelected(null);
    setHint(false);
    setWrongSq(null);
    setLog([]);
    setStatus("watch");
    setAnimate(false);
    later(() => setAnimate(true), 100);
    later(() => {
      const g = game.current;
      const m = g.move(parseUci(pz.lastMove));
      setFen(g.fen());
      setLastMove([m.from, m.to]);
      setStatus("play");
    }, 600);
  }, []);

  useEffect(() => {
    fetch("/puzzles.json")
      .then((r) => r.json())
      .then((data: PuzzleData[]) => {
        const done = readSolved();
        setSolved(done);
        setPuzzles(data);
        let current = -1;
        try {
          const id = localStorage.getItem(CURRENT);
          current = data.findIndex((d) => d.id === id);
        } catch {}
        if (current === -1) current = data.findIndex((d) => !done.includes(d.id));
        setIdx(current === -1 ? 0 : current);
      })
      .catch(() => setStatus("loading"));
    return () => timers.current.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!p) return;
    load(p);
    try {
      localStorage.setItem(CURRENT, p.id);
    } catch {}
  }, [p, load]);

  const markSolved = (id: string) => {
    setSolved((s) => {
      if (s.includes(id)) return s;
      const next = [...s, id];
      try {
        localStorage.setItem(STORE, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const tryMove = (from: Square, to: Square): boolean => {
    if (!p || status !== "play") return false;
    const g = game.current;
    const expected = p.solution[step.current];
    const exp = parseUci(expected);
    const promotion = exp.from === from && exp.to === to && exp.promotion ? exp.promotion : "q";

    let m;
    try {
      m = g.move({ from, to, promotion });
    } catch {
      return false;
    }
    setSelected(null);
    setHint(false);

    const uci = m.from + m.to + (m.promotion ?? "");
    const mate = g.isCheckmate();

    if (uci !== expected && !mate) {
      setFen(g.fen());
      setWrongSq(to);
      setStatus("wrong");
      later(() => {
        g.undo();
        setFen(g.fen());
        setWrongSq(null);
        setStatus("play");
      }, 700);
      return true;
    }

    g.undo();
    play(uci);
    step.current += 1;

    if (mate || step.current >= p.solution.length) {
      setStatus("solved");
      markSolved(p.id);
      return true;
    }

    setStatus("watch");
    later(() => {
      play(p.solution[step.current]);
      step.current += 1;
      setStatus("play");
    }, 450);
    return true;
  };

  const reveal = () => {
    if (!p || status !== "play") return;
    setStatus("revealed");
    setSelected(null);
    setHint(false);
    const rest = p.solution.slice(step.current);
    rest.forEach((uci, i) =>
      later(() => {
        play(uci);
        step.current += 1;
      }, 350 + i * 700),
    );
  };

  const go = (d: number) => {
    if (!puzzles) return;
    setIdx((i) => (i + d + puzzles.length) % puzzles.length);
  };

  const mine = p?.color === "white" ? "w" : "b";

  const targets = useMemo(() => {
    if (!selected) return [] as { to: string; capture: boolean }[];
    return game.current
      .moves({ square: selected, verbose: true })
      .map((m) => ({ to: m.to, capture: m.isCapture() || m.isEnPassant() }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, fen]);

  const squareStyles = useMemo(() => {
    const s: Record<string, React.CSSProperties> = {};
    if (lastMove) {
      s[lastMove[0]] = { backgroundColor: tint(22) };
      s[lastMove[1]] = { backgroundColor: tint(30) };
    }
    if (selected) s[selected] = { backgroundColor: tint(40) };
    for (const t of targets) {
      s[t.to] = {
        ...s[t.to],
        backgroundImage: t.capture
          ? `radial-gradient(circle, transparent 62%, ${tint(55)} 64%)`
          : `radial-gradient(circle, ${tint(55)} 17%, transparent 19%)`,
      };
    }
    if (hint && p) {
      const from = p.solution[step.current]?.slice(0, 2);
      if (from) s[from] = { ...s[from], boxShadow: `inset 0 0 0 3px var(--accent)` };
    }
    if (wrongSq) s[wrongSq] = { backgroundColor: "color-mix(in oklab, #c0392b 45%, transparent)" };
    return s;
  }, [lastMove, selected, targets, hint, wrongSq, p]);

  const onSquareClick = ({ square, piece }: { square: string; piece: { pieceType: string } | null }) => {
    if (status !== "play") return;
    if (selected && targets.some((t) => t.to === square)) {
      tryMove(selected, square as Square);
      return;
    }
    if (piece && piece.pieceType[0] === mine && square !== selected) setSelected(square as Square);
    else setSelected(null);
  };

  const side = p?.color === "white" ? "White" : "Black";
  let prompt: React.ReactNode = "Loading…";
  if (p) {
    const goal = p.mateIn ? `mate in ${p.mateIn}` : "the winning line";
    if (status === "solved") prompt = <span className="text-accent">Solved.</span>;
    else if (status === "revealed") prompt = "Here's the line.";
    else if (status === "wrong") prompt = <span className="text-accent">Not that one.</span>;
    else if (log.length > 0) prompt = "Good. Keep going.";
    else {
      const did = `I ${p.found ? "found" : "missed"} ${goal}.`;
      prompt =
        idx === 0 ? (
          <>
            I{" "}
            <Link href="/projects/chess-puzzle-maker" className="link">
              turned my games into puzzles
            </Link>
            . Can you find {goal} as {p.color}?
          </>
        ) : (
          `${side} to play. ${did}`
        );
    }
  }

  const month = p
    ? new Date(p.date + "T12:00:00").toLocaleString("en", { month: "short", year: "numeric" })
    : "";

  return (
    <div>
      <div className="mb-4 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
        <h2 className="tracking-normal">{p && `${idx + 1} / ${puzzles!.length}`}</h2>
        <div className="flex gap-1 normal-case tracking-normal">
          <button onClick={() => go(-1)} className="px-1.5 text-[14px] hover:text-accent" aria-label="Previous puzzle">
            ←
          </button>
          <button onClick={() => go(1)} className="px-1.5 text-[14px] hover:text-accent" aria-label="Next puzzle">
            →
          </button>
        </div>
      </div>

      <PlayerBar
        name="Opponent"
        rating={p?.opp}
        color={p ? (p.color === "white" ? "black" : "white") : undefined}
        right={p && <span className="text-faint">{p.speed} · {month}</span>}
      />

      <div className={`overflow-hidden rounded-[3px] border border-rule ${status === "wrong" ? "nudge" : ""}`}>
        <Chessboard
          options={{
            id: "puzzle",
            position: fen,
            boardOrientation: p?.color ?? "white",
            pieces,
            animationDurationInMs: 220,
            showAnimations: animate,
            allowDrawingArrows: true,
            arrowOptions: {
              colors: {
                default: "var(--accent)",
                shift: "var(--accent)",
                ctrl: "var(--accent)",
                alt: "var(--accent)",
                meta: "var(--accent)",
              },
              color: "var(--accent)",
              secondaryColor: "var(--accent)",
              tertiaryColor: "var(--accent)",
              arrowLengthReducerDenominator: 8,
              sameTargetArrowLengthReducerDenominator: 4,
              arrowWidthDenominator: 6,
              activeArrowWidthMultiplier: 0.9,
              opacity: 0.7,
              activeOpacity: 0.5,
              arrowStartOffset: 0,
            },
            lightSquareStyle: { backgroundColor: "var(--sq-light)" },
            darkSquareStyle: { backgroundColor: "var(--sq-dark)" },
            lightSquareNotationStyle: { color: "var(--sq-dark)" },
            darkSquareNotationStyle: { color: "var(--sq-light)" },
            alphaNotationStyle: { fontSize: "10px", position: "absolute", bottom: 1, right: 3, userSelect: "none", fontFamily: "var(--font-mono)" },
            numericNotationStyle: { fontSize: "10px", position: "absolute", top: 2, left: 3, userSelect: "none", fontFamily: "var(--font-mono)" },
            dropSquareStyle: { boxShadow: "inset 0 0 0 2px var(--accent)" },
            draggingPieceGhostStyle: { opacity: 0.35 },
            squareStyles,
            canDragPiece: ({ piece }) => status === "play" && piece.pieceType[0] === mine,
            onPieceDrop: ({ sourceSquare, targetSquare }) =>
              targetSquare ? tryMove(sourceSquare as Square, targetSquare as Square) : false,
            onSquareClick,
          }}
        />
      </div>

      <PlayerBar
        name="Koral"
        rating={p?.me}
        color={p?.color}
        right={
          p?.clock != null && (
            <span
              className="rounded-[3px] border border-rule px-1.5 py-px tabular-nums text-muted"
              title="My clock at this moment"
            >
              {formatClock(p.clock)}
            </span>
          )
        }
      />

      <p className="mt-3 min-h-[1.6em] text-[1.15rem]">{prompt}</p>

      {log.length > 0 && (
        <p className="mt-1 font-mono text-[12px] leading-relaxed text-muted">
          {log.map((e, i) => (
            <span key={i}>
              {e.white ? `${e.num}. ` : i === 0 ? `${e.num}… ` : ""}
              {e.san}{" "}
            </span>
          ))}
        </p>
      )}

      {p && !p.found && (status === "solved" || status === "revealed") && (
        <p className="mt-1 text-[0.98rem] text-muted">{aftermath(p)}</p>
      )}

      <div className="mt-4 flex items-center justify-between gap-4 border-t border-rule pt-3 font-mono text-[12px]">
        <div className="flex gap-4">
          {status === "solved" || status === "revealed" ? (
            <>
              <button className="link" onClick={() => go(1)}>next puzzle</button>
              <button className="link text-muted" onClick={() => p && load(p)}>retry</button>
            </>
          ) : (
            <>
              <button className="link" onClick={() => setHint(true)} disabled={status !== "play"}>hint</button>
              <button className="link" onClick={reveal} disabled={status !== "play"}>show line</button>
            </>
          )}
        </div>
        <span className="text-faint">{solved.length} solved</span>
      </div>
    </div>
  );
}
