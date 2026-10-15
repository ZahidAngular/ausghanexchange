import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/Button"
import { Counter } from "@/components/Counter"
import { CtaBand } from "@/components/CtaBand"
import { Headline } from "@/components/Headline"
import { RateConverter } from "@/components/ExchangeRates"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { img, serviceAreaFlags } from "@/lib/site"

export const metadata: Metadata = { title: "Send Money" }

// Flags from the old Send Money hero grid (4.png, 5.png, 7.png)
const extraFlags = [
  { name: "Sri Lanka", src: img("4.png") },
  { name: "Malaysia", src: img("5.png") },
  { name: "Turkey", src: img("7.png") },
]

const reasons = [
  {
    title: "Innovation",
    text: "We’re continuously improving our services to make sending and exchanging money simpler and smarter. Our goal is to keep evolving with the needs of our community.",
    icon: "Diamond-QGP53L5.png",
  },
  {
    title: "Security",
    text: "Your trust comes first. We use strong processes and safeguards to protect your transactions and personal information at every step",
    icon: "Barcode-QGP53L5.png",
  },
  {
    title: "Integration",
    text: "As we grow, we’re working to connect seamlessly across platforms and expand the ways you can access our services—online and in person.",
    icon: "Cashflow-QGP53L5.png",
  },
  {
    title: "Speed",
    text: "Quick, reliable transfers that help your money reach where it needs to be, when it needs to be there.",
    icon: "Time-is-money-QGP53L5.png",
  },
]

const steps = [
  {
    title: "KYC",
    text: "Complete a quick KYC verification by submitting valid ID documents to ensure secure, compliant, and hassle-free transfers.",
    icon: "Barcode-QGP53L5.png",
  },
  {
    title: "Share Receiver Details",
    text: "Provide us with the recipient’s details and/or bank information—either online or by visiting one of our offices.",
    icon: "icon12-AVP2DHA.png",
  },
  { title: "Make Your Payment", text: "Pay securely through a bank transfer or directly in person at our branch.", icon: "icon05-89TWBQ4.png" },
  {
    title: "Funds Delivered",
    text: "Once confirmed, your money is sent almost instantly, so your loved ones receive it quickly and without hassle",
    icon: "icon11-89TWBQ4.png",
  },
]

function ReasonCard({ r, i }: { r: (typeof reasons)[number]; i: number }) {
  return (
    <Reveal delay={i * 0.08} className="rounded-3xl border border-line bg-white p-7 shadow-card">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
        <Image src={img(r.icon)} alt="" width={96} height={96} className="h-8 w-8" />
      </span>
      <h3 className="mt-5 text-xl font-bold text-ink">{r.title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{r.text}</p>
    </Reveal>
  )
}

export default function SendMoneyPage() {
  return (
    <>
      {/* Hero: service areas */}
      <PageHero title="Our Current Remittance Service Areas" crumb="Send Money" aside={<RateConverter variant="light" />}>
        <div className="mt-10 flex flex-wrap items-center gap-4 rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur sm:gap-6 sm:p-6">
          <div className="flex flex-col items-center gap-2">
            <Image src={img("au-circle-01.png")} alt="Australia" width={500} height={500} className="h-16 w-16 sm:h-20 sm:w-20" />
            <span className="text-xs text-white/60">Australia</span>
          </div>
          <Image src={img("Facebook-1.webp")} alt="" width={500} height={500} className="animate-float h-12 w-12 sm:h-16 sm:w-16" />
          <div className="flex flex-1 flex-wrap gap-3 sm:gap-4">
            {[...serviceAreaFlags, ...extraFlags].map((f) => (
              <div key={f.name} className="flex flex-col items-center gap-2">
                <Image src={f.src} alt={f.name} width={200} height={200} className="h-11 w-11 rounded-full object-cover ring-2 ring-white/15 sm:h-14 sm:w-14" />
                <span className="text-[11px] text-white/60">{f.name}</span>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      {/* Fast, affordable */}
      <section className="py-14 lg:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal from="left" className="relative">
            <div className="relative mx-auto aspect-[4/5] max-w-[480px] overflow-hidden rounded-[2.5rem] shadow-lift">
              <Image
                src={img("steptodown.com500041.jpg")}
                alt="Australian dollars in a jeans pocket"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Headline before="Fast, Affordable" highlight="Money" after="Transfers">
                <p>
                  Ausghan Exchange makes sending money overseas simple and stress-free. With competitive rates, low fees, and fast
                  delivery, we ensure your loved ones receive support quickly and securely.
                </p>
              </Headline>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <Button href="/get-a-quote">Get Started</Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-paper py-14 lg:py-20">
        <div className="container-x">
          <Reveal>
            <Headline eyebrow="Why Choose Us" before="Your Trusted" highlight="Partner" after="for International Transfers" align="center">
              <p>Reliable Remittance Backed by Experience</p>
            </Headline>
          </Reveal>
          <div className="mt-10 grid items-center gap-6 lg:grid-cols-3">
            <div className="space-y-6">
              {reasons.slice(0, 2).map((r, i) => (
                <ReasonCard key={r.title} r={r} i={i} />
              ))}
            </div>
            <Reveal delay={0.1} className="relative flex flex-col items-center rounded-[2.5rem] bg-gradient-to-br from-ink to-ink-3 p-10">
              <div className="bg-grid-dark pointer-events-none absolute inset-0 rounded-[2.5rem]" />
              <h2 className="relative text-sm font-semibold uppercase tracking-[0.2em] text-mint">Future</h2>
              <Image src={img("Group-55-test.png")} alt="Globe" width={1316} height={1386} className="animate-float relative mt-6 w-full max-w-[280px]" />
            </Reveal>
            <div className="space-y-6">
              {reasons.slice(2).map((r, i) => (
                <ReasonCard key={r.title} r={r} i={i + 2} />
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-5">
            {[
              { to: 10, suffix: "k+", label: "Active Users" },
              { to: 30, suffix: "K+", label: "Transactions" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="rounded-3xl bg-white p-8 text-center shadow-card">
                <p className="font-display text-5xl font-extrabold text-ink">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-brand-700">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 lg:py-20">
        <div className="container-x">
          <Reveal>
            <Headline eyebrow="How It Works" before="Three" highlight="Simple Steps" after="to Send Money" align="center" />
          </Reveal>
          <div className="relative mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-[52px] hidden border-t-2 border-dashed border-brand/30 lg:block" />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} className="relative rounded-3xl border border-line bg-white p-7 text-center shadow-card">
                <div className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-ink ring-8 ring-white">
                  <Image src={img(s.icon)} alt="" width={96} height={96} className="h-8 w-8 brightness-0 invert" />
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand font-display text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        text="Start your transfer instantly. No delays, no hidden fees — just fast, secure service from Australia to your loved ones."
        buttonLabel="Send Money Now"
        buttonHref="/get-a-quote"
      />
    </>
  )
}
