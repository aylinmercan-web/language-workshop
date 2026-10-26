import { useState } from 'react'
import cover from '../assets/cat-city-cover.jpg'
import { site } from '../config'
import { sendForm } from '../api/axiosInstance'

const features = [
  '8 short illustrated stories',
  'Picture dictionary and grammar notes',
  'Activities with an answer key',
  'English versions of the stories',
]

function NotifyForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('invalid')
      return
    }
    setStatus('sending')
    try {
      await sendForm('Cat City İstanbul – notify me', { email })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <p className="text-sm font-medium text-green-700 dark:text-green-400">Thanks! I'll email you when the book is out.</p>
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-sm">
      <p className="text-sm font-semibold text-ink mb-2">Coming soon — get notified when it's out:</p>
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
          Notify me
        </button>
      </div>
      {status === 'invalid' && <p className="field-error">Please enter a valid email address.</p>}
      {status === 'error' && <p className="field-error">Something went wrong, please try again.</p>}
    </form>
  )
}

export default function Book() {
  return (
    <section id="book" className="px-6 py-16 md:py-20 bg-cream">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 md:gap-14 items-center">
        <img
          src={cover}
          alt="Cat City İstanbul book cover"
          className="w-56 md:w-72 rounded-lg shadow-xl rotate-[-2deg] flex-shrink-0"
          loading="lazy"
        />

        <div lang="en">
          <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">My book · A1 Turkish reader</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-1">Cat City <span lang="tr">İstanbul</span></h2>
          <p lang="tr" className="text-lg font-semibold text-brand mb-5">Simit'in Maceraları</p>

          <p className="text-ink leading-relaxed mb-5">
            Meet Simit, an orange street cat from Kadıköy. In eight short stories he shows you around his city, and
            you learn your first Turkish words and grammar along the way. Great for self-study or with a teacher.
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-7">
            {features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-ink">
                <span className="text-brand font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>

          {site.bookUrl ? (
            <div className="flex items-center gap-4">
              <a href={site.bookUrl} target="_blank" rel="noreferrer" className="btn-primary px-6">
                Buy the e-book
              </a>
              {site.bookPrice && <span className="text-lg font-bold text-ink">{site.bookPrice}</span>}
            </div>
          ) : (
            <NotifyForm />
          )}
        </div>
      </div>
    </section>
  )
}
