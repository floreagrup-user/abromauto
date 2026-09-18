import { useMemo, useState } from 'react'
import { Info } from 'lucide-react'
import { formatPrice } from '@/lib/format'

// Illustrative rate only — the source site publishes no real APR/interest
// figure anywhere, so this is explicitly labeled as an orientative simulation,
// never presented as an actual AbRom Auto offer.
const ILLUSTRATIVE_ANNUAL_RATE = 9.9

export function FinancingEstimate({ price, currency = 'EUR' }: { price: number; currency?: string }) {
  const [downPaymentPct, setDownPaymentPct] = useState(15)
  const [months, setMonths] = useState(48)

  const monthly = useMemo(() => {
    const principal = price * (1 - downPaymentPct / 100)
    const r = ILLUSTRATIVE_ANNUAL_RATE / 100 / 12
    const payment = (principal * r) / (1 - Math.pow(1 + r, -months))
    return Math.round(payment)
  }, [price, downPaymentPct, months])

  return (
    <div className="rounded-2xl border border-ink-100 bg-ink-50 p-5">
      <h3 className="font-display text-base font-bold text-ink-900">Simulează rata lunară</h3>

      <div className="mt-4 flex flex-col gap-4">
        <div>
          <div className="flex justify-between text-sm text-ink-600">
            <span>Avans</span>
            <span className="font-semibold text-ink-900">{downPaymentPct}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={50}
            step={5}
            value={downPaymentPct}
            onChange={(e) => setDownPaymentPct(Number(e.target.value))}
            className="mt-1 w-full accent-primary-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm text-ink-600">
            <span>Perioadă</span>
            <span className="font-semibold text-ink-900">{months} luni</span>
          </div>
          <input
            type="range"
            min={12}
            max={60}
            step={6}
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="mt-1 w-full accent-primary-500"
          />
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-white p-4 text-center ring-1 ring-ink-100">
        <p className="text-xs text-ink-500">Rată lunară estimată</p>
        <p className="font-display text-2xl font-extrabold text-ink-900">
          ~{formatPrice(monthly, currency)}<span className="text-sm font-medium text-ink-500">/lună</span>
        </p>
      </div>

      <p className="mt-3 flex gap-1.5 text-xs leading-relaxed text-ink-500">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        Simulare orientativă, nu reprezintă o ofertă fermă. Dobânda reală depinde de profilul financiar și de
        partenerul de finanțare. Pentru o ofertă personalizată, contactează-ne.
      </p>
    </div>
  )
}
