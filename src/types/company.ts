export interface Company {
  brandName: string
  legalName: string
  registryNumber: string
  vatId: string
  registeredAddress: string
  showroomAddress: string
  city: string
  county: string
  country: string
  phone: string
  phoneIntl: string
  telLink: string
  email: string
  emailAlt: string
  whatsapp: {
    number: string
    link: string
  }
  hours: {
    monFri: string
    saturday: string
    sunday: string
    raw: Record<string, string>
  }
  googleMaps: {
    placeUrl: string
    lat: number
    lng: number
  }
  social: {
    facebook: string
    instagram: string
    tiktok: string
  }
  servicesOffered: string[]
  trustSignalsRealVerified: string[]

  tracking?: {
    metaPixelId?: string
    notes?: string
  }
  certifications?: {
    anpc?: string[]
    notes?: string
  }
  testimonials?: {
    found: boolean
    notes?: string
  }
}
