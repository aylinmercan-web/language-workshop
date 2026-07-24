import { useState } from 'react'
import words from '../data/words.json'

const palettes = [
  { light: 'bg-teal-50 border-teal-300', solid: 'bg-teal-600 border-teal-600', label: 'text-teal-700', backMain: 'text-white', backLabel: 'text-white/80' },
  { light: 'bg-amber-50 border-accent', solid: 'bg-accent border-accent', label: 'text-amber-700', backMain: 'text-teal-900', backLabel: 'text-teal-900/70' },
]

export default function Flashcards() {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const word = words[index]
  const palette = palettes[index % palettes.length]

  const next = () => {
    setFlipped(false)
    setIndex((i) => (i + 1) % words.length)
  }

  const prev = () => {
    setFlipped(false)
    setIndex((i) => (i - 1 + words.length) % words.length)
  }

  return (
    <section id="flashcards" className="px-6 py-16 md:py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2">Practice with Flashcards</h2>
        <p className="text-muted mb-10">Click the card to reveal the translation.</p>

        <div className="w-full max-w-sm mx-auto h-52 [perspective:1200px]">
          <button
            type="button"
            onClick={() => setFlipped((f) => !f)}
            className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500 cursor-pointer"
            style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            {/* Front — Turkish */}
            <div
              className={`absolute inset-0 [backface-visibility:hidden] rounded-2xl border-2 shadow-sm flex flex-col items-center justify-center gap-2 px-6 ${palette.light}`}
            >
              <span className="text-2xl font-semibold text-ink">{word.front}</span>
              <span className={`text-xs font-bold uppercase tracking-wide ${palette.label}`}>Turkish</span>
            </div>

            {/* Back — English */}
            <div
              className={`absolute inset-0 [backface-visibility:hidden] rounded-2xl border-2 shadow-sm flex flex-col items-center justify-center gap-2 px-6 ${palette.solid}`}
              style={{ transform: 'rotateY(180deg)' }}
            >
              <span className={`text-2xl font-semibold text-center ${palette.backMain}`}>{word.back}</span>
              <span className={`text-xs font-bold uppercase tracking-wide ${palette.backLabel}`}>English</span>
            </div>
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button type="button" onClick={prev} className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors">
            Previous
          </button>
          <span className="text-sm text-muted">{index + 1} / {words.length}</span>
          <button type="button" onClick={next} className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </section>
  )
}
