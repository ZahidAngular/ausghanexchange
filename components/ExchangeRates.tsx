"use client"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, TrendingUp, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { exchangeRates } from "@/lib/site"
import { cn } from "@/lib/utils"

/** The rates board from the old site's "Exchange Rates" popup. */
export function RatesBoard({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[2rem] border border-line bg-white shadow-lift", className)}>
      <div className="flex items-center justify-between bg-ink px-7 py-6 text-white">
        <h2 className="text-2xl font-bold">Exchange Rates</h2>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-mint">
          <TrendingUp className="h-3.5 w-3.5" /> 1 AUD
        </span>
      </div>
      <ul className="divide-y divide-line">
        {exchangeRates.map((r) => (
          <li key={r.code} className="flex items-center justify-between px-7 py-4 transition-colors hover:bg-paper">
            <h2 className="flex items-center gap-3 font-display text-base font-semibold text-ink">
              <Image
                src={r.flagImg}
                alt={r.flag}
                width={160}
                height={107}
                className="h-6 w-9 rounded-[4px] object-cover ring-1 ring-line"
              />
              {r.country} <span className="text-muted">{r.code}</span>
            </h2>
            <span className="font-display text-lg font-bold tabular-nums text-brand-700">{r.rate}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Converts an AUD amount using the published rates (rates are per 1 AUD). */
export function RateConverter({ className, variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const light = variant === "light"
  const targets = exchangeRates.filter((r) => r.code !== "AUD")
  const aud = exchangeRates.find((r) => r.code === "AUD")!
  const [amount, setAmount] = useState("1000")
  const [code, setCode] = useState(targets[0].code)
  const target = targets.find((r) => r.code === code)!
  const value = (parseFloat(amount) || 0) * parseFloat(target.rate)
  const box = light ? "border border-line bg-paper" : "bg-white"
  const chip = light ? "bg-white shadow-sm ring-1 ring-line" : "bg-paper"

  return (
    <div
      className={cn(
        "rounded-[2rem] p-6 sm:p-8",
        light ? "bg-white shadow-[0_30px_80px_-20px_rgb(0_0_0/0.5)]" : "border border-white/10 bg-white/[0.06] backdrop-blur-xl",
        className,
      )}
    >
      {light ? (
        <>
          <p className="text-center font-display text-lg font-bold text-ink">Our Current Remittance Service Areas</p>
          <div className="mt-3 flex justify-center gap-2">
            {targets.map((r) => (
              <button
                key={r.code}
                type="button"
                onClick={() => setCode(r.code)}
                title={`${r.country} ${r.code}`}
                aria-label={`${r.country} ${r.code}`}
                className={cn("rounded-full p-0.5 ring-2 transition", code === r.code ? "ring-brand" : "ring-transparent hover:ring-line")}
              >
                <Image src={r.flagImg} alt="" width={160} height={107} className="h-7 w-7 rounded-full object-cover" />
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">Exchange Rates</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> AUD
          </span>
        </div>
      )}

      <label className={cn("mt-6 block rounded-2xl p-4", box)}>
        <span className="text-xs font-medium text-muted">You send</span>
        <span className="mt-1 flex items-center justify-between gap-3">
          <input
            type="number"
            inputMode="decimal"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full min-w-0 bg-transparent font-display text-3xl font-bold text-ink outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
            aria-label="Amount in AUD"
          />
          <span className={cn("flex shrink-0 items-center gap-2 rounded-full px-3 py-2 font-display font-semibold text-ink", chip)}>
            <Image src={aud.flagImg} alt="" width={160} height={80} className="h-4 w-6 rounded-[3px] object-cover" />
            AUD
          </span>
        </span>
      </label>

      {light ? (
        <ul className="my-1 space-y-2 border-l-2 border-dashed border-line py-3 pl-5 ml-6 text-sm">
          <li className="flex items-center justify-between">
            <span className="text-ink">
              1 AUD = <span className="font-semibold">{target.rate}</span> {target.code}
            </span>
            <span className="font-semibold text-brand-700">Exchange Rates</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-ink">{target.country}</span>
            <span className="text-muted">No hidden fees.</span>
          </li>
        </ul>
      ) : (
        <div className="relative z-10 -my-3 flex justify-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-ink bg-brand text-white">
            <ArrowRight className="h-4 w-4 rotate-90" />
          </span>
        </div>
      )}

      <div className={cn("rounded-2xl p-4", box)}>
        <span className="text-xs font-medium text-muted">They receive</span>
        <span className="mt-1 flex items-center justify-between gap-3">
          <span className="truncate font-display text-3xl font-bold tabular-nums text-brand-700">
            {value.toLocaleString("en-AU", { maximumFractionDigits: 2 })}
          </span>
          <span className={cn("relative flex shrink-0 items-center gap-2 rounded-full py-2 pl-3 pr-8 font-display font-semibold text-ink", chip)}>
            <Image src={target.flagImg} alt="" width={160} height={107} className="h-4 w-6 rounded-[3px] object-cover" />
            {target.code}
            <svg className="pointer-events-none absolute right-3 h-3 w-3 text-muted" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <select
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="absolute inset-0 cursor-pointer opacity-0"
              aria-label="Receiving currency"
            >
              {targets.map((r) => (
                <option key={r.code} value={r.code}>
                  {r.country} {r.code}
                </option>
              ))}
            </select>
          </span>
        </span>
      </div>

      {!light && (
        <p className="mt-4 text-center text-sm text-white/60">
          1 AUD = <span className="font-semibold text-white">{target.rate}</span> {target.code}
        </p>
      )}

      <Link
        href="/get-a-quote"
        className="mt-5 flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-semibold text-white shadow-[0_10px_30px_-10px_rgb(31_169_53/0.8)] transition-colors hover:bg-brand-600"
      >
        Send Money <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}

/** Floating "Exchange Rates" button that opens the rates popup on every page, like the old site's popup. */
export function RatesPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-lift ring-1 ring-white/10 transition-transform hover:-translate-y-0.5"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
        </span>
        Exchange Rates
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/60 p-4 backdrop-blur-sm sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Exchange Rates"
          >
            <motion.div
              className="relative w-full max-w-md"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
              <RatesBoard />
              <Link
                href="/get-a-quote"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Send Money <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
