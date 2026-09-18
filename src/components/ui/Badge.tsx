import type { ReactNode } from 'react'

type Tone = 'primary' | 'success' | 'warning' | 'neutral' | 'sold'

const tones: Record<Tone, string> = {
  primary: 'bg-primary-50 text-primary-700 ring-1 ring-inset ring-primary-200',
  success: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200',
  warning: 'bg-accent-400/15 text-accent-600 ring-1 ring-inset ring-accent-400/30',
  neutral: 'bg-ink-100 text-ink-700 ring-1 ring-inset ring-ink-200',
  sold: 'bg-ink-900 text-white',
}

export function Badge({ tone = 'neutral', children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
