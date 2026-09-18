import { useState } from 'react'
import { Zap, Clock3, Wallet, FileText, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { FinancingEstimate } from '@/components/vehicle/FinancingEstimate'
import { LeadForm } from '@/components/vehicle/LeadForm'
import { useDocumentHead } from '@/hooks/useDocumentHead'

const BENEFITS = [
  { icon: Zap, title: 'Aprobare rapidă', desc: 'Răspuns în maximum 24 de ore.' },
  { icon: Clock3, title: 'Rate flexibile', desc: 'Perioadă de 12 până la 60 de luni.' },
  { icon: Wallet, title: 'Avans accesibil', desc: 'Avans minim accesibil pentru oricine.' },
  { icon: FileText, title: 'Documente simple', desc: 'Doar buletinul și dovada venitului (la cerere).' },
]

const STEPS = [
  { n: '1', title: 'Alege mașina', desc: 'Explorează stocul nostru și găsește vehiculul potrivit.' },
  { n: '2', title: 'Trimite cererea', desc: 'Completezi un formular simplu și primești răspuns rapid.' },
  { n: '3', title: 'Semnezi și pleci', desc: 'Finalizăm actele și pleci acasă cu mașina ta nouă.' },
]

export default function Financing() {
  const [price, setPrice] = useState(15000)

  useDocumentHead({
    title: 'Finanțare auto — rate accesibile',
    description: 'Finanțare rapidă cu aprobare în 24 de ore. Avans flexibil, rate lunare adaptate bugetului tău, pentru persoane fizice și juridice.',
    canonicalPath: '/finantare/',
  })

  return (
    <>
      <section className="bg-ink-900 py-14 text-white sm:py-20">
        <Container>
          <h1 className="max-w-2xl font-display text-3xl font-extrabold sm:text-4xl">
            Finanțare — mașina ta, în rate accesibile
          </h1>
          <p className="mt-4 max-w-xl text-ink-300">
            Finanțare rapidă cu aprobare în 24 de ore. Avans flexibil, dobândă competitivă și rate lunare adaptate
            bugetului tău.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton to="/stoc-auto/">Alege mașina</LinkButton>
            <LinkButton to="#calculator" variant="outlineOnDark">
              Calculează rata
            </LinkButton>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-ink-100 p-5">
              <Icon className="h-6 w-6 text-primary-600" />
              <h3 className="mt-3 font-display text-base font-bold text-ink-900">{title}</h3>
              <p className="mt-1 text-sm text-ink-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-100 p-6">
            <h2 className="font-display text-xl font-bold text-ink-900">Credit auto — persoane fizice</h2>
            <h3 className="mt-4 text-sm font-semibold text-ink-500">Condiții de eligibilitate</h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink-700">
              <li>Vârsta între 18 și 70 de ani.</li>
              <li>Minimum 3 luni vechime la actualul angajator și cel puțin 1 an experiență în câmpul muncii.</li>
              <li>Pensionari eligibili, cu vârsta de maximum 70 de ani.</li>
            </ul>
            <h3 className="mt-4 text-sm font-semibold text-ink-500">Beneficii</h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink-700">
              <li>Avans 0% (nu este obligatoriu).</li>
              <li>Perioadă de finanțare între 12 și 60 de luni, cu rate fixe.</li>
              <li>Dobândă flexibilă, stabilită în funcție de profilul financiar.</li>
              <li>Posibilitate de rambursare anticipată.</li>
              <li>Aprobare rapidă, în aproximativ 30 de minute.</li>
              <li>Finanțăm și persoane cu venituri obținute în afara României.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-ink-100 p-6">
            <h2 className="font-display text-xl font-bold text-ink-900">Leasing auto — persoane juridice</h2>
            <h3 className="mt-4 text-sm font-semibold text-ink-500">Condiții generale</h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink-700">
              <li>Societăți comerciale, PFA, II sau IF.</li>
              <li>Documente financiare conforme (în funcție de vechimea firmei).</li>
              <li>Analiză de eligibilitate realizată împreună cu partenerii financiari.</li>
            </ul>
            <h3 className="mt-4 text-sm font-semibold text-ink-500">Avans</h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink-700">
              <li>De la 15% pentru societăți cu istoric financiar.</li>
              <li>De la 30% pentru firme nou-înființate (mașini de maximum 5 ani).</li>
            </ul>
            <h3 className="mt-4 text-sm font-semibold text-ink-500">Beneficii</h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink-700">
              <li>Perioadă de finanțare flexibilă (12–60 luni).</li>
              <li>Rate fixe sau personalizate, în funcție de ofertă.</li>
              <li>Posibilitate de rambursare anticipată.</li>
              <li>Răspuns rapid privind aprobarea finanțării.</li>
            </ul>
          </div>
        </div>

        <div id="calculator" className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-xl font-bold text-ink-900">Cum funcționează</h2>
            <div className="mt-5 flex flex-col gap-4">
              {STEPS.map((step) => (
                <div key={step.n} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-500 font-display text-sm font-bold text-white">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-ink-900">{step.title}</h3>
                    <p className="text-sm text-ink-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-3 flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-ink-500">Prețul mașinii (€)</span>
              <input
                type="number"
                min={0}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value) || 0)}
                className="rounded-lg border border-ink-200 px-3 py-2.5 text-sm"
              />
            </label>
            <FinancingEstimate price={price} />
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-ink-50 p-8 sm:p-10">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="font-display text-2xl font-extrabold text-ink-900">Gata să începi?</h2>
            <p className="mt-2 text-ink-600">
              Alege mașina preferată din stocul nostru și calculează rata lunară direct pe pagina produsului. Sau
              contactează-ne pentru o ofertă personalizată.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <LinkButton to="/stoc-auto/" icon={<ArrowRight className="h-4 w-4" />}>Vezi stocul</LinkButton>
              <LinkButton to="/contact/" variant="outline">Contactează-ne</LinkButton>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-lg rounded-2xl border border-ink-100 p-6">
          <h2 className="font-display text-lg font-bold text-ink-900">Cere ofertă personalizată</h2>
          <div className="mt-4">
            <LeadForm kind="financing" submitLabel="Cere Ofertă Personalizată" />
          </div>
        </div>
      </Container>
    </>
  )
}
