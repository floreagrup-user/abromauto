import { RefreshCw, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'

export function TradeInCTA() {
  return (
    <section className="bg-ink-50 py-14 sm:py-20">
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink-100 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-400/15 text-accent-600">
              <RefreshCw className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold text-ink-900 sm:text-2xl">
                Vrei să îți evaluăm mașina?
              </h2>
              <p className="mt-1.5 max-w-lg text-ink-600">
                Evaluare gratuită, preț corect bazat pe piață — folosești valoarea ca avans pentru orice mașină din
                stocul nostru.
              </p>
            </div>
          </div>
          <LinkButton to="/trade-in/" icon={<ArrowRight className="h-4 w-4" />} className="shrink-0">
            Solicită evaluare
          </LinkButton>
        </div>
      </Container>
    </section>
  )
}
