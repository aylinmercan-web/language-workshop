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

function handleClick(e, href) {
  if (!href.startsWith('/#') || !isHome()) return
  e.preventDefault()
  document.querySelector(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const path = currentPath()

  return (
    <nav className="max-w-5xl mx-auto px-6 pt-6 flex flex-wrap items-center justify-center lg:justify-end gap-2">
      <a
        href="/"
        onClick={(e) => {
          if (!isHome()) return
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="w-full lg:w-auto lg:mr-auto mb-2 lg:mb-0 flex items-center justify-center gap-2 text-white font-bold text-lg"
      >
        <TurkishFlag className="h-6 w-9 rounded shadow" />
        Turkish with Aylin
      </a>
      {links.map((l) => {
        const active = l.href === '/blog' && path.startsWith('/blog')
        const style =
          l.href === '/#booking' || active
            ? 'rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-teal-700 shadow-sm hover:bg-amber-50 transition-colors'
            : 'rounded-full border border-white/30 bg-white/10 px-3.5 py-2 text-sm font-medium text-white hover:bg-white hover:text-teal-700 hover:border-white transition-colors'
        return (
          <a key={l.href} href={l.href} onClick={(e) => handleClick(e, l.href)} className={style}>
            {l.label}
          </a>
        )
      })}
      <ThemeToggle />
    </nav>
  )
}
