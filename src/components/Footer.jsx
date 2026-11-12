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
        {site.email && (
          <a href={`mailto:${site.email}`} className="hover:text-brand underline">
            {site.email}
          </a>
        )}
        {site.youtube && (
          <a href={site.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube" className="inline-flex items-center hover:opacity-80">
            <svg viewBox="0 0 28 20" className="h-5 w-7" aria-hidden="true">
              <rect width="28" height="20" rx="5" fill="#FF0000" />
              <path d="M11 5.5v9l8-4.5z" fill="#fff" />
            </svg>
          </a>
        )}
      </div>
    </footer>
  )
}
