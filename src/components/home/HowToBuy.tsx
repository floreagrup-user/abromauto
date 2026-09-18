import { Container } from '@/components/ui/Container'

const STEPS = [
  { n: '01', title: 'Alegi mașina', desc: 'Explorezi stocul și găsești vehiculul potrivit pentru tine.' },
  { n: '02', title: 'O verifici', desc: 'Consulți raportul CarVertical și istoricul de service disponibil.' },
  { n: '03', title: 'Faci test drive', desc: 'Programezi un test drive la showroom, în Alba Iulia.' },
  { n: '04', title: 'Alegi finanțarea', desc: 'Plată integrală, rate pentru persoane fizice sau leasing pentru firme.' },
  { n: '05', title: 'Semnezi actele', desc: 'Ne ocupăm de documentele pentru înmatriculare.' },
  { n: '06', title: 'Pleci cu mașina', desc: 'Posibilitate de plecare cu mașina chiar în ziua plății.' },
]

export function HowToBuy() {
  return (
    <section className="bg-ink-50 py-14 sm:py-20">
      <Container>
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">Cum cumperi</span>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
            Un proces simplu, de la interes la contract
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.n} className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-100">
              <span className="font-display text-2xl font-extrabold text-primary-200">{step.n}</span>
              <h3 className="mt-2 font-display text-base font-bold text-ink-900">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
