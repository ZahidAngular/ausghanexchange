"use client"
import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { site } from "@/lib/site"

export const fieldCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-muted/60 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
export const labelCls = "mb-2 block text-sm font-semibold text-ink"

/**
 * Same fields as the old Elementor form. There is no mail backend yet, so submitting
 * opens the visitor's email app with the message addressed to the business inbox.
 */
export function ContactForm({ withSubject = false }: { withSubject?: boolean }) {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const subject = (withSubject && String(d.get("subject") || "")) || `Website enquiry from ${d.get("name")}`
    const body = [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Email: ${d.get("email")}`,
      withSubject ? `Subject: ${d.get("subject")}` : null,
      "",
      String(d.get("message") || ""),
    ]
      .filter((l) => l !== null)
      .join("\n")
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="cf-name" className={labelCls}>
          Name
        </label>
        <input id="cf-name" name="name" type="text" required placeholder="Ex: Alex Worker" className={fieldCls} />
      </div>
      <div>
        <label htmlFor="cf-phone" className={labelCls}>
          Phone
        </label>
        <input id="cf-phone" name="phone" type="tel" placeholder="Ex: +02212 - 122" className={fieldCls} />
      </div>
      <div>
        <label htmlFor="cf-email" className={labelCls}>
          Email
        </label>
        <input id="cf-email" name="email" type="email" required placeholder="Ex: yourmail@gmail.com" className={fieldCls} />
      </div>
      {withSubject && (
        <div className="sm:col-span-2">
          <label htmlFor="cf-subject" className={labelCls}>
            Subject
          </label>
          <input id="cf-subject" name="subject" type="text" placeholder="Ex: Your Subject" className={fieldCls} />
        </div>
      )}
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className={labelCls}>
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          placeholder="Write your message or question here"
          className={`${fieldCls} resize-none`}
        />
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(31_169_53/0.7)] transition-colors hover:bg-brand-600"
        >
          Get started
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        {sent && (
          <p className="flex items-center gap-2 text-sm text-brand-700" role="status">
            <CheckCircle2 className="h-4 w-4" /> Your email app has opened with your message ready to send.
          </p>
        )}
      </div>
    </form>
  )
}
