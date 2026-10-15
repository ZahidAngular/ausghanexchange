import Image from "next/image"
import { contactIcons } from "@/lib/site"
import { cn } from "@/lib/utils"

type Branch = { city: string; phone: string; tel: string; address: string; hours: string }

export function BranchCard({ branch, className }: { branch: Branch; className?: string }) {
  const rows = [
    { icon: contactIcons.call, label: "Calls us", value: branch.phone, href: `tel:${branch.tel}` },
    { icon: contactIcons.hours, label: "Opening Hour", value: branch.hours },
    { icon: contactIcons.meet, label: "Meet us", value: branch.address },
  ]
  return (
    <div className={cn("rounded-3xl border border-line bg-white p-7 shadow-card sm:p-8", className)}>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-ink">{branch.city}</h2>
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">Branch</span>
      </div>
      <ul className="space-y-5">
        {rows.map((r) => {
          const body = (
            <>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-paper">
                <Image src={r.icon} alt="" width={96} height={96} className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">{r.label}</span>
                <span className="mt-1 block font-display text-[17px] font-semibold text-ink">{r.value}</span>
              </span>
            </>
          )
          return (
            <li key={r.label}>
              {r.href ? (
                <a href={r.href} className="flex items-center gap-4 transition-opacity hover:opacity-80">
                  {body}
                </a>
              ) : (
                <div className="flex items-center gap-4">{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
