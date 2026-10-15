import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "dark" | "outline" | "light" | "ghost-light"

const styles: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-600 shadow-[0_10px_30px_-10px_rgb(31_169_53/0.7)]",
  dark: "bg-ink text-white hover:bg-ink-3",
  outline: "border border-ink/15 text-ink hover:border-ink/40 bg-white",
  light: "bg-white text-ink hover:bg-brand-50",
  "ghost-light": "border border-white/25 text-white hover:bg-white/10",
}

export function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className,
  external,
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  arrow?: boolean
  className?: string
  external?: boolean
}) {
  const cls = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300",
    styles[variant],
    className,
  )
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  )
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
}
