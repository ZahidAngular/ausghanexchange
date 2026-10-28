"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { faqs } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Headline } from "./Headline"
import { Reveal } from "./Reveal"

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="bg-paper py-14 lg:py-20">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Headline eyebrow="Have Questions?" before="Frequently" highlight="asked" after="questions.">
            {/* Subtitle: hidden for now
            <p>Discover how our e-wallets and payment gateways optimize transactions.</p>
            */}
          </Headline>
        </Reveal>
        <div className="space-y-3 lg:col-span-7">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div
                  className={cn(
                    "rounded-2xl border bg-white transition-all duration-300",
                    isOpen ? "border-brand/30 shadow-card" : "border-line",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-ink sm:text-lg">{f.q}</span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        isOpen ? "rotate-45 bg-brand text-white" : "bg-paper text-ink",
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
