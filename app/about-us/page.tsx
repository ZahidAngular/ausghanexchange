import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/Button"
import { Counter } from "@/components/Counter"
import { CtaBand } from "@/components/CtaBand"
import { Headline } from "@/components/Headline"
import { WhyGlass } from "@/components/HeroCards"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { img, site } from "@/lib/site"

export const metadata: Metadata = { title: "About Us" }

const compliance = [
  { k: "KYC:", v: "All clients verified under AUSTRAC guidelines." },
  { k: "AML/CTF Controls:", v: "Comprehensive systems to monitor, detect, and report suspicious activity." },
  { k: "Risk Management Framework:", v: "Structured approach to safeguard against financial crime." },
  { k: "Ongoing Review:", v: "Regular updates to align with regulatory and industry best practice." },
]

const why = [
  { title: "Regulatory Confidence", text: "AUSTRAC registered.", icon: "icons8-trust-100.png" },
  { title: "Secure and Reliable", text: "Strong compliance controls.", icon: "icons8-secure-100.png" },
  { title: "Transparent and Fair", text: "No hidden fees.", icon: "icons8-fee-100.png" },
  { title: "Trusted Partner", text: "Recognised for professionalism and integrity.", icon: "icons8-handshake-100.png" },
]

function WhyItem({ w, i }: { w: (typeof why)[number]; i: number }) {
  return (
    <Reveal delay={i * 0.08} className="flex gap-5 rounded-3xl border border-line bg-white p-7 shadow-card">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50">
        <Image src={img(w.icon)} alt="" width={100} height={100} className="h-8 w-8" />
      </span>
      <div>
        <h3 className="text-lg font-bold text-ink">{w.title}</h3>
        <p className="mt-1 text-muted">{w.text}</p>
      </div>
    </Reveal>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        intro="Ausghan Exchange is a leading provider of remittance and foreign currency exchange services in Australia."
        aside={<WhyGlass />}
      />

      {/* Commitment to compliance */}
      <section className="py-14 lg:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <Headline eyebrow="Get to Know Us" highlight="Our" after="Commitment to – Compliance">
                <p className="font-display text-xl font-semibold text-ink">Trusted. Compliant. Transparent.</p>
                <p className="mt-4">
                  Ausghan Exchange is a leading provider of remittance and foreign currency exchange services in Australia. With
                  offices in Melbourne and Adelaide, we connect individuals and businesses to global markets while maintaining
                  the highest standards of compliance, transparency, and operational integrity.
                </p>
              </Headline>
            </Reveal>
            <ul className="relative mt-8 space-y-3">
              {compliance.map((c, i) => (
                <Reveal key={c.k} delay={i * 0.06}>
                  <li className="flex gap-4 rounded-2xl border border-line bg-white p-4 shadow-card transition-shadow hover:shadow-lift">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <p className="text-muted">
                      <strong className="font-semibold text-ink">{c.k}</strong> {c.v}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2} className="mt-10">
              <Button href="/send-money" variant="dark">
                Learn More
              </Button>
            </Reveal>
          </div>
          <Reveal from="right" delay={0.1} className="relative">
            <div className="relative mx-auto flex aspect-square max-w-[500px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-50 to-paper">
              <div className="bg-grid absolute inset-0" />
              <Image src={img("823354.png")} alt="Compliance and security" width={512} height={512} className="animate-float relative w-[62%]" />
            </div>
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 shadow-lift">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-ink">{site.austrac}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-paper py-14 lg:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal from="left" className="relative order-2 lg:order-1">
            <div className="relative mx-auto aspect-square max-w-[520px] overflow-hidden rounded-[2.5rem] bg-white shadow-card">
              <Image
                src={img("steptodown.com402076.jpg")}
                alt="Foreign currency banknotes"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <Headline eyebrow="Offerings" before="What" highlight="We" after="Offer" />
            </Reveal>
            <div className="mt-10 space-y-5">
              {[
                { icon: "icons8-arrows-100.png", title: "Remittance Services", text: "Secure, efficient transfers with transparent pricing." },
                {
                  icon: "icons8-dollar-euro-exchange-100.png",
                  title: "Foreign Currency Exchange",
                  text: "Competitive, reliable rates across major and emerging currencies.",
                },
              ].map((o, i) => (
                <Reveal key={o.title} delay={i * 0.1} className="flex gap-5 rounded-3xl border border-line bg-white p-7 shadow-card">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-ink">
                    <Image src={img(o.icon)} alt="" width={100} height={100} className="h-9 w-9 brightness-0 invert" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{o.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">{o.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Ausghan */}
      <section className="py-14 lg:py-20">
        <div className="container-x">
          <Reveal>
            <Headline eyebrow="Why Choose Us" before="Why" highlight="Ausghan" after="Exchange." align="center" />
          </Reveal>
          <div className="mt-10 grid items-center gap-6 lg:grid-cols-3">
            <div className="space-y-6">
              {why.slice(0, 2).map((w, i) => (
                <WhyItem key={w.title} w={w} i={i} />
              ))}
            </div>
            <Reveal delay={0.1} className="flex items-center justify-center rounded-[2.5rem] border border-line bg-paper p-10">
              <Image src={site.logoFull} alt="Ausghan Exchange" width={2560} height={1191} className="w-full max-w-[320px]" />
            </Reveal>
            <div className="space-y-6">
              {why.slice(2).map((w, i) => (
                <WhyItem key={w.title} w={w} i={i + 2} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our assurance + stats */}
      <section className="relative overflow-hidden bg-ink py-14 text-white lg:py-20">
        <div className="bg-grid-dark pointer-events-none absolute inset-0" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 right-0 select-none font-display text-[16rem] font-extrabold leading-none text-white/[0.04] lg:text-[22rem]"
        >
          30K+
        </span>
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand/20 blur-[100px]" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Headline highlight="Our" after="Assurance" dark>
              <p>We are committed to long-term trust, compliance, and safe service for our customers, financial partners, and regulators.</p>
            </Headline>
          </Reveal>
          <div className="grid grid-cols-2 gap-5">
            {[
              { to: 10, suffix: "k+", label: "Active Users" },
              { to: 30, suffix: "K+", label: "Transactions" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
                <p className="mb-4 text-xs font-semibold text-mint">{String(i + 1).padStart(2, "0")}</p>
                <p className="font-display text-5xl font-extrabold">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-mint">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand text="Start your transfer in minutes. No delays, no hidden fees — just fast, secure service from Australia to your loved ones." />
    </>
  )
}
