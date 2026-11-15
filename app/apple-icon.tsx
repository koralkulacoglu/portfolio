import { ImageResponse } from "next/og";
import { fonts, palette } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS rounds the corners itself, so this one is full-bleed.
export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: palette.paper,
          color: palette.ink,
          fontFamily: "Newsreader",
          fontSize: 140,
          paddingTop: 10,
        }}
      >
        K
      </div>
    ),
    { ...size, fonts: await fonts() },
  );
}
