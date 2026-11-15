export type Readme = {
  markdown: string;
  rawBase: string; // for relative images
  htmlBase: string; // for relative links
};

/** Fetches a repo's README given its GitHub URL. Returns null for orgs, missing READMEs or API errors. */
export async function fetchReadme(repoUrl: string): Promise<Readme | null> {
  const m = repoUrl.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+?)\/?$/);
  if (!m) return null;

  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  try {
    const res = await fetch(`https://api.github.com/repos/${m[1]}/${m[2]}/readme`, {
      headers,
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data: { content: string; download_url: string; html_url: string } = await res.json();
    return {
      markdown: Buffer.from(data.content, "base64").toString("utf8"),
      rawBase: data.download_url.replace(/[^/]+$/, ""),
      htmlBase: data.html_url.replace(/[^/]+$/, ""),
    };
  } catch {
    return null;
  }
}
