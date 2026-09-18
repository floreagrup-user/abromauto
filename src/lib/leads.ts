import { whatsappLink } from '@/lib/whatsapp'

export type LeadKind = 'contact' | 'test-drive' | 'trade-in' | 'financing'

const KIND_LABELS: Record<LeadKind, string> = {
  contact: 'Cerere de contact',
  'test-drive': 'Programare test drive',
  'trade-in': 'Cerere evaluare Trade-In',
  financing: 'Cerere ofertă finanțare',
}

export interface LeadPayload {
  kind: LeadKind
  name: string
  phone: string
  email?: string
  message?: string
  vehicleTitle?: string
  preferredDate?: string
  preferredTime?: string
}

/**
 * No backend exists yet. Submitting a lead opens a pre-filled WhatsApp
 * message — a real, working handoff to the dealer today. Swap the body of
 * this function for a `fetch('/api/leads', ...)` call once a backend/CRM
 * integration exists; call sites don't need to change.
 */
export function submitLead(payload: LeadPayload): { ok: true; whatsappUrl: string } {
  const lines = [
    KIND_LABELS[payload.kind],
    `Nume: ${payload.name}`,
    `Telefon: ${payload.phone}`,
    payload.email ? `Email: ${payload.email}` : null,
    payload.vehicleTitle ? `Mașină: ${payload.vehicleTitle}` : null,
    payload.preferredDate ? `Zi preferată: ${payload.preferredDate}` : null,
    payload.preferredTime ? `Interval orar: ${payload.preferredTime}` : null,
    payload.message ? `Mesaj: ${payload.message}` : null,
  ].filter(Boolean)

  const whatsappUrl = whatsappLink(lines.join('\n'))
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  return { ok: true, whatsappUrl }
}
