import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown, { defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { projects, slug } from "@/lib/content";
import { fetchReadme, type Readme } from "@/lib/github";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: slug(p.name) }));
}

const find = (s: string) => projects.find((p) => slug(p.name) === s);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const p = find((await params).slug);
  return p ? { title: `${p.name} · Koral Kulacoglu`, description: p.line } : {};
}

const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), "picture", "source", "video"],
  attributes: {
    ...defaultSchema.attributes,
    "*": [...(defaultSchema.attributes?.["*"] ?? []), "align"],
    img: [...(defaultSchema.attributes?.img ?? []), "width", "height"],
    source: ["srcSet", "media", "type"],
    video: ["src", "controls", "muted", "loop", "autoPlay", "playsInline", "width"],
  },
};

type HastNode = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

const ATTACHMENT = /^https:\/\/github\.com\/(?:[^/]+\/[^/]+\/assets\/\d+|user-attachments\/assets)\/[0-9a-f-]+$/;

/** A paragraph that is only a bare GitHub attachment link, which GitHub renders as a video player. */
function bareAttachment(n: HastNode): string | null {
  if (n.tagName !== "p") return null;
  const kids = (n.children ?? []).filter(
    (c) => !(c.type === "text" && !String((c as { value?: string }).value).trim()),
  );
  const a = kids[0];
  if (kids.length !== 1 || a.tagName !== "a") return null;
  const href = String(a.properties?.href ?? "");
  return ATTACHMENT.test(href) ? href : null;
}

/**
 * Post-sanitize tweaks:
 * - <img height/width> become inline styles, since the CSS reset forces height: auto
 * - bare GitHub attachment links become <video>, like on GitHub
 */
function imgSize() {
  const px = (v: unknown) => (/^\d+$/.test(String(v)) ? `${v}px` : String(v));
  const walk = (n: HastNode) => {
    const video = bareAttachment(n);
    if (video) {
      n.tagName = "video";
      n.properties = { src: video, controls: true, muted: true, playsInline: true, preload: "metadata" };
      n.children = [];
      return;
    }
    if (n.tagName === "img" && n.properties) {
      const { height, width } = n.properties;
      const style: string[] = [];
      if (height != null) style.push(`height:${px(height)}`, "width:auto");
      else if (width != null) style.push(`width:${px(width)}`);
      if (style.length) n.properties.style = style.join(";");
    }
    n.children?.forEach(walk);
  };
  return (tree: HastNode) => walk(tree);
}

/** Drops a leading H1 that just repeats the project name. */
function stripTitle(md: string, name: string) {
  const m = md.match(/^\s*#\s+(.+)\n/);
  if (!m) return md;
  const a = m[1].toLowerCase().replace(/[^a-z0-9]/g, "");
  const b = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return a.includes(b) || b.includes(a) ? md.slice(m[0].length) : md;
}

function resolve(readme: Readme) {
  return (url: string, key: string) => {
    if (/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(url)) return defaultUrlTransform(url);
    const base = key === "href" ? readme.htmlBase : readme.rawBase;
    return defaultUrlTransform(new URL(url.replace(/^\.\//, ""), base).href);
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = find((await params).slug);
  if (!p) notFound();
  const readme = p.code ? await fetchReadme(p.code) : null;

  return (
    <div className="mx-auto max-w-[760px] px-5 pt-12 pb-16 sm:px-8 sm:pt-16">
      <Link href="/#projects" className="link font-mono text-[12px] text-muted">
        ← back
      </Link>

      <header className="mt-10 border-b border-rule pb-6">
        <h1 className="text-[2.2rem] leading-tight sm:text-[2.6rem]">{p.name}</h1>
        <p className="mt-3 text-[1.1rem] text-muted">{p.line}</p>
        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[12px]">
          <span className="text-faint">{p.stack}</span>
          {p.code && (
            <a href={p.code} target="_blank" rel="noreferrer" className="link">
              code ↗
            </a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className="link">
              {p.live.includes("devpost") ? "devpost ↗" : p.live.includes("youtube") ? "video ↗" : "site ↗"}
            </a>
          )}
        </p>
      </header>

      {readme ? (
        <article className="readme mt-8">
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, [rehypeSanitize, schema], imgSize]}
            urlTransform={resolve(readme)}
          >
            {stripTitle(readme.markdown, p.name)}
          </Markdown>
        </article>
      ) : (
        <article className="readme mt-8">
          {p.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.image} alt="" />
          )}
        </article>
      )}
    </div>
  );
}
