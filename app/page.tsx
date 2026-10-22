import Image from "next/image"
import { BadgeCheck, Handshake, Lock, Quote, Receipt, ShieldCheck, Star } from "lucide-react"
import { Button } from "@/components/Button"
import { Counter } from "@/components/Counter"
import { CtaBand } from "@/components/CtaBand"
import { RateConverter } from "@/components/ExchangeRates"
import { Faq } from "@/components/Faq"
import { Headline, Highlight } from "@/components/Headline"
import { HeroWave } from "@/components/PageHero"
import { RatesTicker } from "@/components/RatesTicker"
import { Parallax } from "@/components/Parallax"
import { Reveal } from "@/components/Reveal"
import { branches, exchangeRates, features, img, quoteCountries, reviews, serviceAreaFlags, site } from "@/lib/site"
import { cn } from "@/lib/utils"

const legacy = features.legacyHiddenSections

const partnerLogos = ["logo12-coinage.png", "logo11-coinage.png", "logo10-coinage.png", "logo09-coinage.png", "logo08-coinage.png", "logo01-coinage.png"]

const whyCards = [
  { title: "Innovation", text: "Cutting-edge technology and continuous improvements to stay ahead of the curve.", icon: "Diamond-QGP53L5.png" },
  { title: "Security", text: "Robust security measures to protect your transactions and sensitive data.", icon: "Barcode-QGP53L5.png" },
  { title: "Integration", text: "Smoothly integrate with diverse platforms, websites, and apps for seamless payment.", icon: "Cashflow-QGP53L5.png" },
  { title: "Speed", text: "Fast transaction processing to keep your payments moving without delays.", icon: "Time-is-money-QGP53L5.png" },
]

// Phrases from the old About Us "Why Ausghan Exchange" cards
const trustItems = [
  { icon: BadgeCheck, title: "Regulatory Confidence", text: "AUSTRAC registered." },
  { icon: Lock, title: "Secure and Reliable", text: "Strong compliance controls." },
  { icon: Receipt, title: "Transparent and Fair", text: "No hidden fees." },
  { icon: Handshake, title: "Trusted Partner", text: "Recognised for professionalism and integrity." },
]

// Counters from the old About Us / Send Money pages, plus branch and opening-hours facts
const homeStats: { to?: number; suffix?: string; value?: string; label: string; sub: string }[] = [
  { to: 10, suffix: "k+", label: "Active Users", sub: "Ausghan Exchange" },
  { to: 30, suffix: "K+", label: "Transactions", sub: "Ausghan Exchange" },
  { to: 1, label: "Branch", sub: "Adelaide" },
  { value: "7", label: "Days", sub: "Monday - Sunday 10AM - 6PM" },
]

// "Three Simple Steps to Send Money" from the old Send Money page
const sendSteps = [
  { title: "KYC", text: "Complete a quick KYC verification by submitting valid ID documents to ensure secure, compliant, and hassle-free transfers.", icon: "Barcode-QGP53L5.png" },
  { title: "Share Receiver Details", text: "Provide us with the recipient’s details and/or bank information—either online or by visiting one of our offices.", icon: "icon12-AVP2DHA.png" },
  { title: "Make Your Payment", text: "Pay securely through a bank transfer or directly in person at our branch.", icon: "icon05-89TWBQ4.png" },
  { title: "Funds Delivered", text: "Once confirmed, your money is sent almost instantly, so your loved ones receive it quickly and without hassle", icon: "icon11-89TWBQ4.png" },
]

const stats = [
  { to: 100, suffix: "B+", label: "Active Users" },
  { to: 97, suffix: "+", label: "Currencies" },
  { to: 765, suffix: "K+", label: "Transactions" },
  { to: 43, suffix: "K+", label: "Merchants" },
]

function WhyCard({ c, i }: { c: (typeof whyCards)[number]; i: number }) {
  return (
    <Reveal delay={i * 0.08} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:bg-white/[0.08]">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
        <Image src={img(c.icon)} alt="" width={96} height={96} className="h-8 w-8" />
      </span>
      <h3 className="mt-6 text-xl font-bold text-white">{c.title}</h3>
      <p className="mt-2 leading-relaxed text-white/60">{c.text}</p>
    </Reveal>
  )
}

export default function Home() {
  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden bg-ink pt-28 pb-20 text-white lg:pt-36 lg:pb-28">
        <Image src={img("Texture12-HPJPBQ-test.png")} alt="" fill priority sizes="100vw" className="object-cover opacity-[0.06] mix-blend-screen" />
        <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_80%)]" />
        <Image src={img("Blur1-coinage.png")} alt="" width={564} height={548} priority className="pointer-events-none absolute -left-48 top-10 w-[620px] opacity-50" />
        <Image src={img("Blur2-coinage.png")} alt="" width={525} height={554} priority className="pointer-events-none absolute -right-40 top-40 w-[620px] opacity-50" />
        <div className="pointer-events-none absolute right-[10%] top-1/3 h-[480px] w-[480px] rounded-full bg-brand/25 blur-[120px]" />

        <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left: headline + photo */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-mint backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                Always ready to help you
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-balance text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                Global <Highlight>money</Highlight> Made Simple
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="relative mt-10">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)]">
                <Image
                  src={img("WhatsApp-Image-2025-08-22-at-17.23.18_260da38b.jpg")}
                  alt="Family celebrating together"
                  fill
                  priority
                  sizes="(min-width: 1024px) 700px, 92vw"
                  className="object-cover object-[50%_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4">
                  <div className="rounded-2xl border border-white/15 bg-ink/60 px-4 py-3 backdrop-blur-md">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">Send money to</p>
                    <ul className="flex flex-wrap gap-x-4 gap-y-2">
                      {quoteCountries.map((c) => (
                        <li key={c.label} className="flex items-center gap-2">
                          <Image src={c.flag} alt="" width={100} height={100} className="h-6 w-6 rounded-full object-cover ring-2 ring-white/20" />
                          <h3 className="font-display text-sm font-semibold">{c.label}</h3>
                          {legacy && c.fee > 0 && <span className="font-display text-sm font-bold text-mint">${c.fee.toFixed(2)}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden rounded-2xl border border-white/15 bg-white/95 px-4 py-3 text-ink shadow-lift sm:block">
                    <div className="flex items-center gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="mt-1 text-sm font-semibold">Friendly Staff</p>
                    <p className="text-xs text-muted">{branches.map((b) => b.city).join(" & ")}</p>
                  </div>
                </div>
              </div>
            </Reveal>
            {legacy && (
              <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-display text-sm font-semibold text-white/80">Download The Coinage Mobile App</p>
                <div className="flex gap-3">
                  <a href="#" aria-label="Get it on Google Play" className="transition-transform hover:-translate-y-0.5">
                    <Image src={img("Google_Play_Store-New.png")} alt="Google Play" width={1120} height={358} className="h-11 w-auto" />
                  </a>
                  <a href="#" aria-label="Download on the App Store" className="transition-transform hover:-translate-y-0.5">
                    <Image src={img("Apple_App_Store-New.png")} alt="App Store" width={964} height={358} className="h-11 w-auto" />
                  </a>
                </div>
              </Reveal>
            )}
          </div>

          {/* Right: intro + converter */}
          <div className="lg:col-span-5 lg:pt-4">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-white/70">
                At Ausghan Exchange, we make it easy to send money to loved ones overseas and exchange foreign currency with
                confidence. Whether you’re supporting family abroad or managing your travel and business needs, we deliver
                competitive rates and quality service every step of the way.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/85">
                <ShieldCheck className="h-5 w-5 text-brand" />
                {site.austrac}
              </p>
            </Reveal>
            <Reveal from="right" delay={0.15} className="mt-8">
              <RateConverter variant="light" />
            </Reveal>

          </div>
        </div>

        <HeroWave />
      </section>

      <RatesTicker />

      {/* ───────────── Stats row ───────────── */}
      <section className="border-b border-line bg-white">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {homeStats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              className="border-line px-4 py-10 text-center max-lg:[&:nth-child(-n+2)]:border-b max-lg:[&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r"
            >
              <p className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                {s.to !== undefined ? <Counter to={s.to} suffix={s.suffix} /> : s.value}
              </p>
              <p className="mt-1 font-display text-base font-semibold text-brand-700">{s.label}</p>
              <p className="mt-1 text-sm text-muted">{s.sub}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── Service areas + rates ───────────── */}
      <section className="relative overflow-hidden bg-paper py-14 lg:py-20">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Exchange Rates
              </p>
              <h1 className="text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">Our Current Remittance Service Areas</h1>
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-3 sm:gap-6">
              {serviceAreaFlags.map((f, i) => (
                <Reveal key={f.name} delay={i * 0.08} className="flex flex-col items-center gap-3">
                  <span className="rounded-full bg-white p-1.5 shadow-card ring-1 ring-line transition-transform hover:scale-105">
                    <Image src={f.src} alt={f.name} width={200} height={200} className="h-14 w-14 rounded-full object-cover sm:h-20 sm:w-20" />
                  </span>
                  <span className="text-sm font-medium text-ink">{f.name}</span>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {exchangeRates.map((r) => (
              <div key={r.code} className="group rounded-3xl border border-line bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-center gap-2.5">
                  <Image src={r.flagImg} alt="" width={160} height={107} className="h-6 w-8 rounded-[4px] object-cover ring-1 ring-line" />
                  <span className="font-display text-sm font-bold text-ink">{r.code}</span>
                </div>
                <p className="mt-4 font-display text-3xl font-extrabold tabular-nums text-ink group-hover:text-brand-700">{r.rate}</p>
                <p className="mt-0.5 truncate text-xs text-muted">{r.country}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ───────────── How it works (steps from the old Send Money page) ───────────── */}
      <section className="py-14 lg:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-32">
              <Headline eyebrow="How It Works" before="Three" highlight="Simple Steps" after="to Send Money" />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {trustItems.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                    <Icon className="h-6 w-6 text-brand" />
                    <h3 className="mt-3 font-display font-bold text-ink">{title}</h3>
                    <p className="text-sm text-muted">{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <ol className="relative lg:col-span-7">
            <span className="absolute bottom-8 left-7 top-8 w-px bg-gradient-to-b from-brand via-brand/40 to-transparent" aria-hidden="true" />
            {sendSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="relative flex gap-6 pb-10 last:pb-0">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-white shadow-card">
                  <Image src={img(s.icon)} alt="" width={96} height={96} className="h-7 w-7" />
                </span>
                <div className="flex-1 rounded-3xl border border-line bg-white p-7 shadow-card transition-shadow hover:shadow-lift">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Step {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Trusted by ───────────── */}
      {legacy && (
      <section className="border-b border-line py-16">
        <div className="container-x">
          <p className="text-center font-display text-lg font-semibold text-ink">Trusted by millions of customers worldwide</p>
        </div>
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-16">
            {[...partnerLogos, ...partnerLogos].map((l, i) => (
              <Image
                key={i}
                src={img(l)}
                alt=""
                width={560}
                height={284}
                className="h-14 w-auto brightness-[0.55] contrast-150 transition duration-300 hover:scale-110 hover:brightness-[0.3]"
              />
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ───────────── Features ───────────── */}
      <section className="py-14 lg:py-20">
        <div className="container-x">
          <Reveal>
            <Headline eyebrow="Features" before="Seamless" highlight="payment" after="solutions." align="center">
              <p>Secure, convenient, and fast, way to send and receive your money.</p>
            </Headline>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <Reveal
              from="left"
              className={cn(
                "relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink to-ink-3 p-8 text-white sm:p-10",
                legacy ? "lg:col-span-6 lg:row-span-2" : "grid items-center gap-10 lg:col-span-12 lg:grid-cols-2 lg:p-16",
              )}
            >
              <div className="bg-grid-dark pointer-events-none absolute inset-0" />
              <div className="relative">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">WorldWide</h2>
                <h3 className="mt-4 max-w-md text-3xl font-bold leading-tight lg:text-4xl">Seamlessly send and receive money with Ausghan</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-white/65">
                  Easily send and receive money with us, we offer the best exchange rates for everyone, minimising disruptions
                  because we care for those whome you love.
                </p>
                {!legacy && (
                  <div className="mt-8 flex -space-x-3">
                    {serviceAreaFlags.map((f) => (
                      <Image key={f.name} src={f.src} alt={f.name} width={200} height={200} className="h-12 w-12 rounded-full object-cover ring-4 ring-ink" />
                    ))}
                  </div>
                )}
              </div>
              <Parallax speed={40}>
              <Image
                src={img("Group-55-test.png")}
                alt="Globe showing worldwide transfer routes"
                width={1316}
                height={1386}
                className={cn("animate-float relative mx-auto w-[78%] max-w-[420px]", legacy && "mt-10")}
              />
              </Parallax>
            </Reveal>
            {legacy && (
            <Reveal from="right" delay={0.1} className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-50 via-white to-paper p-8 ring-1 ring-line lg:col-span-6 lg:row-span-2">
              <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-3xl" />
              <div className="relative flex flex-wrap gap-2">
                <h2 className="rounded-full bg-ink px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-mint">Wallet App</h2>
                <h2 className="rounded-full border border-brand/25 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Statistic</h2>
              </div>
              <div className="relative mt-6 flex flex-1 items-center justify-center">
                <Image
                  src={img("wallet-coinage.png")}
                  alt="Wallet app screen"
                  width={852}
                  height={1662}
                  className="animate-float relative z-10 w-[44%] max-w-[240px] -rotate-6 drop-shadow-[0_30px_40px_rgb(6_35_28/0.35)] transition-transform duration-700 group-hover:-rotate-3"
                />
                <Image
                  src={img("statistic-coinage.png")}
                  alt="Statistics app screen"
                  width={852}
                  height={1662}
                  className="animate-float-slow relative -ml-10 mt-16 w-[44%] max-w-[240px] rotate-6 drop-shadow-[0_30px_40px_rgb(6_35_28/0.3)] transition-transform duration-700 group-hover:rotate-3 sm:-ml-14"
                />
              </div>
            </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section className="bg-paper py-14 lg:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal from="left" className="relative">
            <div className="relative mx-auto aspect-square max-w-[520px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ink to-ink-3">
              <div className="bg-grid-dark absolute inset-0" />
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/40 blur-3xl" />
              <h2 className="absolute left-8 top-8 z-10 text-sm font-semibold uppercase tracking-[0.16em] text-mint">Services</h2>
              <Parallax speed={50} className="relative h-full w-full">
              <Image
                src={img("Rehan-Upwork-1.png")}
                alt="Hand holding foreign currency notes"
                width={1000}
                height={1000}
                className="relative h-full w-full object-contain"
              />
              </Parallax>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Headline eyebrow="Our Services" before="Efficient" highlight="transactions" after="for everyone.">
                <p>Experience seamless payments and enjoy peace of mind with our robust security measures.</p>
              </Headline>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                { icon: "Transfer-money-QGP53L5.png", title: "Instant transactions", text: "Experience instant access to funds with lightning-fast transactions." },
                { icon: "Mobile-Money-Payment-QGP53L5.png", title: "Friendly Staff", text: "Friendly Staff for all the customers anytime and anywhere." },
              ].map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1} className="rounded-3xl border border-line bg-white p-7 shadow-card">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                    <Image src={img(s.icon)} alt="" width={96} height={96} className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2} className="mt-10">
              <Button href="/send-money" variant="dark">
                Send Money
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────── Reviews ───────────── */}
      <section className="py-14 lg:py-20">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal className="max-w-2xl">
              <Headline eyebrow="Review" before="Money" highlight="Transfers" after="made easy.">
                <p>Discover clients’ experiences with Ausghan Exchange.</p>
              </Headline>
            </Reveal>
            <Reveal delay={0.1}>
              <Button href={site.googleReviews} external variant="outline">
                View all Google Reviews
              </Button>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal
                key={r.name}
                delay={i * 0.1}
                className="relative flex flex-col rounded-3xl border border-line bg-white p-8 shadow-card transition-shadow hover:shadow-lift"
              >
                <Quote className="h-9 w-9 fill-brand-100 text-brand" />
                <div className="mt-5 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[17px] leading-relaxed text-ink/80">{r.text}</p>
                <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-display font-bold text-white">
                    {r.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                  <h5 className="font-display font-semibold text-ink">{r.name}</h5>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {legacy && (<>
{/* ───────────── Why choose us ───────────── */}
      <section className="relative overflow-hidden bg-ink py-14 text-white lg:py-20">
        <div className="bg-grid-dark pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <Headline eyebrow="Why Choose Us" before="Embrace the" highlight="future" after="of finance." align="center" dark>
              <p>We ensure secure, seamless, and efficient transactions.</p>
            </Headline>
          </Reveal>

          <div className="mt-10 grid items-center gap-6 lg:grid-cols-3">
            <div className="space-y-6">
              {whyCards.slice(0, 2).map((c, i) => (
                <WhyCard key={c.title} c={c} i={i} />
              ))}
            </div>
            <Reveal from="zoom" delay={0.1} className="relative mx-auto flex w-full max-w-sm flex-col items-center">
              <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-brand/40 to-transparent pt-10">
                <h2 className="absolute inset-x-0 top-6 text-center text-6xl font-extrabold uppercase tracking-tight text-white/10">Future</h2>
                <Image
                  src={img("smiling-attractive-handsome-guy-with-beard-in-tren-SRMNG7J.png")}
                  alt="Smiling customer"
                  width={408}
                  height={611}
                  className="relative mx-auto w-[85%]"
                />
              </div>
            </Reveal>
            <div className="space-y-6">
              {whyCards.slice(2).map((c, i) => (
                <WhyCard key={c.title} c={c} i={i + 2} />
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className="border-white/10 p-8 text-center [&:not(:last-child)]:border-r max-lg:[&:nth-child(2)]:border-r-0 max-lg:[&:nth-child(-n+2)]:border-b"
              >
                <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-mint">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      </>)}


      <Faq />

      {legacy && (<>
{/* ───────────── Contact Us ───────────── */}
      <section className="py-14 lg:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal from="left" className="relative order-2 lg:order-1">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem]">
              <Image
                src={img("steptodown.com500041.jpg")}
                alt="Australian dollars in a jeans pocket"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <Headline eyebrow="Contact Us" before="Let's" highlight="Get" after="In Touch With Us!">
                <p>Simplify sending and receiving your money with us.</p>
              </Headline>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                { store: "Play Store", rating: 4.5 },
                { store: "App Store", rating: 4.7 },
              ].map((s, i) => (
                <Reveal key={s.store} delay={i * 0.1} className="rounded-3xl border border-line bg-white p-7 shadow-card">
                  <h6 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">{s.store}</h6>
                  <p className="mt-3 font-display text-4xl font-extrabold text-ink">
                    <Counter to={s.rating} decimals={1} suffix="/5" />
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                    <Star className="h-4 w-4 fill-gold text-gold" /> Avg Rating
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2} className="mt-10">
              <Button href="/contact-us">Contact Us Now</Button>
            </Reveal>
          </div>
        </div>
      </section>
      </>)}

      <CtaBand text="Start your transfer instantly. No delays, no hidden fees — just fast, secure service from Australia to your loved ones." />
    </>
  )
}
