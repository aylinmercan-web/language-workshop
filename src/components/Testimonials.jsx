import testimonials from '../data/testimonials.json'
import { site } from '../config'

const palettes = [
  { border: 'border-t-teal-600', avatar: 'bg-teal-600', avatarText: 'text-white' },
  { border: 'border-t-accent', avatar: 'bg-accent', avatarText: 'text-teal-900' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-16 md:py-20 bg-soft">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-10 text-center">What My Students Say</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((item, i) => {
            const palette = palettes[i % palettes.length]
            return (
              <blockquote
                key={item.id}
                className={`relative bg-card rounded-2xl border-t-4 ${palette.border} border border-line p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <span className="absolute top-4 right-5 text-5xl font-serif text-line select-none leading-none">&rdquo;</span>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`h-10 w-10 rounded-full ${palette.avatar} ${palette.avatarText} font-bold flex items-center justify-center flex-shrink-0`}>
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-ink text-sm">{item.name}</p>
                    <p className="text-xs text-muted">{item.lessons}</p>
                  </div>
                </div>
                <p className="text-ink leading-relaxed text-sm relative">{item.text}</p>
              </blockquote>
            )
          })}
        </div>
        <p className="text-xs text-muted text-center mt-6">
          Real reviews from my students on italki.
          {site.italki && (
            <>
              {' '}
              <a href={site.italki} target="_blank" rel="noreferrer" className="text-brand font-semibold underline">
                See all reviews
              </a>
            </>
          )}
        </p>
      </div>
    </section>
  )
}
