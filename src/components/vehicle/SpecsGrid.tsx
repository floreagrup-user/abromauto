import { formatMileage } from '@/lib/format'
import type { Vehicle } from '@/types/vehicle'

export function SpecsGrid({ vehicle }: { vehicle: Vehicle }) {
  const rows: [string, string | number | null | undefined][] = [
    ['An fabricație', vehicle.firstRegistration ?? vehicle.year],
    ['Kilometraj', formatMileage(vehicle.mileage)],
    ['Combustibil', vehicle.fuel],
    ['Transmisie', vehicle.transmission],
    ['Caroserie', vehicle.bodyType],
    ['Capacitate motor', vehicle.engineCC ? `${vehicle.engineCC} cmc` : null],
    ['Putere', vehicle.powerCP ? `${vehicle.powerCP} CP` : null],
    ['Culoare', vehicle.color],
  ]

  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-100 ring-1 ring-ink-100 sm:grid-cols-4">
      {rows
        .filter(([, value]) => value !== null && value !== undefined && value !== '')
        .map(([label, value]) => (
          <div key={label} className="bg-white p-4">
            <dt className="text-xs text-ink-500">{label}</dt>
            <dd className="mt-1 font-semibold text-ink-900">{value}</dd>
          </div>
        ))}
    </dl>
  )
}
