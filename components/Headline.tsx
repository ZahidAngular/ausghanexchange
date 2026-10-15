import { cn } from "@/lib/utils"

type Tag = "h1" | "h2" | "h3"

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="highlight-word">
      {children}
      <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M3 14 C 50 4, 120 3, 197 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
    </span>
  )
}

/** Eyebrow + headline where one word/phrase is highlighted, mirroring the old animated headlines. */
export function Headline({
  eyebrow,
  before,
  highlight,
  after,
  as: As = "h2",
  align = "left",
  dark = false,
  className,
  children,
}: {
  eyebrow?: string
  before?: string
  highlight?: string
  after?: string
  as?: Tag
  align?: "left" | "center"
  dark?: boolean
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
            dark ? "border-white/15 bg-white/5 text-mint" : "border-brand/20 bg-brand-50 text-brand-700",
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-mint" : "bg-brand")} />
          {eyebrow}
        </p>
      )}
      <As
        className={cn(
          "text-balance font-bold leading-[1.1]",
          As === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {before && <>{before} </>}
        {highlight && <Highlight>{highlight}</Highlight>}
        {after && <> {after}</>}
      </As>
      {children && (
        <div className={cn("mt-5 text-lg leading-relaxed", dark ? "text-white/70" : "text-muted", align === "center" && "mx-auto max-w-2xl")}>
          {children}
        </div>
      )}
    </div>
  )
}
