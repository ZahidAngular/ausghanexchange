"use client"
import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

/** "Scroll to Top" button carried over from the old site. */
export function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to Top"
      title="Scroll to Top"
      className={cn(
        "fixed bottom-20 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:text-white",
        show ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
