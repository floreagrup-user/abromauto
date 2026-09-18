import { ShieldCheck, Gauge, FileSearch, ClipboardCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { useDocumentHead } from '@/hooks/useDocumentHead'

const VALUES = [
  {
    title: 'Transparență',
    desc: 'Orice detaliu estetic sau tehnic cunoscut este comunicat deschis înainte de achiziție.',
  },
  {
    title: 'Integritate',
    desc: 'Ne respectăm promisiunile. Prețurile noastre sunt corecte, iar angajamentele luate sunt întotdeauna onorate.',
  },
  {
    title: 'Relații pe termen lung',
    desc: 'Nu căutăm tranzacții rapide. Construim relații de încredere care durează.',
  },
]

const TRUST = [
  { icon: ShieldCheck, title: 'Garanție 12 luni', desc: 'Toate mașinile vin cu garanție inclusă, cu posibilitate de extindere până la 3 ani.' },
  { icon: Gauge, title: 'KM certificați', desc: 'Garantați prin factură și istoric verificabil.' },
  { icon: FileSearch, title: 'Transparență totală', desc: 'Raport CarVertical inclus gratuit pentru informații despre daune, kilometraj și utilizare anterioară.' },
  { icon: ClipboardCheck, title: 'Istoric de service verificabil', desc: 'Informații clare privind întreținerea și intervențiile anterioare.' },
]

export default function About() {
  useDocumentHead({
    title: 'Despre noi',
    description: 'AbRom Auto construiește relații de încredere cu clienții săi. Nu vindem doar mașini — oferim siguranță, transparență și sprijin pe termen lung.',
    canonicalPath: '/despre-noi/',
  })

  return (
    <>
      <section className="bg-ink-900 py-14 text-white sm:py-20">
        <Container className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-400">Despre noi</span>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Mai mult decât o afacere.</h1>
          <p className="mt-4 text-ink-300">
            AbRom Auto construiește relații de încredere cu clienții săi. Nu vindem doar mașini — oferim siguranță,
            transparență și sprijin pe termen lung.
          </p>
        </Container>
      </section>

      <Container className="max-w-3xl py-14 sm:py-20">
        <h2 className="font-display text-2xl font-extrabold text-ink-900">Începuturi modeste, viziune ambițioasă</h2>
        <div className="mt-5 flex flex-col gap-4 text-[15px] leading-relaxed text-ink-700">
          <p>
            AbRom Auto a luat naștere din pasiunea pentru automobile și dorința de a schimba percepția asupra pieței
            auto second-hand din România. Am început cu câteva mașini și un angajament ferm: fiecare client merită
            să știe exact ce cumpără.
          </p>
          <p>
            Suntem la început de drum, dar construim acest proiect pe principii clare: transparență, seriozitate și
            respect față de client. Nu promitem perfecțiunea, însă ne asumăm responsabilitatea de a ne ridica la
            standardele și așteptările celor care aleg să cumpere de la noi.
          </p>
          <p>
            Credem că încrederea se câștigă prin fapte, nu prin promisiuni, iar fiecare mașină livrată este un pas
            înainte în consolidarea acestui angajament. Fiecare vehicul din stocul nostru este verificat, kilometrii
            sunt certificați, garanția este inclusă, iar pentru siguranța ta îți oferim și istoricul de service al
            autovehiculului.
          </p>
          <p>
            Nu ne oprim doar la vânzare. Serviciul Buy-Back este disponibil pentru autovehiculele achiziționate de
            la noi, în condițiile stabilite contractual. Este angajamentul nostru față de încrederea ta și dorința
            de a construi relații corecte pe termen lung.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl bg-ink-50 p-5">
              <h3 className="font-display text-sm font-bold text-ink-900">{v.title}</h3>
              <p className="mt-1.5 text-sm text-ink-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-ink-50 py-14 sm:py-20">
        <Container>
          <h2 className="text-center font-display text-2xl font-extrabold text-ink-900">Ce ne ghidează în fiecare zi</h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:grid-cols-2">
            {TRUST.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3.5 rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-100">
                <Icon className="h-6 w-6 shrink-0 text-primary-600" />
                <div>
                  <h3 className="font-display text-sm font-bold text-ink-900">{title}</h3>
                  <p className="mt-1 text-sm text-ink-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <LinkButton to="/stoc-auto/">Vezi mașinile disponibile</LinkButton>
          </div>
        </Container>
      </section>
    </>
  )
}
