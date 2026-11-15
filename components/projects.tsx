"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, slug, type Project } from "@/lib/content";

const SHOWN = 3;

function Row({ p, n }: { p: Project; n: number }) {
  return (
    <li className="border-t border-rule">
      <Link
        href={`/projects/${slug(p.name)}`}
        className="group grid grid-cols-[2.2rem_1fr_auto] items-baseline gap-x-2 py-2"
      >
        <span className="font-mono text-[12px] text-faint">{n}.</span>
        <span>
          <span className="text-[1.15rem] transition-colors group-hover:text-accent">{p.name}</span>
          <span className="mt-0.5 block text-[0.98rem] text-muted">{p.line}</span>
        </span>
        <span className="hidden font-mono text-[12px] text-faint sm:inline">
          {p.stack}
          <span
            aria-hidden
            className="ml-3 inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
          >
            →
          </span>
        </span>
      </Link>
    </li>
  );
}

export function Projects() {
  const [all, setAll] = useState(false);
  const list = all ? projects : projects.slice(0, SHOWN);

  return (
    <>
      <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Projects</h2>
      <ol>
        {list.map((p, i) => (
          <Row key={p.name} p={p} n={i + 1} />
        ))}
      </ol>
      <button
        onClick={() => setAll((a) => !a)}
        aria-expanded={all}
        className="group grid w-full grid-cols-[2.2rem_1fr] items-baseline gap-x-2 border-y border-rule py-2.5 text-left font-mono text-[12px] text-muted transition-colors hover:text-accent"
      >
        <span aria-hidden className="text-faint transition-colors group-hover:text-accent">
          {all ? "−" : "+"}
        </span>
        <span>{all ? "show fewer" : `${projects.length - SHOWN} more projects`}</span>
      </button>
    </>
  );
}
