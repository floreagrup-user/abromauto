import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { VehicleCard } from '@/components/vehicle/VehicleCard'
import { vehicles } from '@/data/vehicles'

export function FeaturedVehicles() {
  const featured = vehicles.filter((v) => v.featured && v.status !== 'sold')

  if (featured.length === 0) return null

  return (
    <section className="bg-ink-50 py-14 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">Recomandate acum</h2>
            <p className="mt-1.5 text-ink-600">Selecție din stocul disponibil, verificată și pregătită de livrare.</p>
          </div>
          <LinkButton to="/stoc-auto/" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            Tot stocul
          </LinkButton>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((v) => (
            <VehicleCard key={v.slug} vehicle={v} />
          ))}
        </div>
      </Container>
    </section>
  )
}
