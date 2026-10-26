import { useState } from 'react'
import TurkishFlag from './TurkishFlag'
import ThemeToggle from './ThemeToggle'
import { currentPath } from '../utils/path'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#groups', label: 'Group Classes' },
  { href: '/blog', label: 'Blog' },
  { href: '/#book', label: 'My Book' },
  { href: '/#testimonials', label: 'Reviews' },
  { href: '/#booking', label: 'Book a Lesson' },
]

const isHome = () => currentPath() === '/'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const path = currentPath()

  const handleClick = (e, href) => {
    setOpen(false)
    if (!href.startsWith('/#') || !isHome()) return
    e.preventDefault()
    document.querySelector(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  const linkStyle = (href) => {
    const active = href === '/blog' && path.startsWith('/blog')
    return href === '/#booking' || active
      ? 'rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-teal-700 shadow-sm hover:bg-amber-50 transition-colors'
      : 'rounded-full border border-white/30 bg-white/10 px-3.5 py-2 text-sm font-medium text-white hover:bg-white hover:text-teal-700 hover:border-white transition-colors'
  }

  return (
    <div className="sticky top-0 z-40 bg-hero shadow-sm">
      <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-2">
        <a
          href="/"
          onClick={(e) => {
            setOpen(false)
            if (!isHome()) return
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="mr-auto flex items-center gap-2 text-white font-bold text-lg"
        >
          <TurkishFlag className="h-6 w-9 rounded shadow" />
          Turkish with Aylin
        </a>

        <div className="hidden lg:flex items-center gap-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => handleClick(e, l.href)} className={linkStyle(l.href)}>
              {l.label}
            </a>
          ))}
        </div>

        <ThemeToggle />

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white hover:text-teal-700 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden max-w-5xl mx-auto px-6 pb-4 flex flex-wrap gap-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => handleClick(e, l.href)} className={linkStyle(l.href)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
