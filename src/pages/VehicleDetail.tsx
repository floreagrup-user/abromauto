import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Phone, MessageCircle, CalendarCheck, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { LinkButton } from '@/components/ui/Button'
import { VehicleGallery } from '@/components/vehicle/VehicleGallery'
import { SpecsGrid } from '@/components/vehicle/SpecsGrid'
import { EquipmentList } from '@/components/vehicle/EquipmentList'
import { FinancingEstimate } from '@/components/vehicle/FinancingEstimate'
import { PurchaseTrustBlock } from '@/components/vehicle/PurchaseTrustBlock'
import { LeadForm } from '@/components/vehicle/LeadForm'
import { StickyMobileCTA } from '@/components/vehicle/StickyMobileCTA'
import { VehicleCard } from '@/components/vehicle/VehicleCard'
import { vehicles } from '@/data/vehicles'
import { company } from '@/data/company'
import { formatPrice, formatMileage, formatVehicleTitle } from '@/lib/format'
import { whatsappForVehicle } from '@/lib/whatsapp'
import { useDocumentHead } from '@/hooks/useDocumentHead'
import { vehicleJsonLd, breadcrumbJsonLd } from '@/lib/seo'
import NotFound from '@/pages/NotFound'

export default function VehicleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const vehicle = vehicles.find((v) => v.slug === slug)
  const [testDriveOpen, setTestDriveOpen] = useState(false)

  useDocumentHead({
    title: vehicle ? `${formatVehicleTitle(vehicle)} — ${formatPrice(vehicle.price, vehicle.currency)}` : 'Mașină indisponibilă',
    description: vehicle
      ? `${formatVehicleTitle(vehicle)}, ${vehicle.year}, ${formatMileage(vehicle.mileage)}, ${vehicle.fuel}, ${vehicle.transmission}. Verificată, km certificați, garanție 12 luni, raport CarVertical inclus.`
      : undefined,
    canonicalPath: vehicle ? `/${vehicle.slug}/` : undefined,
    image: vehicle ? `${window.location.origin}/images/vehicles/${vehicle.slug}/cover.jpg` : undefined,
    jsonLd: vehicle
      ? [
          vehicleJsonLd(vehicle),
          breadcrumbJsonLd([
            { name: 'Acasă', path: '/' },
            { name: 'Mașini rulate', path: '/stoc-auto/' },
            { name: formatVehicleTitle(vehicle), path: `/${vehicle.slug}/` },
          ]),
        ]
      : undefined,
  })

  if (!vehicle) return <NotFound />

  const related = vehicles
    .filter((v) => v.slug !== vehicle.slug && v.brand === vehicle.brand && v.status !== 'sold')
    .slice(0, 3)

  return (
    <>
      <Container className="py-6 sm:py-10">
        <nav aria-label="breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-ink-500">
          <Link to="/" className="hover:text-ink-800">Acasă</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/stoc-auto/" className="hover:text-ink-800">Mașini rulate</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink-800">{formatVehicleTitle(vehicle)}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="min-w-0">
            <VehicleGallery vehicle={vehicle} />
          </div>

          <div>
            <div className="flex flex-wrap gap-1.5">
              {vehicle.featured && vehicle.status === 'available' && <Badge tone="primary">Recomandat</Badge>}
              {vehicle.badge === 'Vândut' && <Badge tone="sold">Vândut</Badge>}
              {vehicle.badge === 'Disponibil în curând' && <Badge tone="warning">Sosește în curând</Badge>}
            </div>
            <h1 className="mt-2 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
              {vehicle.brand} {vehicle.model}
            </h1>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl font-extrabold text-ink-900">
                {formatPrice(vehicle.price, vehicle.currency)}
              </span>
              {vehicle.priceExcludingVAT && (
                <span className="text-sm text-ink-500">({formatPrice(vehicle.priceExcludingVAT, vehicle.currency)} fără TVA)</span>
              )}
            </div>

            {vehicle.status === 'sold' && (
              <p className="mt-3 rounded-lg bg-ink-100 px-3 py-2 text-sm text-ink-600">
                Această mașină a fost vândută — o păstrăm afișată ca exemplu din stocul nostru real.{' '}
                <Link to="/stoc-auto/" className="font-semibold text-primary-600">Vezi mașini similare disponibile</Link>.
              </p>
            )}

            <div className="mt-5 hidden flex-col gap-2.5 sm:flex">
              <LinkButton to={whatsappForVehicle(vehicle)} variant="whatsapp" icon={<MessageCircle className="h-4.5 w-4.5" />}>
                Scrie pe WhatsApp
              </LinkButton>
              <LinkButton to={company.telLink} variant="outline" icon={<Phone className="h-4.5 w-4.5" />}>
                {company.phone}
              </LinkButton>
              <button
                type="button"
                onClick={() => setTestDriveOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-5 py-2.5 text-[0.95rem] font-semibold text-white hover:bg-ink-800"
              >
                <CalendarCheck className="h-4.5 w-4.5" /> Programează test drive
              </button>
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-lg bg-emerald-50 px-3.5 py-2.5 text-sm font-medium text-emerald-800">
              Istoric verificat · Garanție 12 luni · Raport CarVertical inclus
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-col gap-10">
            <section>
              <h2 className="mb-4 font-display text-xl font-bold text-ink-900">Specificații</h2>
              <SpecsGrid vehicle={vehicle} />
            </section>

            <section>
              <h2 className="mb-4 font-display text-xl font-bold text-ink-900">Dotări</h2>
              <EquipmentList equipment={vehicle.equipment} />
            </section>

            <section>
              <h2 className="mb-4 font-display text-xl font-bold text-ink-900">De ce să cumperi de la AbRom Auto</h2>
              <PurchaseTrustBlock />
            </section>

            {related.length > 0 && (
              <section>
                <h2 className="mb-4 font-display text-xl font-bold text-ink-900">Mașini similare</h2>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((v) => (
                    <VehicleCard key={v.slug} vehicle={v} />
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <FinancingEstimate price={vehicle.price} currency={vehicle.currency} />
            <div id="contact-form" className="rounded-2xl border border-ink-100 bg-white p-5">
              <h3 className="font-display text-base font-bold text-ink-900">Cere mai multe detalii</h3>
              <p className="mt-1 mb-4 text-sm text-ink-600">Îți răspundem rapid pe WhatsApp sau telefonic.</p>
              <LeadForm kind="contact" vehicleTitle={formatVehicleTitle(vehicle)} />
            </div>
          </div>
        </div>
      </Container>

      {testDriveOpen && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setTestDriveOpen(false)} />
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 sm:rounded-3xl">
            <h3 className="font-display text-lg font-bold text-ink-900">Programează un test drive</h3>
            <p className="mt-1 mb-4 text-sm text-ink-600">{formatVehicleTitle(vehicle)}</p>
            <LeadForm
              kind="test-drive"
              vehicleTitle={formatVehicleTitle(vehicle)}
              showDateFields
              submitLabel="Trimite programarea"
            />
            <button
              type="button"
              onClick={() => setTestDriveOpen(false)}
              className="mt-3 w-full text-center text-sm text-ink-500"
            >
              Închide
            </button>
          </div>
        </div>
      )}

      <StickyMobileCTA vehicle={vehicle} onTestDriveClick={() => setTestDriveOpen(true)} />
    </>
  )
}
