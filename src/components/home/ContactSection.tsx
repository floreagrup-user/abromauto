import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { company } from '@/data/company'
import { whatsappGeneric } from '@/lib/whatsapp'

export function ContactSection() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-8 rounded-3xl bg-ink-900 p-8 text-white sm:p-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Vino să vezi mașina în showroom</h2>
            <p className="mt-3 leading-relaxed text-ink-300">
              Suntem în Alba Iulia și deschidem și în weekend — o raritate printre dealerii auto din zonă.
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
                <span>{company.showroomAddress}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
                <span>
                  Luni – Vineri: {company.hours.monFri}
                  <br />
                  Sâmbătă – Duminică: {company.hours.saturday}
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton to={company.telLink} icon={<Phone className="h-4 w-4" />}>
                {company.phone}
              </LinkButton>
              <LinkButton to={whatsappGeneric()} variant="whatsapp" icon={<MessageCircle className="h-4 w-4" />}>
                WhatsApp
              </LinkButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Locație AbRom Auto pe Google Maps"
              src={`https://maps.google.com/maps?q=${company.googleMaps.lat},${company.googleMaps.lng}&z=15&output=embed`}
              className="h-full min-h-[280px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
