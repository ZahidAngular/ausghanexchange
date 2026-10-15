import Image from "next/image"
import { img } from "@/lib/site"
import { Button } from "./Button"
import { Headline } from "./Headline"
import { Reveal } from "./Reveal"

export function CtaBand({
  text,
  buttonLabel = "Contact Us Now",
  buttonHref = "/contact-us",
}: {
  text: string
  buttonLabel?: string
  buttonHref?: string
}) {
  return (
    <section className="container-x py-12 lg:py-16">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 sm:px-12 lg:px-20 lg:py-20">
        <Image
          src={img("jakub-zerdzicki-LgE3whpa5VA-unsplash.jpg")}
          alt=""
          fill
          sizes="(min-width: 1240px) 1240px, 100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <Headline eyebrow="Contact Us" highlight="Ready" after="to Send Money Today?" dark className="max-w-2xl">
            <p>{text}</p>
          </Headline>
          <Button href={buttonHref} className="shrink-0 px-8 py-4 text-base">
            {buttonLabel}
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
