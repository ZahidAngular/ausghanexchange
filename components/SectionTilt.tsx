"use client"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

/**
 * Every page section (except the first hero) enters the viewport slightly tilted and
 * straightens out as it scrolls up into place, alternating left/right tilt.
 */
export function SectionTilt() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section")).slice(1)
    sections.forEach((s, i) => {
      s.style.willChange = "transform"
      s.style.transformOrigin = i % 2 ? "100% 0%" : "0% 0%"
    })

    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      const mobile = window.innerWidth < 768
      const maxDeg = mobile ? 2 : 3.5
      const maxY = mobile ? 40 : 90
      sections.forEach((s, i) => {
        const top = s.getBoundingClientRect().top
        // 0 when the section's top is at the bottom of the screen, 1 once it reaches 35% from the top
        const p = Math.min(1, Math.max(0, (vh - top) / (vh * 0.65)))
        const e = 1 - Math.pow(1 - p, 3)
        const deg = (1 - e) * maxDeg * (i % 2 ? 1 : -1)
        s.style.transform = p >= 1 ? "" : `translateY(${(1 - e) * maxY}px) rotate(${deg}deg)`
      })
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      sections.forEach((s) => {
        s.style.transform = ""
        s.style.willChange = ""
      })
    }
  }, [pathname])

  return null
}
