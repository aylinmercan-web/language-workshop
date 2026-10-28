import { useState } from 'react'
import catCityCover from '../assets/cat-city-cover.jpg'
import caseCover from '../assets/hangi-durum-eki-cover.jpg'
import { site } from '../config'
import { sendForm } from '../api/axiosInstance'

const catCityFeatures = [
  '8 short illustrated stories',
  'Picture dictionary and grammar notes',
  'Activities with an answer key',
  'English versions of the stories',
  'Audio for every story',
]

const caseFeatures = [
  'Turkish verbs and the case they take',
  'Colour-coded case endings',
  'Simple everyday examples, Turkish first',
  'Exercises with an answer key',
]

const samplePdf = '/hangi-durum-eki-ornek.pdf'
const validEmail = (email) => /^\S+@\S+\.\S+$/.test(email)

function EmailForm({ subject, label, button, onDone }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validEmail(email)) {
      setStatus('invalid')
      return
    }
    setStatus('sending')
    try {
      await sendForm(subject, { email })
    } catch {
      setStatus('idle')
    }
    onDone()
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-sm">
      <p className="text-sm font-semibold text-ink mb-2">{label}</p>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Email"
          className="field-input"
        />
        <button type="submit" disabled={status === 'sending'} className="btn-primary whitespace-nowrap disabled:opacity-60">
          {button}
        </button>
      </div>
      {status === 'invalid' && <p className="field-error">Please enter a valid email address.</p>}
    </form>
  )
}

function Features({ items }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-7">
      {items.map((f) => (
        <li key={f} className="flex gap-2 text-sm text-ink">
          <span className="text-brand font-bold">✓</span>
          {f}
        </li>
      ))}
    </ul>
  )
}

function CatCity() {
  const [done, setDone] = useState(false)

  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">
      <img
        src={catCityCover}
        alt="Cat City İstanbul book cover"
        className="w-56 md:w-72 rounded-lg shadow-xl rotate-[-2deg] flex-shrink-0"
        loading="lazy"
      />

      <div lang="en">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">A1 Turkish reader</p>
        <h3 className="text-3xl md:text-4xl font-extrabold text-ink mb-1">
          Cat City <span lang="tr">İstanbul</span>
        </h3>
        <p lang="tr" className="text-lg font-semibold text-brand mb-5">Simit'in Maceraları</p>

        <p className="text-ink leading-relaxed mb-5">
          Meet Simit, an orange street cat from Kadıköy. In eight short stories he shows you around his city, and
          you learn your first Turkish words and grammar along the way. Great for self-study or with a teacher.
        </p>

        <Features items={catCityFeatures} />

        <a href="/cat-city/dinle#bolum-1" className="inline-flex items-center gap-2 text-sm font-semibold text-brand underline mb-6">
          Listen to the stories, read by the author →
        </a>

        {site.bookUrl ? (
          <div className="flex items-center gap-4">
            <a href={site.bookUrl} target="_blank" rel="noreferrer" className="btn-primary px-6">
              Buy the e-book
            </a>
            {site.bookPrice && <span className="text-lg font-bold text-ink">{site.bookPrice}</span>}
          </div>
        ) : done ? (
          <p className="text-sm font-medium text-green-700 dark:text-green-400">Thanks! I'll email you when the book is out.</p>
        ) : (
          <EmailForm
            subject="Cat City İstanbul – notify me"
            label="Coming soon — get notified when it's out:"
            button="Notify me"
            onDone={() => setDone(true)}
          />
        )}
      </div>
    </div>
  )
}

function CaseBook() {
  const [done, setDone] = useState(false)

  return (
    <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-14 items-center">
      <img
        src={caseCover}
        alt="Hangi Durum Eki? book cover"
        className="w-56 md:w-72 rounded-lg shadow-xl rotate-[2deg] flex-shrink-0"
        loading="lazy"
      />

      <div lang="en">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">A1–B1 · Free sample</p>
        <h3 lang="tr" className="text-3xl md:text-4xl font-extrabold text-ink mb-1">Hangi Durum Eki?</h3>
        <p className="text-lg font-semibold text-brand mb-5">Which Grammatical Case?</p>

        <p className="text-ink leading-relaxed mb-5">
          <span lang="tr">Saate bakmak, köpekten korkmak, Ahmet'le evlenmek…</span> Which case does a Turkish verb
          take? This book answers the question my students ask me every week. Download the free sample with 30 verbs
          and practise with 30 exercises.
        </p>

        <Features items={caseFeatures} />

        {done ? (
          <div>
            <a href={samplePdf} download className="btn-primary px-6">
              Download the free PDF
            </a>
            <p className="text-sm text-muted mt-3">Thanks! I'll also let you know when the full book is out.</p>
          </div>
        ) : (
          <EmailForm
            subject="Hangi Durum Eki? – free sample"
            label="Get the free sample (PDF, 17 pages):"
            button="Get the PDF"
            onDone={() => setDone(true)}
          />
        )}
      </div>
    </div>
  )
}

export default function Book() {
  return (
    <section id="book" className="px-6 py-16 md:py-20 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-1">My Books</h2>
          <p lang="tr" className="text-brand font-semibold">Kitaplarım</p>
        </div>
        <div className="space-y-16">
          <CatCity />
          <CaseBook />
        </div>
      </div>
    </section>
  )
}
