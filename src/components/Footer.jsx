import { site } from '../config'
import TurkishFlag from './TurkishFlag'

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-line">
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted">
        <span className="inline-flex items-center gap-2">
          <TurkishFlag className="h-3 w-[18px] rounded-[2px]" />
          © {new Date().getFullYear()} Aylin Mercan · Online Turkish lessons
        </span>
        {site.italki && (
          <a href={site.italki} target="_blank" rel="noreferrer" className="hover:text-brand underline">
            italki
          </a>
        )}
        {site.whatsapp && (
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-brand underline">
            WhatsApp
          </a>
        )}
        {site.email && (
          <a href={`mailto:${site.email}`} className="hover:text-brand underline">
            {site.email}
          </a>
        )}
      </div>
    </footer>
  )
}
