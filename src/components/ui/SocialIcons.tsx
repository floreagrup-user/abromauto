import type { SVGProps } from 'react'

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.3C16.1 4.25 14.9 4 13.5 4c-2.9 0-4.5 1.7-4.5 4.3V10.5H6.5v3h2.5V21h4.5z" />
    </svg>
  )
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 3c.4 2.1 1.8 3.6 4 3.9v2.6c-1.5.05-2.9-.4-4-1.2v6.2c0 3.1-2.5 5.5-5.6 5.5S5.3 17.6 5.3 14.5c0-3 2.4-5.5 5.4-5.5.35 0 .7.03 1 .1v2.7a2.8 2.8 0 0 0-1-.2c-1.5 0-2.7 1.2-2.7 2.9s1.2 2.9 2.7 2.9 2.8-1.2 2.8-2.9V3h3z" />
    </svg>
  )
}
