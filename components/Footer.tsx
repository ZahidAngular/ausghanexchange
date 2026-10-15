import Image from "next/image"
import Link from "next/link"
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react"
import { branches, nav, site } from "@/lib/site"
import { SocialIcons } from "./SocialIcons"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />

      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block rounded-2xl bg-white px-5 py-4">
              <Image src={site.logo} alt="Ausghan Exchange" width={2090} height={728} className="h-12 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">{site.legalName}</p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
              <ShieldCheck className="h-4 w-4 text-brand" />
              {site.austrac}
            </p>
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold tracking-wide text-white">Follow Us</p>
              <SocialIcons />
            </div>
          </div>

          {branches.map((b) => (
            <div key={b.city} className={branches.length > 1 ? "lg:col-span-3" : "lg:col-span-4 lg:col-start-6"}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">{b.city} :</p>
              <ul className="mt-5 space-y-4 text-sm text-white/70">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {b.address}
                </li>
                <li>
                  <a href={`tel:${b.tel}`} className="flex gap-3 transition-colors hover:text-white">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {b.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="flex gap-3 transition-colors hover:text-white">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {b.hours}
                </li>
              </ul>
            </div>
          ))}

          <div className={branches.length > 1 ? "lg:col-span-2" : "lg:col-span-3"}>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">Menu</p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/70 transition-colors hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/get-a-quote" className="text-white/70 transition-colors hover:text-white">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>© {site.copyright}</p>
          <div className="flex gap-6">
            <Link href="/terms-of-use" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
