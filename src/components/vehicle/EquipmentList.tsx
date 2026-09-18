import { useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import type { Vehicle } from '@/types/vehicle'

export function EquipmentList({ equipment }: { equipment: Vehicle['equipment'] }) {
  const categories = Object.entries(equipment).filter(([, items]) => items.length > 0)
  const [open, setOpen] = useState<string | null>(categories[0]?.[0] ?? null)

  if (categories.length === 0) return null

  return (
    <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100">
      {categories.map(([category, items]) => {
        const isOpen = open === category
        return (
          <div key={category}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : category)}
              className="flex w-full items-center justify-between px-4 py-3.5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-ink-900">{category}</span>
              <span className="flex items-center gap-2 text-sm text-ink-500">
                {items.length}
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </span>
            </button>
            {isOpen && (
              <ul className="grid gap-2 px-4 pb-4 sm:grid-cols-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}
