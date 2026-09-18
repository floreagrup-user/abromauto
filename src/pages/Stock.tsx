import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { VehicleCard } from '@/components/vehicle/VehicleCard'
import { StockFilters, EMPTY_FILTERS, type StockFilterState } from '@/components/vehicle/StockFilters'
import { vehicles } from '@/data/vehicles'
import { useDocumentHead } from '@/hooks/useDocumentHead'

type SortKey = 'relevance' | 'price-asc' | 'price-desc' | 'year-desc' | 'mileage-asc'

export default function Stock() {
  const [params, setParams] = useSearchParams()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const filters: StockFilterState = {
    marca: params.get('marca') ?? EMPTY_FILTERS.marca,
    combustibil: params.get('combustibil') ?? EMPTY_FILTERS.combustibil,
    transmisie: params.get('transmisie') ?? EMPTY_FILTERS.transmisie,
    caroserie: params.get('caroserie') ?? EMPTY_FILTERS.caroserie,
    pretMax: params.get('pretMax') ?? EMPTY_FILTERS.pretMax,
    anMin: params.get('anMin') ?? EMPTY_FILTERS.anMin,
    status: params.get('status') ?? EMPTY_FILTERS.status,
  }
  const sort = (params.get('sort') as SortKey) ?? 'relevance'

  function applyFilters(next: StockFilterState) {
    const p = new URLSearchParams(params)
    Object.entries(next).forEach(([key, value]) => {
      if (value) p.set(key, value)
      else p.delete(key)
    })
    setParams(p)
  }

  function setSort(next: SortKey) {
    const p = new URLSearchParams(params)
    if (next === 'relevance') p.delete('sort')
    else p.set('sort', next)
    setParams(p)
  }

  function resetFilters() {
    setParams(new URLSearchParams())
  }

  const results = useMemo(() => {
    let list = vehicles.filter((v) => {
      if (filters.status && v.status !== filters.status) return false
      if (filters.marca && v.brand !== filters.marca) return false
      if (filters.combustibil && v.fuel !== filters.combustibil) return false
      if (filters.transmisie && v.transmission !== filters.transmisie) return false
      if (filters.caroserie && v.bodyType !== filters.caroserie) return false
      if (filters.pretMax && v.price > Number(filters.pretMax)) return false
      if (filters.anMin && v.year < Number(filters.anMin)) return false
      return true
    })

    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case 'year-desc':
        list = [...list].sort((a, b) => b.year - a.year)
        break
      case 'mileage-asc':
        list = [...list].sort((a, b) => a.mileage - b.mileage)
        break
      default:
        list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured))
    }
    return list
  }, [filters, sort])

  useDocumentHead({
    title: 'Mașini rulate disponibile',
    description: 'Stocul complet de mașini rulate AbRom Auto — filtrează după marcă, preț, an, combustibil și transmisie.',
    canonicalPath: '/stoc-auto/',
  })

  return (
    <Container className="py-8 sm:py-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">Mașini rulate</h1>
          <p className="mt-1 text-sm text-ink-600">{results.length} rezultate</p>
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900"
        >
          <option value="relevance">Relevanță</option>
          <option value="price-asc">Preț crescător</option>
          <option value="price-desc">Preț descrescător</option>
          <option value="year-desc">An descrescător</option>
          <option value="mileage-asc">Kilometraj crescător</option>
        </select>
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-100">
            <StockFilters filters={filters} onChange={applyFilters} onReset={resetFilters} />
          </div>
        </aside>

        <div>
          {results.length === 0 ? (
            <div className="rounded-2xl bg-ink-50 p-10 text-center">
              <p className="font-display text-lg font-bold text-ink-900">Niciun rezultat</p>
              <p className="mt-2 text-sm text-ink-600">Încearcă să elimini câteva filtre.</p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((v) => (
                <VehicleCard key={v.slug} vehicle={v} />
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setDrawerOpen(true)}
        className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white shadow-lg lg:hidden"
      >
        <SlidersHorizontal className="h-4 w-4" /> Filtre
      </button>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-display text-base font-bold text-ink-900">Filtre</span>
              <button type="button" onClick={() => setDrawerOpen(false)} aria-label="Închide">
                <X className="h-5 w-5 text-ink-500" />
              </button>
            </div>
            <StockFilters filters={filters} onChange={applyFilters} onReset={resetFilters} />
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="mt-5 w-full rounded-xl bg-primary-500 py-3 text-sm font-semibold text-white"
            >
              Vezi {results.length} rezultate
            </button>
          </div>
        </div>
      )}
    </Container>
  )
}
