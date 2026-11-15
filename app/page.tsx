import { jobs, links } from "@/lib/content";
import { Projects } from "@/components/projects";
import { Puzzle } from "@/components/puzzle";
import { Webring } from "@/components/webring";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
      {children}
    </h2>
  );
}

function Footer({ className }: { className: string }) {
  return (
    <footer
      className={`flex-wrap items-center justify-between gap-6 border-t border-rule pt-5 font-mono text-[12px] text-faint ${className}`}
    >
      <span>Toronto · {new Date().getFullYear()}</span>
      <Webring />
    </footer>
  );
}

export default function Home() {
  return (
    <div className="mx-auto grid max-w-[1120px] grid-cols-[minmax(0,1fr)] gap-x-12 gap-y-12 px-5 pt-14 pb-12 sm:px-8 sm:pt-16 lg:gap-y-8 lg:pt-12 lg:pb-8 lg:grid-cols-[minmax(0,1fr)_380px]">
      <header className="lg:col-start-1">
        <h1 className="text-[2.6rem] leading-none tracking-[-0.01em] sm:text-5xl">
          Koral Kulacoglu
        </h1>
        <p className="mt-3 font-mono text-[13px] text-faint">
          Software Engineering · University of Waterloo
        </p>
        <p className="mt-4 max-w-[34rem] text-[1.2rem] leading-relaxed text-muted">
          I like systems programming and chess.
        </p>
        <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="link"
              {...(l.href.startsWith("http") || l.href.endsWith(".pdf")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <aside className="lg:sticky lg:top-12 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:self-start lg:pt-2">
        <Puzzle />
        <Footer className="mt-10 hidden lg:flex" />
      </aside>

      <section className="lg:col-start-1">
        <Label>Experience</Label>
        <ul>
          {jobs.map((j) => (
            <li
              key={j.company}
              className="group flex gap-x-2.5 border-t border-rule py-2 last:border-b"
            >
              <span
                aria-hidden
                className="mt-[5px] size-[1.05rem] shrink-0 bg-faint transition-colors group-hover:bg-accent"
                style={{
                  mask: `url(/logos/${j.logo}.svg) center / contain no-repeat`,
                  WebkitMask: `url(/logos/${j.logo}.svg) center / contain no-repeat`,
                }}
              />
              <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4">
                <p className="text-[1.1rem]">
                  {j.company}
                  {j.what && <span className="text-muted"> — {j.what}</span>}
                </p>
                <p className="whitespace-nowrap font-mono text-[12px] text-faint">
                  {j.incoming && <span className="mr-2 text-accent">incoming</span>}
                  {j.when}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="scroll-mt-12 lg:col-start-1">
        <Projects />
      </section>

      <Footer className="flex lg:hidden" />
    </div>
  );
}
