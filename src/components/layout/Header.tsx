import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Heart } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { company } from '@/data/company'
import { useFavorites } from '@/hooks/useFavorites'

const NAV_LINKS = [
  { to: '/stoc-auto/', label: 'Mașini' },
  { to: '/finantare/', label: 'Finanțare' },
  { to: '/trade-in/', label: 'Trade-In' },
  { to: '/despre-noi/', label: 'Despre noi' },
  { to: '/contact/', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { favorites } = useFavorites()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink-900 sm:text-xl">
          <img src="/images/site/logo.webp" alt="AbRom Auto" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-primary-600' : 'text-ink-600 hover:text-ink-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/favorite/"
            aria-label="Favorite"
            className="relative rounded-lg p-2 text-ink-600 hover:bg-ink-50 hover:text-ink-900"
          >
            <Heart className="h-5 w-5" />
            {favorites.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-primary-500 text-[10px] font-bold text-white">
                {favorites.length}
              </span>
            )}
          </Link>
          <LinkButton to={company.telLink} variant="outline" size="sm" icon={<Phone className="h-4 w-4" />}>
            {company.phone}
          </LinkButton>
          <LinkButton to="/stoc-auto/" size="sm">
            Vezi mașinile
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
          className="rounded-lg p-2 text-ink-700 hover:bg-ink-50 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] overflow-y-auto bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-base font-medium ${
                    isActive ? 'bg-primary-50 text-primary-700' : 'text-ink-700 hover:bg-ink-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/favorite/"
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-ink-700 hover:bg-ink-50"
            >
              <Heart className="h-5 w-5" /> Favorite {favorites.length > 0 && `(${favorites.length})`}
            </NavLink>
            <div className="mt-4 flex flex-col gap-3 px-4">
              <LinkButton to={company.telLink} variant="outline" icon={<Phone className="h-4 w-4" />}>
                {company.phone}
              </LinkButton>
              <LinkButton to="/stoc-auto/">Vezi mașinile</LinkButton>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
