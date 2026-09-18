import { company } from '@/data/company'
import { formatVehicleTitle } from '@/lib/format'
import { vehicleCover } from '@/lib/images'
import type { Vehicle } from '@/types/vehicle'

const SITE_URL = 'https://abromauto.ro'

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: company.brandName,
    legalName: company.legalName,
    url: SITE_URL,
    telephone: company.phoneIntl,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.showroomAddress,
      addressLocality: company.city,
      addressRegion: company.county,
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.googleMaps.lat,
      longitude: company.googleMaps.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '12:30',
        closes: '15:30',
      },
    ],
    sameAs: Object.values(company.social).filter(Boolean),
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function vehicleJsonLd(vehicle: Vehicle) {
  const cover = vehicleCover(vehicle)
  const availability =
    vehicle.status === 'available'
      ? 'https://schema.org/InStock'
      : vehicle.status === 'reserved'
        ? 'https://schema.org/LimitedAvailability'
        : vehicle.status === 'coming-soon'
          ? 'https://schema.org/PreOrder'
          : 'https://schema.org/OutOfStock'

  return {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: formatVehicleTitle(vehicle),
    brand: { '@type': 'Brand', name: vehicle.brand },
    model: vehicle.model,
    vehicleModelDate: String(vehicle.year),
    mileageFromOdometer: {
      '@type': 'QuantitativeValue',
      value: vehicle.mileage,
      unitCode: 'KMT',
    },
    fuelType: vehicle.fuel,
    vehicleTransmission: vehicle.transmission,
    ...(vehicle.vin ? { vehicleIdentificationNumber: vehicle.vin } : {}),
    ...(vehicle.color ? { color: vehicle.color } : {}),
    itemCondition: 'https://schema.org/UsedCondition',
    image: `${SITE_URL}${cover.ogJpg}`,
    offers: {
      '@type': 'Offer',
      price: vehicle.price,
      priceCurrency: vehicle.currency,
      availability,
      itemCondition: 'https://schema.org/UsedCondition',
      seller: {
        '@type': 'AutomotiveBusiness',
        name: company.brandName,
      },
    },
  }
}

export { SITE_URL }
