"use client"
import { motion, type HTMLMotionProps } from "framer-motion"

type From = "up" | "left" | "right" | "zoom"

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number; from?: From }

const start = (from: From, y: number) =>
  from === "left"
    ? { opacity: 0, x: -60 }
    : from === "right"
      ? { opacity: 0, x: 60 }
      : from === "zoom"
        ? { opacity: 0, scale: 0.88 }
        : { opacity: 0, y, scale: 0.97 }

/** Scroll-triggered entrance: slides/zooms content in once as it enters the viewport. */
export function Reveal({ delay = 0, y = 56, from = "up", children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={start(from, y)}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
