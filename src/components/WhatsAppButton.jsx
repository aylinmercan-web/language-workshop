import { site } from '../config'
import WhatsAppIcon from './WhatsAppIcon'

const message = "Merhaba Aylin! I'd like to book a Turkish lesson."

export default function WhatsAppButton() {
  if (!site.whatsapp) return null

  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Message me on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#1EBE5A] transition-colors"
    >
      <WhatsAppIcon />
      WhatsApp
    </a>
  )
}
