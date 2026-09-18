import { ShieldCheck, Gauge, FileSearch, Wallet, RefreshCw, BadgeCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Garanție 12 luni',
    desc: 'Toate mașinile vin cu garanție inclusă, cu posibilitate de extindere până la 3 ani.',
  },
  {
    icon: Gauge,
    title: 'KM certificați',
    desc: 'Kilometrajul este garantat prin factură și istoric verificabil.',
  },
  {
    icon: FileSearch,
    title: 'Raport CarVertical',
    desc: 'Inclus gratuit, cu informații despre daune, kilometraj și utilizare anterioară.',
  },
  {
    icon: BadgeCheck,
    title: 'Verificare independentă',
    desc: 'Poți verifica mașina într-un service autorizat înainte de cumpărare.',
  },
  {
    icon: Wallet,
    title: 'Finanțare rapidă',
    desc: 'Aprobare în aproximativ 30 de minute, pentru persoane fizice și juridice.',
  },
  {
    icon: RefreshCw,
    title: 'Trade-In',
    desc: 'Predai mașina veche ca avans pentru orice vehicul din stoc.',
  },
]

export function TrustBar() {
  return (
    <section className="border-b border-ink-100 bg-white py-12 sm:py-16">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-3.5 rounded-2xl p-1">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <Icon className="h-5.5 w-5.5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-ink-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
