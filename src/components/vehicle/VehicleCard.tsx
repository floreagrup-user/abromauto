import { Link } from 'react-router-dom'
import { Heart, Gauge, Fuel, Settings2, ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { formatPrice, formatMileage, formatVehicleTitle } from '@/lib/format'
import { vehicleCover } from '@/lib/images'
import { useFavorites } from '@/hooks/useFavorites'
import type { Vehicle } from '@/types/vehicle'

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const cover = vehicleCover(vehicle)
  const fav = isFavorite(vehicle.slug)
  const isSold = vehicle.status === 'sold'

  return (
    <Link
      to={`/${vehicle.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-100 transition-shadow hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
        <img
          src={cover.card}
          alt={formatVehicleTitle(vehicle)}
          loading="lazy"
          decoding="async"
          width={720}
          height={540}
          className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            isSold ? 'grayscale-[35%]' : ''
          }`}
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {vehicle.featured && vehicle.status === 'available' && <Badge tone="primary">Recomandat</Badge>}
          {vehicle.badge === 'Vândut' && <Badge tone="sold">Vândut</Badge>}
          {vehicle.badge === 'Disponibil în curând' && <Badge tone="warning">Sosește în curând</Badge>}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            toggleFavorite(vehicle.slug)
          }}
          aria-label={fav ? 'Elimină din favorite' : 'Salvează la favorite'}
          aria-pressed={fav}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-700 shadow-sm hover:bg-white"
        >
          <Heart className={`h-4.5 w-4.5 ${fav ? 'fill-primary-500 text-primary-500' : ''}`} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-display text-base font-bold leading-tight text-ink-900">
            {vehicle.brand} {vehicle.model}
          </h3>
        </div>

        <p className="font-display text-xl font-extrabold text-ink-900">
          {formatPrice(vehicle.price, vehicle.currency)}
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[13px] text-ink-600">
          <span className="inline-flex items-center gap-1">
            <Gauge className="h-3.5 w-3.5 text-ink-400" /> {vehicle.year}
          </span>
          <span className="inline-flex items-center gap-1">
            <Settings2 className="h-3.5 w-3.5 text-ink-400" /> {formatMileage(vehicle.mileage)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Fuel className="h-3.5 w-3.5 text-ink-400" /> {vehicle.fuel}
          </span>
          <span>{vehicle.transmission}</span>
        </div>

        <div className="mt-auto flex items-center gap-1.5 border-t border-ink-100 pt-3 text-xs font-medium text-emerald-700">
          <ShieldCheck className="h-4 w-4" /> Istoric verificat · Garanție 12 luni
        </div>
      </div>
    </Link>
  )
}
