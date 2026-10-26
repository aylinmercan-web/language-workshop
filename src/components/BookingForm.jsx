import { useState } from 'react'
import { sendForm } from '../api/axiosInstance'

const initialForm = { name: '', email: '', type: 'private', level: '', date: '', message: '' }

function validate(form) {
  const errors = {}
  if (form.name.trim().length < 3) errors.name = 'Name must be at least 3 characters.'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Please enter a valid email address.'
  if (!form.level) errors.level = 'Please select a level.'
  if (form.type === 'private' && !form.date) errors.date = 'Please select a date.'
  return errors
}

export default function BookingForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const currentErrors = validate(form)
    setErrors(currentErrors)
    if (Object.keys(currentErrors).length > 0) return

    setStatus('sending')
    try {
      await sendForm(`${form.type === 'group' ? 'Group class' : 'Lesson'} request from ${form.name}`, form)
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="booking" className="px-6 py-16 md:py-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2 text-center">Book a Lesson</h2>
        <p className="text-muted mb-8 text-center">Pick a level and a date that works for you, and I'll get back to you.</p>

        <form onSubmit={handleSubmit} noValidate className="bg-card rounded-2xl border border-line p-6 md:p-8 space-y-5">
          <div>
            <label className="field-label" htmlFor="name">Your Name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} className="field-input" placeholder="Full name" />
            {errors.name && <p className="field-error">{errors.name}</p>}
          </div>

          <div>
            <label className="field-label" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="field-input" placeholder="you@example.com" />
            {errors.email && <p className="field-error">{errors.email}</p>}
          </div>

          <div>
            <label className="field-label" htmlFor="type">Lesson Type</label>
            <select id="type" name="type" value={form.type} onChange={handleChange} className="field-input">
              <option value="private">Private lesson</option>
              <option value="group">Group class</option>
            </select>
          </div>

          <div>
            <label className="field-label" htmlFor="level">Your Level</label>
            <select id="level" name="level" value={form.level} onChange={handleChange} className="field-input">
              <option value="">Select</option>
              <option value="A1">A1 – Beginner</option>
              <option value="A2">A2 – Elementary</option>
              <option value="B1">B1 – Intermediate</option>
              <option value="B2">B2 – Upper intermediate</option>
              <option value="C1">C1 – Advanced</option>
              <option value="not sure">Not sure</option>
            </select>
            {errors.level && <p className="field-error">{errors.level}</p>}
          </div>

          <div>
            <label className="field-label" htmlFor="date">Preferred Date{form.type === 'group' && ' (optional)'}</label>
            <input id="date" name="date" type="date" value={form.date} onChange={handleChange} className="field-input" />
            {errors.date && <p className="field-error">{errors.date}</p>}
          </div>

          <div>
            <label className="field-label" htmlFor="message">Message (optional)</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={3} className="field-input" placeholder="A few words about your goals..." />
          </div>

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
            {status === 'sending' ? 'Sending...' : 'Send Booking Request'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-green-600 dark:text-green-400 text-center">Thanks! Your request has been sent. I'll reply by email soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600 dark:text-red-400 text-center">Something went wrong, please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
