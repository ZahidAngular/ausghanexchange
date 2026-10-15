import Image from "next/image"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { branches, img, site } from "@/lib/site"
import { cn } from "@/lib/utils"

const glass = "rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8"

/** Branch phones, addresses and email on a frosted card for the dark page heroes. */
export function ContactGlass({ className, cta = true }: { className?: string; cta?: boolean }) {
  return (
    <div className={cn(glass, className)}>
      <ul className="space-y-5">
        {branches.map((b) => (
          <li key={b.city} className="rounded-2xl bg-white/[0.05] p-5 ring-1 ring-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mint">{b.city}</p>
            <a href={`tel:${b.tel}`} className="mt-2 flex items-center gap-3 font-display text-xl font-bold hover:text-mint">
              <Phone className="h-4 w-4 text-brand" /> {b.phone}
            </a>
            <p className="mt-2 flex gap-3 text-sm text-white/65">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {b.address}
            </p>
          </li>
        ))}
      </ul>
      <a href={`mailto:${site.email}`} className="mt-5 flex items-center gap-3 text-sm font-medium text-white/80 hover:text-white">
        <Mail className="h-4 w-4 text-brand" /> {site.email}
      </a>
      {cta && (
        <Link
          href="/get-a-quote"
          className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-semibold text-white shadow-[0_10px_30px_-10px_rgb(31_169_53/0.8)] transition-colors hover:bg-brand-600"
        >
          Send Money <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

const why = [
  { title: "Regulatory Confidence", text: "AUSTRAC registered.", icon: "icons8-trust-100.png" },
  { title: "Secure and Reliable", text: "Strong compliance controls.", icon: "icons8-secure-100.png" },
  { title: "Transparent and Fair", text: "No hidden fees.", icon: "icons8-fee-100.png" },
  { title: "Trusted Partner", text: "Recognised for professionalism and integrity.", icon: "icons8-handshake-100.png" },
]

/** The About page's "Why Ausghan Exchange" points as a frosted 2x2 grid. */
export function WhyGlass({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-3", className)}>
      {why.map((w, i) => (
        <div key={w.title} className={cn(glass, "p-5 sm:p-6")}>
          <span className="text-xs font-semibold text-mint">{String(i + 1).padStart(2, "0")}</span>
          <span className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white">
            <Image src={img(w.icon)} alt="" width={100} height={100} className="h-6 w-6" />
          </span>
          <h3 className="mt-4 font-display font-bold leading-snug">{w.title}</h3>
          <p className="mt-1 text-sm text-white/60">{w.text}</p>
        </div>
      ))}
    </div>
  )
}
