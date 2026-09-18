import { ShieldCheck, FileCheck, Truck, Video, Wallet } from 'lucide-react'

// Real, verbatim boilerplate that abromauto.ro repeats identically at the end
// of every single vehicle description (see _research/current-site/vehicles.json).
// Centralized here once instead of duplicating the same wall of text on every
// vehicle page — same real content, better UX (per audit recommendation).
export function PurchaseTrustBlock() {
  return (
    <div className="grid gap-4 rounded-2xl border border-ink-100 bg-white p-5 sm:grid-cols-2">
      <div className="flex gap-3">
        <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600" />
        <div>
          <p className="text-sm font-semibold text-ink-900">Verificare & garanție</p>
          <p className="mt-0.5 text-sm text-ink-600">
            Mașinile sunt verificate înainte de vânzare. Km certificați menționați pe toate documentele de achiziție.
            Posibilitate de verificare în service autorizat înainte de cumpărare.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <FileCheck className="h-5 w-5 shrink-0 text-emerald-600" />
        <div>
          <p className="text-sm font-semibold text-ink-900">Documente & istoric</p>
          <p className="mt-0.5 text-sm text-ink-600">
            Raport CarVertical disponibil. Istoric de service disponibil acolo unde acesta există. Oferim toate
            documentele necesare pentru înmatricularea definitivă în România.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Truck className="h-5 w-5 shrink-0 text-primary-600" />
        <div>
          <p className="text-sm font-semibold text-ink-900">Livrare & rezervare</p>
          <p className="mt-0.5 text-sm text-ink-600">
            Livrare la domiciliu (pe platformă sau pe roți, prin parteneri) și posibilitate de rezervare a
            autovehiculului.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Video className="h-5 w-5 shrink-0 text-primary-600" />
        <div>
          <p className="text-sm font-semibold text-ink-900">Apel video</p>
          <p className="mt-0.5 text-sm text-ink-600">
            Îți putem prezenta mașina printr-un apel video, dacă nu poți veni imediat la showroom.
          </p>
        </div>
      </div>
      <div className="flex gap-3 sm:col-span-2">
        <Wallet className="h-5 w-5 shrink-0 text-ink-500" />
        <div>
          <p className="text-sm font-semibold text-ink-900">Modalitate de plată</p>
          <p className="mt-0.5 text-sm text-ink-600">
            Plata se efectuează exclusiv în LEI, prin virament bancar. Conversia din EURO se realizează la cursul de
            cumpărare EURO al băncii (ex: BRD, BT) din ziua efectuării plății. Pentru mașinile achiziționate în
            leasing, conversia se realizează la cursul BNR + 1%.
          </p>
        </div>
      </div>
    </div>
  )
}
