import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Container className="max-w-3xl py-10 sm:py-14">
      <h1 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">{title}</h1>
      <div className="prose-legal mt-6 flex flex-col gap-5 text-sm leading-relaxed text-ink-700 [&_h2]:mt-2 [&_h2]:font-display [&_h2]:text-base [&_h2]:font-bold [&_h2]:text-ink-900 [&_li]:ml-4 [&_li]:list-disc [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5">
        {children}
      </div>
    </Container>
  )
}
