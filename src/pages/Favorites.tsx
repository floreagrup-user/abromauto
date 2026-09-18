import { HeartOff } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { VehicleCard } from '@/components/vehicle/VehicleCard'
import { vehicles } from '@/data/vehicles'
import { useFavorites } from '@/hooks/useFavorites'
import { useDocumentHead } from '@/hooks/useDocumentHead'

export default function Favorites() {
  const { favorites } = useFavorites()
  const saved = vehicles.filter((v) => favorites.includes(v.slug))

  useDocumentHead({ title: 'Mașini favorite', canonicalPath: '/favorite/', noindex: true })

  return (
    <Container className="py-10 sm:py-16">
      <h1 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">Mașinile tale favorite</h1>

      {saved.length === 0 ? (
        <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-ink-50 p-12 text-center">
          <HeartOff className="h-8 w-8 text-ink-400" />
          <p className="font-display text-lg font-bold text-ink-900">Nu ai salvat încă nicio mașină</p>
          <p className="text-sm text-ink-600">Apasă pe inimioara de pe orice mașină pentru a o salva aici.</p>
          <LinkButton to="/stoc-auto/" className="mt-2">Vezi mașinile disponibile</LinkButton>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((v) => (
            <VehicleCard key={v.slug} vehicle={v} />
          ))}
        </div>
      )}
    </Container>
  )
}
