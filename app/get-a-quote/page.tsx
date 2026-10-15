import type { Metadata } from "next"
import { Clock, Phone, ShieldCheck } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"
import { Headline } from "@/components/Headline"
import { RateConverter } from "@/components/ExchangeRates"
import { PageHero } from "@/components/PageHero"
import { QuoteWizard } from "@/components/QuoteWizard"
import { Reveal } from "@/components/Reveal"
import { branches, features, site } from "@/lib/site"

export const metadata: Metadata = { title: "Get a Quote" }

export default function QuotePage() {
  return (
    <>
      <PageHero title="Get a Quote" aside={<RateConverter variant="light" />} />

      <section className="py-14 lg:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Headline before="Exchange Your" highlight="Money" after="Today" />
            </Reveal>
            <Reveal delay={0.1} className="mt-10 space-y-4">
              <p className="flex items-center gap-3 font-medium text-ink">
                <ShieldCheck className="h-5 w-5 text-brand" /> {site.austrac}
              </p>
              <p className="flex items-center gap-3 font-medium text-ink">
                <Clock className="h-5 w-5 text-brand" /> {site.hours}
              </p>
              {branches.map((b) => (
                <a key={b.city} href={`tel:${b.tel}`} className="flex items-center gap-3 font-medium text-ink hover:text-brand-700">
                  <Phone className="h-5 w-5 text-brand" /> {b.city}: {b.phone}
                </a>
              ))}
            </Reveal>
          </div>
          <Reveal from="right" delay={0.1} className="lg:col-span-7">
            <div className="rounded-[2rem] border border-line bg-white p-7 shadow-lift sm:p-10">
              <QuoteWizard />
            </div>
          </Reveal>
        </div>

        {features.legacyHiddenSections && (
          <div className="container-x mt-10">
            <div className="rounded-[2rem] border border-line bg-paper p-7 sm:p-10">
              <ContactForm withSubject />
            </div>
          </div>
        )}
      </section>
    </>
  )
}
