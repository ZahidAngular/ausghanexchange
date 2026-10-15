"use client"
import { animate, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function Counter({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration: 2, ease: [0.22, 1, 0.36, 1], onUpdate: setValue })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
