import { webring } from "@/lib/content";

export function Webring() {
  return (
    <nav aria-label="SE Webring" className="flex items-center gap-3">
      <a href={webring.prev} className="link px-1" aria-label="Previous site in the SE Webring">
        ←
      </a>
      <a
        href={webring.home}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2 transition-colors hover:text-accent"
      >
        <span
          aria-hidden
          className="block h-7 w-7 bg-current"
          style={{
            mask: "url(/se-webring.svg) center / contain no-repeat",
            WebkitMask: "url(/se-webring.svg) center / contain no-repeat",
          }}
        />
        se webring
      </a>
      <a href={webring.next} className="link px-1" aria-label="Next site in the SE Webring">
        →
      </a>
    </nav>
  );
}
