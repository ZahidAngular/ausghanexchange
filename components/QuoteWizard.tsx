"use client"
import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, CheckCircle2 } from "lucide-react"
import { quoteCountries, site } from "@/lib/site"
import { cn } from "@/lib/utils"
import { fieldCls, labelCls } from "./ContactForm"

const money = (n: number) => `$${n.toLocaleString("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

/** Three-step quote form carried over from the old WPForms "Send Money" form. */
export function QuoteWizard() {
  const [step, setStep] = useState(1)
  const [country, setCountry] = useState<string | null>(null)
  const [amount, setAmount] = useState("")
  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)
  const total = Number(amount) || 0

  function next() {
    if (step === 1 && !country) return setError("Please select a country.")
    if (step === 2 && !(total > 0)) return setError("Please enter an amount.")
    setError("")
    setStep((s) => s + 1)
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const body = [
      `Country: ${country}`,
      `Amount You Want To Send: ${money(total)}`,
      `Total Amount: ${money(total)}`,
      `Name: ${d.get("first")} ${d.get("last")}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone")}`,
      `Details: ${d.get("details") || "-"}`,
    ].join("\n")
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Send Money quote – ${country}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={submit} noValidate={step < 3}>
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="font-semibold text-ink">Step {step} of 3</span>
          <span className="text-muted">{["Destination", "Amount", "Your details"][step - 1]}</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-line">
          <motion.div className="h-full rounded-full bg-brand" animate={{ width: `${(step / 3) * 100}%` }} transition={{ duration: 0.4 }} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          {step === 1 && (
            <fieldset>
              <legend className={labelCls}>Select Country Where You Want To Send The Money</legend>
              <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {quoteCountries.map((c) => {
                  const active = country === c.label
                  return (
                    <button
                      type="button"
                      key={c.label}
                      onClick={() => setCountry(c.label)}
                      aria-pressed={active}
                      className={cn(
                        "relative flex flex-col items-center gap-3 rounded-2xl border-2 bg-white px-3 py-5 transition-all",
                        active ? "border-brand shadow-card" : "border-line hover:border-brand/40",
                      )}
                    >
                      {active && (
                        <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white">
                          <Check className="h-3 w-3" />
                        </span>
                      )}
                      <Image src={c.flag} alt={c.label} width={100} height={100} className="h-12 w-12 rounded-full object-cover" />
                      <span className="font-display font-semibold text-ink">{c.label}</span>
                    </button>
                  )
                })}
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="qw-amount" className={labelCls}>
                  Enter Amount You Want To Send
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-muted">$</span>
                  <input
                    id="qw-amount"
                    type="number"
                    step="any"
                    min="0"
                    inputMode="decimal"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={`${fieldCls} pl-8 text-lg`}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-ink px-6 py-5 text-white">
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-mint">Total Amount</span>
                  <span className="text-sm text-white/60">Country Select You: {country}</span>
                </span>
                <span className="font-display text-2xl font-bold">Price: {money(total)}</span>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <span className={labelCls}>
                  Name <span className="text-brand">*</span>
                </span>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <input name="first" required className={fieldCls} aria-label="First" />
                    <span className="mt-1.5 block text-xs text-muted">First</span>
                  </label>
                  <label className="block">
                    <input name="last" required className={fieldCls} aria-label="Last" />
                    <span className="mt-1.5 block text-xs text-muted">Last</span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="qw-email" className={labelCls}>
                  Email <span className="text-brand">*</span>
                </label>
                <input id="qw-email" name="email" type="email" required className={fieldCls} />
              </div>
              <div>
                <label htmlFor="qw-phone" className={labelCls}>
                  Phone <span className="text-brand">*</span>
                </label>
                <input id="qw-phone" name="phone" type="tel" required className={fieldCls} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="qw-details" className={labelCls}>
                  Details If Any
                </label>
                <textarea id="qw-details" name="details" rows={4} className={`${fieldCls} resize-none`} />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

      <div className="mt-8 flex items-center gap-3">
        {step > 1 && (
          <button
            type="button"
            onClick={() => {
              setError("")
              setStep((s) => s - 1)
            }}
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
          >
            <ArrowLeft className="h-4 w-4" /> Previous
          </button>
        )}
        {step < 3 ? (
          <button
            type="button"
            onClick={next}
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Next <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Submit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        )}
      </div>
      {sent && (
        <p className="mt-4 flex items-center gap-2 text-sm text-brand-700" role="status">
          <CheckCircle2 className="h-4 w-4" /> Your email app has opened with your quote request ready to send.
        </p>
      )}
    </form>
  )
}
