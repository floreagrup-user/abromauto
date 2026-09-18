import type { Vehicle, VehicleImage } from '@/types/vehicle'

function pad2(n: number): string {
  return String(n).padStart(2, '0')
}

export function vehicleImages(vehicle: Pick<Vehicle, 'slug' | 'imageCount'>): VehicleImage[] {
  const base = `/images/vehicles/${vehicle.slug}`
  return Array.from({ length: vehicle.imageCount }, (_, i) => {
    const n = pad2(i + 1)
    return {
      thumb: `${base}/${n}-thumb.webp`,
      card: `${base}/${n}-card.webp`,
      detail: `${base}/${n}-detail.webp`,
    }
  })
}

export function vehicleCover(vehicle: Pick<Vehicle, 'slug'>): { card: string; ogJpg: string } {
  return {
    card: `/images/vehicles/${vehicle.slug}/01-card.webp`,
    ogJpg: `/images/vehicles/${vehicle.slug}/cover.jpg`,
  }
}
