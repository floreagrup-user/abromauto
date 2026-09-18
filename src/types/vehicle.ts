export type FuelType = 'Benzină' | 'Diesel' | 'Electric' | 'Hibrid' | 'Hibrid Plug-in' | 'GPL'

export type TransmissionType = 'Manuală' | 'Automată'

export type VehicleStatus = 'available' | 'reserved' | 'sold' | 'coming-soon'

export type EquipmentCategory =
  | 'Audio și tehnologie'
  | 'Confort și echipamente opționale'
  | 'Electronice și sisteme de asistență'
  | 'Performanță'
  | 'Siguranță'

export type Equipment = Partial<Record<EquipmentCategory, string[]>>

export interface Vehicle {
  slug: string
  legacyUrl: string
  brand: string
  model: string
  title: string
  badge?: string | null

  price: number
  priceExcludingVAT?: number | null
  currency: 'EUR'
  priceExcludesVAT: boolean

  year: number
  /** Original "MM.YYYY" first-registration string when the source only published that, else null. */
  firstRegistration?: string | null
  mileage: number

  fuel: string
  transmission: string
  engineCC?: string | null
  powerCP?: string | null
  color?: string | null
  vin?: string | null

  status: VehicleStatus
  featured?: boolean
  bodyType?: string | null

  description: string
  equipment: Equipment

  imageCount: number
}

export interface VehicleImage {
  thumb: string
  card: string
  detail: string
}
