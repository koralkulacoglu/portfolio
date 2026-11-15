import { jobs, links } from "@/lib/content";
import { Projects } from "@/components/projects";
import { Puzzle } from "@/components/puzzle";
import { Webring } from "@/components/webring";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="mx-auto grid max-w-[1120px] grid-cols-[minmax(0,1fr)] gap-x-16 gap-y-16 px-5 pt-16 pb-12 sm:px-8 sm:pt-24 lg:grid-cols-[minmax(0,1fr)_400px]">
      <header className="lg:col-start-1">
        <h1 className="text-[2.6rem] leading-none tracking-[-0.01em] sm:text-5xl">
          Koral Kulacoglu
        </h1>
        <p className="mt-6 max-w-[34rem] text-[1.2rem] leading-relaxed text-muted">
          I study software engineering at Waterloo. I like low-level systems
          work: kernels, concurrency, and making things fast.
        </p>
        <nav className="mt-7 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px]">
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

      <aside className="lg:sticky lg:top-16 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:self-start lg:pt-2">
        <Puzzle />
      </aside>

      <section className="lg:col-start-1">
        <Label>Experience</Label>
        <ul>
          {jobs.map((j) => (
            <li
              key={j.company}
              className="flex flex-wrap items-baseline justify-between gap-x-4 border-t border-rule py-3 last:border-b"
            >
              <p className="text-[1.1rem]">
                {j.company}
                {j.what && <span className="text-muted"> — {j.what}</span>}
              </p>
              <p className="whitespace-nowrap font-mono text-[12px] text-faint">
                {j.incoming && <span className="mr-2 text-accent">incoming</span>}
                {j.when}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="lg:col-start-1">
        <Label>Projects</Label>
        <Projects />
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-6 border-t border-rule pt-6 font-mono text-[12px] text-faint lg:col-span-2">
        <span>Toronto · {new Date().getFullYear()}</span>
        <Webring />
      </footer>
    </div>
  );
}
