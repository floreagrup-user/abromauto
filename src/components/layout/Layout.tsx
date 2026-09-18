import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { WhatsAppFloatButton } from '@/components/layout/WhatsAppFloatButton'
import { vehicles } from '@/data/vehicles'

export function Layout() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\/|\/$/g, '')
  const isVehiclePage = vehicles.some((v) => v.slug === slug)

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <div className={isVehiclePage ? 'hidden lg:block' : ''}>
        <WhatsAppFloatButton />
      </div>
    </div>
  )
}
