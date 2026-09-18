import { company } from '@/data/company'
import { formatVehicleTitle } from '@/lib/format'
import type { Vehicle } from '@/types/vehicle'

export function whatsappLink(message: string): string {
  return `${company.whatsapp.link}?text=${encodeURIComponent(message)}`
}

export function whatsappForVehicle(vehicle: Vehicle): string {
  const title = formatVehicleTitle(vehicle)
  return whatsappLink(`Bună ziua, sunt interesat de ${title}. Mai este disponibil?`)
}

export function whatsappGeneric(): string {
  return whatsappLink('Bună ziua, aș avea o întrebare despre o mașină de la AbRom Auto.')
}
