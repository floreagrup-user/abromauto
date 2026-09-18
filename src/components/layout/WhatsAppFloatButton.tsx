import { MessageCircle } from 'lucide-react'
import { whatsappGeneric } from '@/lib/whatsapp'

export function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappGeneric()}
      target="_blank"
      rel="noreferrer"
      aria-label="Scrie-ne pe WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </a>
  )
}
