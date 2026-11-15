"use client";

import { useState } from "react";
import { olderProjects, projects, type Project } from "@/lib/content";

function Row({ p, n }: { p: Project; n: number }) {
  const [open, setOpen] = useState(false);
  const id = `p-${n}`;

  return (
    <li className="border-t border-rule">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="group grid w-full grid-cols-[2.2rem_1fr_auto] items-baseline gap-x-2 py-3.5 text-left"
      >
        <span className="font-mono text-[12px] text-faint">{n}.</span>
        <span>
          <span className="text-[1.15rem] transition-colors group-hover:text-accent">
            {p.name}
          </span>
          <span className="mt-0.5 block text-[0.98rem] text-muted">{p.line}</span>
        </span>
        <span className="hidden font-mono text-[12px] text-faint sm:inline">
          {p.stack}
          <span
            aria-hidden
            className={`ml-3 inline-block w-2 text-center transition-transform duration-200 ${open ? "rotate-45 text-accent" : ""}`}
          >
            +
          </span>
        </span>
      </button>

      <div id={id} className="reveal" data-open={open}>
        <div>
          <div className="pb-5 pl-[2.7rem]">
            {p.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.image}
                alt=""
                loading="lazy"
                className="mb-4 aspect-[16/9] w-full max-w-[34rem] rounded-[3px] border border-rule object-cover"
              />
            )}
            {p.more && (
              <p className="mb-3 max-w-[34rem] leading-relaxed text-muted">{p.more}</p>
            )}
            <p className="flex gap-5 font-mono text-[12px]">
              <span className="text-faint sm:hidden">{p.stack}</span>
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
          </div>
        </div>
      </div>
    </li>
  );
}

export function Projects() {
  const [showOlder, setShowOlder] = useState(false);
  const list = showOlder ? [...projects, ...olderProjects] : projects;

  return (
    <>
      <ol className="border-b border-rule">
        {list.map((p, i) => (
          <Row key={p.name} p={p} n={i + 1} />
        ))}
      </ol>
      <button
        onClick={() => setShowOlder((s) => !s)}
        className="link mt-4 font-mono text-[12px] text-muted"
      >
        {showOlder ? "fewer" : `${olderProjects.length} older projects`}
      </button>
    </>
  );
}
