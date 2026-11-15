import { ImageResponse } from "next/og";
import { fonts, palette } from "@/lib/og";
import { boardSvg } from "@/lib/og-board";
import puzzles from "@/public/puzzles.json";

export const alt = "Koral Kulacoglu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const p = puzzles[0];
  const board = boardSvg(p.fenBefore, p.lastMove, p.color as "white" | "black");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          background: palette.paper,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "Newsreader", fontSize: 84, color: palette.ink, lineHeight: 1 }}>
            Koral Kulacoglu
          </div>
          <div style={{ fontFamily: "Plex Mono", fontSize: 21, color: palette.faint, marginTop: 28 }}>
            Software Engineering @ University of Waterloo
          </div>
          <div style={{ fontFamily: "Newsreader", fontSize: 36, color: palette.muted, marginTop: 36 }}>
            I like systems programming and chess
          </div>
          <div style={{ fontFamily: "Plex Mono", fontSize: 22, color: palette.faint, marginTop: 72 }}>
            koralkulacoglu.com
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={board}
          width={380}
          height={380}
          alt=""
          style={{ border: `1px solid ${palette.rule}`, borderRadius: 4 }}
        />
      </div>
    ),
    { ...size, fonts: await fonts() },
  );
}
