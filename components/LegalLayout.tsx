import Link from "next/link"
import { FileText, Mail } from "lucide-react"
import { site } from "@/lib/site"
import { PageHero } from "./PageHero"

export function LegalLayout({
  title,
  effective,
  toc,
  children,
}: {
  title: string
  effective?: string
  toc: { id: string; label: string }[]
  children: React.ReactNode
}) {
  return (
    <>
      <PageHero title={title} />
      <section className="py-12 lg:py-16">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-32 space-y-6">
              {effective && (
                <div className="rounded-2xl border border-line bg-paper p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    <FileText className="h-4 w-4 text-brand" /> Effective Date
                  </p>
                  <p className="mt-1.5 font-display text-lg font-semibold text-ink">{effective}</p>
                </div>
              )}
              <nav aria-label="On this page" className="hidden rounded-2xl border border-line p-5 lg:block">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">On this page</p>
                <ol className="space-y-2 text-sm">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a href={`#${t.id}`} className="text-muted transition-colors hover:text-brand-700">
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="rounded-2xl bg-ink p-5 text-white">
                <p className="text-sm text-white/70">Questions about this page?</p>
                <a href={`mailto:${site.email}`} className="mt-2 flex items-center gap-2 text-sm font-semibold hover:text-mint">
                  <Mail className="h-4 w-4 text-brand" /> {site.email}
                </a>
                <Link href="/contact-us" className="mt-3 inline-block text-sm font-semibold text-mint hover:underline">
                  Contact Us →
                </Link>
              </div>
            </div>
          </aside>
          <article className="legal max-w-3xl lg:col-span-8 xl:col-span-9">{children}</article>
        </div>
      </section>
    </>
  )
}
