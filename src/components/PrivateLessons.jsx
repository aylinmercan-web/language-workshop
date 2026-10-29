import { site } from '../config'
import WhatsAppIcon from './WhatsAppIcon'

const features = [
  'Lessons planned around your goals',
  'Grammar and all four skills, in balance',
  'All levels, from complete beginner to advanced',
  '30 or 60-minute lessons at flexible times',
  'Homework and feedback',
  'All lesson materials included',
]

export default function PrivateLessons() {
  const toForm = (e) => {
    e.preventDefault()
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="lessons" className="px-6 py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2 text-center">1-to-1 Lessons</h2>
        <p className="text-muted mb-10 text-center max-w-xl mx-auto">
          Private online lessons, just you and me. We work on what you need, at your own pace.
        </p>

        <div className="bg-card rounded-2xl border border-line p-6 md:p-8 shadow-sm md:flex md:items-center md:gap-10">
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 flex-1">
            {features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-ink">
                <span className="text-brand font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 md:mt-0 flex flex-col gap-3 md:w-56 flex-shrink-0">
            <a href="#booking" onClick={toForm} className="btn-primary">
              Book a 1-to-1 lesson
            </a>
            {site.whatsapp && (
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Merhaba Aylin! I'd like to ask about 1-to-1 lessons.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold text-brand hover:bg-soft transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Ask on WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
