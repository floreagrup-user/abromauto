import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { LeadForm } from '@/components/vehicle/LeadForm'
import { company } from '@/data/company'
import { whatsappGeneric } from '@/lib/whatsapp'
import { useDocumentHead } from '@/hooks/useDocumentHead'
import { organizationJsonLd } from '@/lib/seo'

export default function Contact() {
  useDocumentHead({
    title: 'Contact',
    description: `Contactează AbRom Auto — ${company.showroomAddress}. Telefon ${company.phone}, deschis și în weekend.`,
    canonicalPath: '/contact/',
    jsonLd: organizationJsonLd(),
  })

  return (
    <Container className="py-10 sm:py-16">
      <h1 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">Contact</h1>
      <p className="mt-2 max-w-xl text-ink-600">
        Suntem în Alba Iulia și răspundem rapid pe WhatsApp, telefonic sau prin formularul de mai jos.
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
              <div>
                <p className="font-semibold text-ink-900">Showroom</p>
                <p className="text-ink-600">{company.showroomAddress}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
              <div>
                <p className="font-semibold text-ink-900">Telefon</p>
                <a href={company.telLink} className="text-ink-600 hover:text-primary-600">{company.phone}</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
              <div>
                <p className="font-semibold text-ink-900">Email</p>
                <a href={`mailto:${company.email}`} className="text-ink-600 hover:text-primary-600">{company.email}</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
              <div>
                <p className="font-semibold text-ink-900">Program</p>
                <p className="text-ink-600">
                  Luni – Vineri: {company.hours.monFri}
                  <br />
                  Sâmbătă – Duminică: {company.hours.saturday}
                </p>
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3">
            <LinkButton to={whatsappGeneric()} variant="whatsapp" icon={<MessageCircle className="h-4 w-4" />}>
              Scrie pe WhatsApp
            </LinkButton>
            <LinkButton to={company.telLink} variant="outline" icon={<Phone className="h-4 w-4" />}>
              Sună acum
            </LinkButton>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Locație AbRom Auto pe Google Maps"
              src={`https://maps.google.com/maps?q=${company.googleMaps.lat},${company.googleMaps.lng}&z=15&output=embed`}
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-ink-100 p-6">
          <h2 className="font-display text-lg font-bold text-ink-900">Trimite-ne un mesaj</h2>
          <div className="mt-4">
            <LeadForm kind="contact" submitLabel="Trimite mesajul" />
          </div>
        </div>
      </div>
    </Container>
  )
}
