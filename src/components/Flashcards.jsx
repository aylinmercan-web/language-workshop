import { useEffect, useState } from 'react'
import { phrases } from '../data/phrases'

const palettes = [
  { light: 'bg-mint border-teal-300 dark:border-teal-700', solid: 'bg-teal-600 border-teal-600', label: 'text-brand', backMain: 'text-white', backLabel: 'text-white/80' },
  { light: 'bg-cream border-accent', solid: 'bg-accent border-accent', label: 'text-amber-700 dark:text-amber-300', backMain: 'text-teal-900', backLabel: 'text-teal-900/70' },
]

const order = () => phrases.map((_, i) => i)

const shuffle = (list) => {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Flashcards() {
  const [deck, setDeck] = useState(order)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState(0)
  const [firstTry, setFirstTry] = useState(0)
  const [missed, setMissed] = useState([])
  const [turn, setTurn] = useState(0)

  useEffect(() => {
    setDeck(shuffle(order()))
  }, [])

  const total = phrases.length
  const done = deck.length === 0
  const card = done ? null : phrases[deck[0]]
  const palette = palettes[turn % palettes.length]

  const answer = (knowIt) => {
    const id = deck[0]
    setFlipped(false)
    setTimeout(() => {
      setTurn((t) => t + 1)
      if (knowIt) {
        setKnown((k) => k + 1)
        if (!missed.includes(id)) setFirstTry((f) => f + 1)
        setDeck((d) => d.slice(1))
      } else {
        if (!missed.includes(id)) setMissed((m) => [...m, id])
        setDeck((d) => [...d.slice(1), id])
      }
    }, flipped ? 250 : 0)
  }

  const restart = () => {
    setDeck(shuffle(order()))
    setKnown(0)
    setFirstTry(0)
    setMissed([])
    setFlipped(false)
  }

  return (
    <section id="flashcards" className="px-6 py-16 md:py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2">What Do You Say?</h2>
        <p className="text-muted mb-8">
          Everyday situations in Turkey. Think of the right phrase, then click the card to check.
        </p>

        <div className="max-w-sm mx-auto mb-4">
          <div className="flex justify-between text-sm text-muted mb-1">
            <span>Known: {known} / {total}</span>
            {!done && <span>Cards left: {deck.length}</span>}
          </div>
          <div className="h-2 rounded-full bg-soft overflow-hidden">
            <div className="h-full bg-primary transition-all duration-500" style={{ width: `${(known / total) * 100}%` }} />
          </div>
        </div>

        {done ? (
          <div className="w-full max-w-sm mx-auto rounded-2xl border-2 border-teal-300 dark:border-teal-700 bg-mint px-6 py-10">
            <p className="text-4xl mb-2">🎉</p>
            <p className="text-2xl font-semibold text-ink mb-1">Aferin!</p>
            <p className="text-muted mb-6">
              You knew {firstTry} of {total} on the first try.
            </p>
            <button type="button" onClick={restart} className="btn-primary">
              Play again
            </button>
          </div>
        ) : (
          <>
            <div className="w-full max-w-sm mx-auto h-56 [perspective:1200px]">
              <button
                type="button"
                onClick={() => setFlipped((f) => !f)}
                className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500 cursor-pointer"
                style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                <div
                  className={`absolute inset-0 [backface-visibility:hidden] rounded-2xl border-2 shadow-sm flex flex-col items-center justify-center gap-3 px-6 ${palette.light}`}
                >
                  <span className={`text-xs font-bold uppercase tracking-wide ${palette.label}`}>What do you say?</span>
                  <span className="text-xl font-semibold text-ink">{card.situation}</span>
                </div>

                <div
                  className={`absolute inset-0 [backface-visibility:hidden] rounded-2xl border-2 shadow-sm flex flex-col items-center justify-center gap-2 px-6 ${palette.solid}`}
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <span lang="tr" className={`text-3xl font-bold text-center ${palette.backMain}`}>{card.tr}</span>
                  {card.reply && (
                    <span className={`text-sm ${palette.backLabel}`}>
                      Reply: <span lang="tr" className="font-semibold">{card.reply}</span>
                    </span>
                  )}
                </div>
              </button>
            </div>

            <div className="mt-6 h-11 flex items-center justify-center gap-3">
              {flipped ? (
                <>
                  <button type="button" onClick={() => answer(false)} className="px-5 py-2.5 rounded-lg border-2 border-accent text-amber-700 dark:text-amber-300 text-sm font-semibold hover:bg-cream transition-colors">
                    ↻ Again
                  </button>
                  <button type="button" onClick={() => answer(true)} className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors">
                    ✓ I knew it
                  </button>
                </>
              ) : (
                <span className="text-sm text-muted">Say it out loud, then flip the card.</span>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
