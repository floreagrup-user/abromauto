import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const Home = lazy(() => import('@/pages/Home'))
const Stock = lazy(() => import('@/pages/Stock'))
const VehicleDetail = lazy(() => import('@/pages/VehicleDetail'))
const Financing = lazy(() => import('@/pages/Financing'))
const About = lazy(() => import('@/pages/About'))
const TradeIn = lazy(() => import('@/pages/TradeIn'))
const Contact = lazy(() => import('@/pages/Contact'))
const Favorites = lazy(() => import('@/pages/Favorites'))
const Privacy = lazy(() => import('@/pages/legal/Privacy'))
const CookiePolicy = lazy(() => import('@/pages/legal/CookiePolicy'))
const Terms = lazy(() => import('@/pages/legal/Terms'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink-200 border-t-primary-500" />
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stoc-auto" element={<Stock />} />
          <Route path="finantare" element={<Financing />} />
          <Route path="despre-noi" element={<About />} />
          <Route path="trade-in" element={<TradeIn />} />
          <Route path="contact" element={<Contact />} />
          <Route path="favorite" element={<Favorites />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="politica-cookie" element={<CookiePolicy />} />
          <Route path="termeni-si-conditii" element={<Terms />} />
          <Route path=":slug" element={<VehicleDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
