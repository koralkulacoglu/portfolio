// Light-theme palette, mirrored from globals.css (images can't read CSS variables).
export const palette = {
  paper: "#f4f0e7",
  ink: "#1f1c18",
  muted: "#6b6457",
  faint: "#9d9484",
  rule: "#ddd5c5",
  accent: "#b2441e",
  sqLight: "#ece4d3",
  sqDark: "#b3a184",
  pcWhite: "#fbf8f1",
  pcBlack: "#2b2722",
};

/** Fetches a Google Font as TTF, which is what next/og can read. */
async function googleFont(query: string) {
  const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${query}`)).text();
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error(`no TTF for ${query}`);
  return (await fetch(url)).arrayBuffer();
}

export async function fonts(serifWeight = 400) {
  const [serif, mono] = await Promise.all([
    googleFont(`Newsreader:opsz,wght@72,${serifWeight}`),
    googleFont("IBM+Plex+Mono:wght@400"),
  ]);
  return [
    { name: "Newsreader", data: serif, weight: 400 as const, style: "normal" as const },
    { name: "Plex Mono", data: mono, weight: 400 as const, style: "normal" as const },
  ];
}
