import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, ShieldCheck } from "lucide-react"
import { img, site } from "@/lib/site"
import { cn } from "@/lib/utils"
import { RatesTicker } from "./RatesTicker"

/** Curved bottom edge shared by the dark heroes. */
export function HeroWave({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full text-white lg:h-28", className)}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-cut-band" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#1fa935">
            <animate attributeName="stop-color" values="#1fa935;#77d1bc;#1fa935" dur="8s" repeatCount="indefinite" />
          </stop>
          <stop offset="55%" stopColor="#77d1bc">
            <animate attributeName="stop-color" values="#77d1bc;#319b88;#77d1bc" dur="8s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#1fa935" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Gradient band peeking above the step, like a ribbon */}
      <path d="M0 120 L0 18 L 760 18 C 830 18, 850 84, 930 84 L1440 84 L1440 120 Z" fill="url(#hero-cut-band)" opacity="0.9">
        <animate
          attributeName="d"
          dur="9s"
          repeatCount="indefinite"
          values="M0 120 L0 18 L 760 18 C 830 18, 850 84, 930 84 L1440 84 L1440 120 Z;M0 120 L0 10 L 800 10 C 870 10, 890 80, 970 80 L1440 80 L1440 120 Z;M0 120 L0 18 L 760 18 C 830 18, 850 84, 930 84 L1440 84 L1440 120 Z"
        />
      </path>
      {/* White step cut */}
      <path d="M0 120 L0 46 L 720 46 C 800 46, 820 120, 910 120 Z" fill="currentColor" />
      <path d="M0 120 L1440 120 L1440 112 L 900 112 Z" fill="currentColor" />
    </svg>
  )
}

/** Inner-page banner: dark hero with optional right-hand card, curved edge and the rates ticker underneath. */
export function PageHero({
  title,
  intro,
  crumb,
  aside,
  children,
}: {
  title: string
  intro?: string
  crumb?: string
  aside?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-28 pb-20 text-white lg:pt-40 lg:pb-28">
        <Image src={img("Texture12-HPJPBQ-test.png")} alt="" fill sizes="100vw" className="object-cover opacity-[0.07] mix-blend-screen" />
        <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <Image
          src={img("Blur1-coinage.png")}
          alt=""
          width={564}
          height={548}
          className="pointer-events-none absolute -left-40 -top-24 w-[520px] opacity-40"
        />
        <Image
          src={img("Blur2-coinage.png")}
          alt=""
          width={525}
          height={554}
          className="pointer-events-none absolute -right-40 -bottom-48 w-[520px] opacity-40"
        />
        <div className="pointer-events-none absolute right-[8%] top-1/3 h-[420px] w-[420px] rounded-full bg-brand/25 blur-[110px]" />
        {!aside && (
          <Image
            src={img("Group-55-test.png")}
            alt=""
            width={1316}
            height={1386}
            className="animate-float pointer-events-none absolute -right-16 top-24 hidden w-[440px] opacity-25 lg:block xl:right-[4%]"
          />
        )}

        <div className={cn("container-x relative", aside && "grid items-center gap-12 lg:grid-cols-12 lg:gap-10")}>
          <div className={aside ? "lg:col-span-7" : undefined}>
            <nav
              aria-label="Breadcrumb"
              className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 backdrop-blur"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-mint">{crumb ?? title}</span>
            </nav>
            <h1 className="max-w-3xl bg-gradient-to-br from-white via-white to-mint bg-clip-text text-5xl font-extrabold leading-[1.05] text-transparent sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>}
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-brand" />
                {site.austrac}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Clock className="h-4 w-4 text-brand" />
                {site.hours}
              </span>
            </div>
            {children}
          </div>
          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
        <HeroWave />
      </section>
      <RatesTicker />
    </>
  )
}
