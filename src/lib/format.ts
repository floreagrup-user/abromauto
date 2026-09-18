export function formatPrice(price: number, currency: string = 'EUR'): string {
  return `${new Intl.NumberFormat('ro-RO').format(price)} ${currency}`
}

export function formatMileage(km: number): string {
  return `${new Intl.NumberFormat('ro-RO').format(km)} km`
}

export function formatVehicleTitle(v: { brand: string; model: string }): string {
  return `${v.brand} ${v.model}`
}

export function slugToLabel(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
