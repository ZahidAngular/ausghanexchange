"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Clock, Menu, Phone, ShieldCheck, X } from "lucide-react"
import { branches, nav, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile menu whenever the route changes
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
  }

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div
        className={cn(
          "hidden overflow-hidden bg-ink text-[13px] text-white/75 transition-all duration-300 lg:block",
          scrolled ? "max-h-0" : "max-h-12",
        )}
      >
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            {branches.map((b) => (
              <a key={b.city} href={`tel:${b.tel}`} className="flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-3.5 w-3.5 text-brand" />
                <span className="text-white/50">{b.city}:</span> {b.phone}
              </a>
            ))}
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-brand" />
              {site.hours}
            </span>
          </div>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            {site.austrac}
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled || open ? "border-line bg-white/90 shadow-card backdrop-blur-xl" : "border-transparent bg-white",
        )}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label="Ausghan Exchange home" className="shrink-0">
            <Image src={site.logo} alt="Ausghan Exchange" width={2090} height={728} priority className="h-11 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors",
                  isActive(item.href) ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-brand-50" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/get-a-quote"
              className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(31_169_53/0.7)] transition-colors hover:bg-brand-600 sm:inline-flex"
            >
              Send Money
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink lg:hidden"
              aria-label={open ? "Close menu" : "Menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-line lg:hidden"
              aria-label="Mobile"
            >
              <div className="container-x flex flex-col gap-1 py-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-medium",
                      isActive(item.href) ? "bg-brand-50 text-ink" : "text-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/get-a-quote" className="mt-2 rounded-xl bg-brand px-4 py-3 text-center font-semibold text-white">
                  Send Money
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
