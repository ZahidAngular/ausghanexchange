import type { Metadata } from "next"
import { Mail } from "lucide-react"
import { BranchCard } from "@/components/BranchCard"
import { ContactForm } from "@/components/ContactForm"
import { Faq } from "@/components/Faq"
import { Headline } from "@/components/Headline"
import { ContactGlass } from "@/components/HeroCards"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { branches, features, site } from "@/lib/site"

export const metadata: Metadata = { title: "Contact Us" }

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" intro="Simplify sending and receiving your money with us." aside={<ContactGlass />} />

      <section className="py-14 lg:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Headline eyebrow="Get in touch" before="We're here to" highlight="help" after="and hear from you.">
                {features.legacyHiddenSections && (
                  <p>Reach out to our dedicated support team for any inquiries related to our e-wallet and payment gateway services.</p>
                )}
              </Headline>
            </Reveal>
            <Reveal delay={0.05}>
              <a
                href={`mailto:${site.email}`}
                className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-line bg-paper px-5 py-4 font-medium text-ink transition-colors hover:border-brand/40"
              >
                <Mail className="h-5 w-5 text-brand" />
                {site.email}
              </a>
            </Reveal>
            <div className="mt-8 space-y-6">
              {branches.map((b, i) => (
                <Reveal key={b.city} delay={0.1 + i * 0.1}>
                  <BranchCard branch={b} />
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal from="right" delay={0.1} className="lg:col-span-7">
            <div className="rounded-[2rem] border border-line bg-white p-7 shadow-lift sm:p-10">
              <h2 className="text-2xl font-bold text-ink">Send us a message</h2>
              <p className="mb-8 mt-2 text-muted">{site.hours}</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <Faq />
    </>
  )
}
