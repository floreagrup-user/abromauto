import { Container } from '@/components/ui/Container'
import { company } from '@/data/company'

export function WhyUs() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">De ce AbRom Auto</span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
              Transparență, verificare, garanție, finanțare, suport
            </h2>
            <p className="mt-4 leading-relaxed text-ink-600">
              Nu vindem doar mașini — oferim siguranță, transparență și sprijin pe termen lung. Fiecare vehicul din
              stocul nostru este verificat, kilometrii sunt certificați, garanția este inclusă, iar pentru siguranța
              ta îți oferim și istoricul de service al autovehiculului.
            </p>
            <ul className="mt-6 space-y-3">
              {company.trustSignalsRealVerified.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-ink-900 p-6 text-white">
              <p className="font-display text-3xl font-extrabold">100%</p>
              <p className="mt-1 text-sm text-ink-300">Clienți mulțumiți</p>
            </div>
            <div className="rounded-2xl bg-primary-500 p-6 text-white">
              <p className="font-display text-3xl font-extrabold">12 luni</p>
              <p className="mt-1 text-sm text-primary-50">Garanție inclusă</p>
            </div>
            <div className="rounded-2xl bg-ink-100 p-6">
              <p className="font-display text-3xl font-extrabold text-ink-900">30 min</p>
              <p className="mt-1 text-sm text-ink-600">Aprobare finanțare</p>
            </div>
            <div className="rounded-2xl bg-ink-100 p-6">
              <p className="font-display text-3xl font-extrabold text-ink-900">7/7</p>
              <p className="mt-1 text-sm text-ink-600">Deschis, inclusiv weekend</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
