import { MessageCircle, Phone, CalendarCheck } from 'lucide-react'
import { company } from '@/data/company'
import { whatsappForVehicle } from '@/lib/whatsapp'
import type { Vehicle } from '@/types/vehicle'

export function StickyMobileCTA({
  vehicle,
  onTestDriveClick,
}: {
  vehicle: Vehicle
  onTestDriveClick: () => void
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-white/95 px-3 py-2.5 backdrop-blur [padding-bottom:max(0.625rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={whatsappForVehicle(vehicle)}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-0.5 rounded-xl bg-[#25D366] py-2 text-[11px] font-semibold text-white"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href={company.telLink}
          className="flex flex-col items-center gap-0.5 rounded-xl bg-ink-900 py-2 text-[11px] font-semibold text-white"
        >
          <Phone className="h-5 w-5" />
          Sună acum
        </a>
        <button
          type="button"
          onClick={onTestDriveClick}
          className="flex flex-col items-center gap-0.5 rounded-xl bg-primary-500 py-2 text-[11px] font-semibold text-white"
        >
          <CalendarCheck className="h-5 w-5" />
          Test Drive
        </button>
      </div>
    </div>
  )
}
