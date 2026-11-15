import { ImageResponse } from "next/og";
import { fonts, palette } from "@/lib/og";

export function generateImageMetadata() {
  return [32, 192, 512].map((s) => ({
    id: String(s),
    size: { width: s, height: s },
    contentType: "image/png",
  }));
}

export default async function Icon({ id }: { id: Promise<string> }) {
  const s = Number(await id);
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
          borderRadius: s * 0.22,
          color: palette.ink,
          fontFamily: "Newsreader",
          fontSize: s * 0.82,
          paddingTop: s * 0.06,
        }}
      >
        {/* optical centring: the line box leaves room for descenders a capital K doesn't use */}
        <div style={{ display: "flex", transform: `translate(${s <= 32 ? 0 : -s * 0.019}px, ${s * (s <= 32 ? 0.08 : 0.068)}px)` }}>
          K
        </div>
      </div>
    ),
    // thin serifs vanish at tab size, so the small one is heavier
    { width: s, height: s, fonts: await fonts(s <= 32 ? 600 : 400) },
  );
}
