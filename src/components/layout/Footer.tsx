import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/components/ui/SocialIcons'
import { company } from '@/data/company'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-100 bg-ink-900 text-ink-200">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/images/site/logo.webp" alt="AbRom Auto" className="h-10 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            Mașini rulate verificate, cu kilometraj certificat, garanție și finanțare rapidă — în Alba Iulia.
          </p>
          <div className="mt-4 flex gap-3">
            {company.social.facebook && (
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            )}
            {company.social.instagram && (
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            )}
            {company.social.tiktok && (
              <a
                href={company.social.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <nav aria-label="Navigare site">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Navigare</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/stoc-auto/" className="hover:text-white">Mașini rulate</Link></li>
            <li><Link to="/finantare/" className="hover:text-white">Finanțare</Link></li>
            <li><Link to="/trade-in/" className="hover:text-white">Trade-In</Link></li>
            <li><Link to="/despre-noi/" className="hover:text-white">Despre noi</Link></li>
            <li><Link to="/contact/" className="hover:text-white">Contact</Link></li>
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Legal</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/termeni-si-conditii/" className="hover:text-white">Termeni și condiții</Link></li>
            <li><Link to="/privacy-policy/" className="hover:text-white">Politica de confidențialitate</Link></li>
            <li><Link to="/politica-cookie/" className="hover:text-white">Politica de cookie-uri</Link></li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <img src="/images/site/anpc-sal.webp" alt="ANPC SAL" className="h-9 w-auto rounded bg-white p-1" />
            <img src="/images/site/anpc-sol.webp" alt="ANPC SOL" className="h-9 w-auto rounded bg-white p-1" />
          </div>
        </nav>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <span>{company.showroomAddress}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" />
              <a href={company.telLink} className="hover:text-white">{company.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" />
              <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <span>
                Luni–Vineri: {company.hours.monFri}
                <br />
                Sâmbătă–Duminică: {company.hours.saturday}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col gap-2 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {company.legalName}. Toate drepturile rezervate.</p>
          <p>CUI {company.vatId.replace('CUI ', '')} · Reg. Com. {company.registryNumber}</p>
        </Container>
      </div>
    </footer>
  )
}
