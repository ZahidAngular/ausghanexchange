"use client"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

/** Moves its content against the scroll direction for a depth effect while the block passes through the viewport. */
export function Parallax({ children, speed = 60, className }: { children: React.ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [speed, -speed])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  )
}

/** A thin brand-coloured bar at the top of the page showing scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-brand via-mint to-brand"
    />
  )
}
