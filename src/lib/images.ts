import type { Vehicle, VehicleImage } from '@/types/vehicle'

const R2_MEDIA_BASE = 'https://pub-16aeb3d386794c6884faa8845533f161.r2.dev'

function pad2(n: number): string {
  return String(n).padStart(2, '0')
}

export function vehicleImages(vehicle: Pick<Vehicle, 'slug' | 'imageCount'>): VehicleImage[] {
  const base = `${R2_MEDIA_BASE}/${vehicle.slug}`
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
  const base = `${R2_MEDIA_BASE}/${vehicle.slug}`
  return {
    card: `${base}/01-card.webp`,
    ogJpg: `${base}/cover.jpg`,
  }
}
