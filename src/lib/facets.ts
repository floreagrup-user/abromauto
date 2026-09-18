import { vehicles } from '@/data/vehicles'

export const BRANDS = Array.from(new Set(vehicles.map((v) => v.brand))).sort()
export const FUELS = Array.from(new Set(vehicles.map((v) => v.fuel))).sort()
export const TRANSMISSIONS = Array.from(new Set(vehicles.map((v) => v.transmission))).sort()
export const BODY_TYPES = Array.from(
  new Set(vehicles.map((v) => v.bodyType).filter((b): b is string => Boolean(b))),
).sort()

export const PRICE_MIN = Math.min(...vehicles.map((v) => v.price))
export const PRICE_MAX = Math.max(...vehicles.map((v) => v.price))
export const YEAR_MIN = Math.min(...vehicles.map((v) => v.year))
export const YEAR_MAX = Math.max(...vehicles.map((v) => v.year))

export function modelsForBrand(brand: string): string[] {
  return Array.from(new Set(vehicles.filter((v) => v.brand === brand).map((v) => v.model))).sort()
}
