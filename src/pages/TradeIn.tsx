import { Car, ClipboardCheck, KeyRound, PartyPopper } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { LeadForm } from '@/components/vehicle/LeadForm'
import { useDocumentHead } from '@/hooks/useDocumentHead'

const STEPS = [
  { icon: Car, title: 'Aduci mașina', desc: 'Vino la showroom cu mașina ta pentru evaluare.' },
  { icon: ClipboardCheck, title: 'Evaluare gratuită', desc: 'Experții noștri îți oferă o evaluare corectă și transparentă.' },
  { icon: KeyRound, title: 'Alegi mașina nouă', desc: 'Selectezi vehiculul dorit din stocul nostru.' },
  { icon: PartyPopper, title: 'Pleci cu ea', desc: 'Finalizăm actele și pleci cu mașina ta nouă.' },
]

const BENEFITS = [
  'Evaluare gratuită fără obligații',
  'Preț corect bazat pe piață',
  'Folosești valoarea ca avans',
  'Proces rapid — finalizăm în aceeași zi',
  'Scapi de bătăile de cap cu vânzarea',
  'Noi ne ocupăm de toate actele',
]

const STATS = [
  { value: '30 min', label: 'Evaluare rapidă' },
  { value: '100%', label: 'Fără costuri ascunse' },
  { value: '10+', label: 'Mașini disponibile pentru schimb' },
]

export default function TradeIn() {
  useDocumentHead({
    title: 'Trade-In — schimbă mașina veche',
    description: 'Îți evaluăm mașina la prețul corect și o folosești ca avans pentru orice vehicul din stocul AbRom Auto.',
    canonicalPath: '/trade-in/',
  })

  return (
    <>
      <section className="bg-ink-900 py-14 text-white sm:py-20">
        <Container className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-400">Serviciu Trade-In</span>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            Schimbă mașina veche cu una nouă
          </h1>
          <p className="mt-4 text-ink-300">
            Îți evaluăm mașina la prețul corect și o folosești ca avans pentru orice vehicul din stocul nostru.
            Procesul este rapid și transparent.
          </p>
          <div className="mt-6">
            <LinkButton to="#evaluare">Solicitare evaluare gratuită</LinkButton>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-ink-100 p-5">
              <Icon className="h-6 w-6 text-primary-600" />
              <h3 className="mt-3 font-display text-sm font-bold text-ink-900">{title}</h3>
              <p className="mt-1 text-sm text-ink-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl bg-ink-50 p-6">
            <h2 className="font-display text-lg font-bold text-ink-900">Beneficii</h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink-700">
              {BENEFITS.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center rounded-2xl bg-primary-50 p-5 text-center">
                <span className="font-display text-2xl font-extrabold text-primary-700">{s.value}</span>
                <span className="mt-1 text-xs text-primary-700">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="evaluare" className="mx-auto mt-14 max-w-lg rounded-2xl border border-ink-100 p-6">
          <h2 className="font-display text-lg font-bold text-ink-900">Pregătit pentru schimbare?</h2>
          <p className="mt-1.5 text-sm text-ink-600">
            Contactează-ne pentru o evaluare gratuită a mașinii tale. Procesul este rapid, transparent și fără
            obligații.
          </p>
          <div className="mt-4">
            <LeadForm kind="trade-in" submitLabel="Solicită evaluare" />
          </div>
          <div className="mt-4 text-center">
            <LinkButton to="/stoc-auto/" variant="ghost" size="sm">Vezi stocul</LinkButton>
          </div>
        </div>
      </Container>
    </>
  )
}
