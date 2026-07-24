import { useState } from 'react'
import axiosInstance from '../api/axiosInstance'

const initialForm = { name: '', email: '', level: '', date: '', message: '' }

function validate(form) {
  const errors = {}
  if (form.name.trim().length < 3) errors.name = 'Name must be at least 3 characters.'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Please enter a valid email address.'
  if (!form.level) errors.level = 'Please select a level.'
  if (!form.date) errors.date = 'Please select a date.'
  return errors
}

export default function BookingForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

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
      await axiosInstance.post('/lesson-booking', form)
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="booking" className="px-6 py-16 md:py-20 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2 text-center">Book a Lesson</h2>
        <p className="text-muted mb-8 text-center">Pick a level and a date that works for you, and I'll get back to you.</p>

        <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-5">
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
            <label className="field-label" htmlFor="level">Your Level</label>
            <select id="level" name="level" value={form.level} onChange={handleChange} className="field-input">
              <option value="">Select</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            {errors.level && <p className="field-error">{errors.level}</p>}
          </div>

          <div>
            <label className="field-label" htmlFor="date">Preferred Date</label>
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
            <p className="text-sm text-green-600 text-center">Thanks — your request has been received!</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600 text-center">Something went wrong, please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
