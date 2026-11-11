import { site } from '../config'
import WhatsAppIcon from './WhatsAppIcon'

const groups = [
  {
    level: 'A1',
    title: 'Beginners',
    text: 'Start from zero: greetings, numbers, everyday phrases and the basics of Turkish grammar, step by step.',
    info: ['4–12 students', 'Twice a week × 90 min (3 hours a week)', '4 months', '$80 / month (12 hours)', 'Lesson materials included'],
    soon: true,
  },
  {
    level: 'A2',
    title: 'Elementary',
    text: 'Build on the basics: talk about your day, your plans and your past, and handle everyday situations in Turkish.',
    info: ['4–12 students', 'Twice a week × 90 min (3 hours a week)', '4 months', '$80 / month (12 hours)', 'Lesson materials included'],
  },
  {
    level: 'B1–B2',
    title: 'Conversation Club',
    text: 'Speaking and listening only: real-life topics, discussions and role plays to help you speak fluently and confidently.',
    info: ['4–8 students', 'Once a week, 90 minutes', '$60 / month (4 lessons, 6 hours)'],
  },
]

function whatsappLink(level, soon) {
  const text = soon
    ? `Merhaba Aylin! I'd like to join the waiting list for the ${level} group class. Could you send me the details?`
    : `Merhaba Aylin! I'm interested in the ${level} group class. Could you send me the details?`
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}

export default function GroupClasses() {
  const toForm = (e) => {
    e.preventDefault()
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="groups" className="px-6 py-16 md:py-20 bg-mint">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2 text-center">Group Classes</h2>
        <p className="text-muted mb-10 text-center max-w-xl mx-auto">
          Learn together with other students in small groups. A fun way to practise more and keep motivated.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.level} className="bg-card rounded-2xl border border-line p-6 shadow-sm flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="rounded-lg bg-accent px-3 py-1 text-sm font-extrabold text-teal-900">{g.level}</span>
                {g.soon && (
                  <span className="rounded-full bg-rose-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Starting soon
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{g.title}</h3>
              <p className="text-sm text-ink leading-relaxed mb-4 flex-1">{g.text}</p>
              <ul className="text-xs font-semibold text-brand mb-4 space-y-1">
                {g.info.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              {site.whatsapp && (
                <a
                  href={whatsappLink(g.level, g.soon)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary gap-2"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {g.soon ? 'Join the waiting list' : 'Ask about this class'}
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-sm text-muted text-center mt-8">
          Prefer email?{' '}
          <a href="#booking" onClick={toForm} className="text-brand font-semibold underline">
            Use the form
          </a>{' '}
          and choose "Group class".
        </p>
      </div>
    </section>
  )
}
