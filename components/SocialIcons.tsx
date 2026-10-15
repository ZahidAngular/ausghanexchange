import { socials } from "@/lib/site"

const paths: Record<string, string> = {
  Facebook:
    "M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z",
  Twitter:
    "M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.2 4.7H5.4l11.3 14.5z",
  Youtube:
    "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z",
  Linkedin:
    "M6.9 8.9H3.6V20h3.3V8.9zM5.2 3.6a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 13.6c0-3-1.6-4.9-4.2-4.9-1.5 0-2.5.8-2.9 1.6V8.9h-3.2V20h3.3v-5.5c0-1.5.3-2.9 2.1-2.9s1.8 1.7 1.8 3V20h3.3l-.2-6.4z",
}

export function SocialIcons() {
  return (
    <ul className="flex gap-2.5">
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            aria-label={s.label}
            title={s.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
              <path d={paths[s.label]} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
