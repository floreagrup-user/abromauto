import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, ShieldCheck, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button, LinkButton } from '@/components/ui/Button'
import { BRANDS } from '@/lib/facets'
import { company } from '@/data/company'

export function Hero() {
  const navigate = useNavigate()
  const [brand, setBrand] = useState('')
  const [priceMax, setPriceMax] = useState('')
  const [fuel, setFuel] = useState('')

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (brand) params.set('marca', brand)
    if (priceMax) params.set('pretMax', priceMax)
    if (fuel) params.set('combustibil', fuel)
    navigate(`/stoc-auto/${params.toString() ? `?${params.toString()}` : ''}`)
  }

  return (
    <section className="relative overflow-hidden bg-ink-900">
      <img
        src="/images/site/homepage-hero.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/80 to-ink-900/40" />

      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-inset ring-white/20">
            <ShieldCheck className="h-3.5 w-3.5" /> Kilometraj certificat · Raport CarVertical inclus
          </span>
          <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Mașini rulate verificate, cu garanție și finanțare rapidă
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-200 sm:text-lg">
            AbRom Auto — dealer auto în Alba Iulia. Fiecare mașină din stoc e verificată, are km certificați și
            garanție inclusă, cu raport CarVertical gratuit.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton to="/stoc-auto/" size="lg">
              Vezi mașinile disponibile
            </LinkButton>
            <LinkButton to={company.telLink} variant="outlineOnDark" size="lg" icon={<Phone className="h-4.5 w-4.5" />}>
              Vorbește cu un consultant
            </LinkButton>
          </div>
        </div>

        <form
          onSubmit={handleSearch}
          className="mt-10 grid gap-3 rounded-2xl bg-white p-4 shadow-xl sm:grid-cols-[1fr_1fr_1fr_auto] sm:p-5"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="hero-brand" className="text-xs font-semibold text-ink-500">Marcă</label>
            <select
              id="hero-brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900"
            >
              <option value="">Orice marcă</option>
              {BRANDS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="hero-fuel" className="text-xs font-semibold text-ink-500">Combustibil</label>
            <select
              id="hero-fuel"
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
              className="rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900"
            >
              <option value="">Orice combustibil</option>
              <option value="Benzină">Benzină</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hibrid</option>
              <option value="Plug-in Hybrid">Hibrid Plug-in</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="hero-price" className="text-xs font-semibold text-ink-500">Preț maxim</label>
            <select
              id="hero-price"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              className="rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900"
            >
              <option value="">Fără limită</option>
              <option value="15000">până la 15.000 €</option>
              <option value="20000">până la 20.000 €</option>
              <option value="25000">până la 25.000 €</option>
              <option value="35000">până la 35.000 €</option>
            </select>
          </div>

          <Button type="submit" size="lg" icon={<Search className="h-4.5 w-4.5" />} className="sm:self-end">
            Caută
          </Button>
        </form>
      </Container>
    </section>
  )
}
