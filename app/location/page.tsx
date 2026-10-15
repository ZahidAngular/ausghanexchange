import type { Metadata } from "next"
import { BranchCard } from "@/components/BranchCard"
import { Button } from "@/components/Button"
import { Headline } from "@/components/Headline"
import { ContactGlass } from "@/components/HeroCards"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { branches } from "@/lib/site"

export const metadata: Metadata = { title: "Location" }

export default function LocationPage() {
  return (
    <>
      <PageHero title="Our Branches" crumb="Branches" aside={<ContactGlass />} />

      <section className="py-14 lg:py-20">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal className="max-w-2xl">
              <Headline eyebrow="Get in touch" before="We're here to" highlight="help" after="and hear from you." />
            </Reveal>
            <Reveal delay={0.1}>
              <Button href="/contact-us" variant="outline">
                Get in touch
              </Button>
            </Reveal>
          </div>

          <div className="mt-10 space-y-10">
            {branches.map((b, i) => (
              <Reveal key={b.city} delay={i * 0.1} className="grid gap-6 lg:grid-cols-5">
                <BranchCard branch={b} className="lg:col-span-2" />
                <div className="overflow-hidden rounded-3xl border border-line bg-paper shadow-card lg:col-span-3">
                  <iframe
                    src={b.map}
                    title={`${b.city} – ${b.address}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[360px] w-full lg:h-full lg:min-h-[400px]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
