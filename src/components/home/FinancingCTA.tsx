import { Calculator, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'

export function FinancingCTA() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-primary-500 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
              <Calculator className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                Calculează rata pentru mașina ta
              </h2>
              <p className="mt-1.5 max-w-lg text-primary-50">
                Aprobare rapidă, în aproximativ 30 de minute, pentru persoane fizice și juridice. Simulare orientativă,
                fără obligații.
              </p>
            </div>
          </div>
          <LinkButton to="/finantare/" variant="white" icon={<ArrowRight className="h-4 w-4" />}
            className="shrink-0">
            Simulează rata
          </LinkButton>
        </div>
      </Container>
    </section>
  )
}
