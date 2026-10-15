import Image from "next/image"
import { exchangeRates } from "@/lib/site"

/** Scrolling strip of the published exchange rates. */
export function RatesTicker() {
  return (
    <section className="border-b border-line bg-white" aria-label="Exchange Rates">
      <div className="relative overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-12">
          {[...exchangeRates, ...exchangeRates, ...exchangeRates, ...exchangeRates].map((r, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap" aria-hidden={i >= exchangeRates.length}>
              <Image src={r.flagImg} alt="" width={160} height={107} className="h-5 w-7 rounded-[3px] object-cover" />
              <span className="font-display font-bold text-ink">{r.code}</span>
              <span className="text-sm text-muted">{r.country}</span>
              <span className="font-display font-bold tabular-nums text-brand-700">{r.rate}</span>
              <span className="ml-8 h-1 w-1 rounded-full bg-line" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
