import { useRef, useState } from 'react'
import { verbs, persons, tenses, conjugate } from '../data/conjugation'

const letters = ['ç', 'ğ', 'ı', 'İ', 'ö', 'ş', 'ü']
const fold = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u' }

const clean = (s) =>
  s
    .toLocaleLowerCase('tr')
    .replace(/[.,!?]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const ascii = (s) => s.replace(/[çğıöşü]/g, (c) => fold[c])

function randomQuestion(prev) {
  let next = prev
  while (next.v === prev.v && next.p === prev.p) {
    next = { v: Math.floor(Math.random() * verbs.length), p: Math.floor(Math.random() * persons.length) }
  }
  return next
}

export default function ConjugationPractice() {
  const [tense, setTense] = useState('present')
  const [negative, setNegative] = useState(false)
  const [q, setQ] = useState({ v: 0, p: 0 })
  const [answer, setAnswer] = useState('')
  const [result, setResult] = useState(null)
  const [score, setScore] = useState({ right: 0, total: 0 })
  const [showTable, setShowTable] = useState(false)
  const inputRef = useRef(null)

  const verb = verbs[q.v]
  const person = persons[q.p]
  const tenseInfo = tenses.find((t) => t.id === tense)
  const correct = conjugate(verb, tense, q.p, negative)

  const next = () => {
    setQ((prev) => randomQuestion(prev))
    setAnswer('')
    setResult(null)
    setShowTable(false)
    inputRef.current?.focus()
  }

  const changeMode = (newTense, newNegative) => {
    setTense(newTense)
    setNegative(newNegative)
    setAnswer('')
    setResult(null)
    setShowTable(false)
  }

  const check = () => {
    let typed = clean(answer)
    if (!typed) return
    const pronoun = person.tr.toLocaleLowerCase('tr') + ' '
    if (typed.startsWith(pronoun)) typed = typed.slice(pronoun.length)

    const accepted = [correct]
    if (q.p === 5) accepted.push(conjugate(verb, tense, 2, negative))

    let r = 'wrong'
    if (accepted.includes(typed)) r = 'right'
    else if (accepted.some((a) => ascii(a) === ascii(typed))) r = 'almost'

    setResult(r)
    setScore((s) => ({ right: s.right + (r === 'right' ? 1 : 0), total: s.total + 1 }))
  }

  const onKeyDown = (e) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    result ? next() : check()
  }

  const insertLetter = (ch) => {
    const el = inputRef.current
    const start = el?.selectionStart ?? answer.length
    const end = el?.selectionEnd ?? answer.length
    setAnswer(answer.slice(0, start) + ch + answer.slice(end))
    requestAnimationFrame(() => {
      el?.focus()
      el?.setSelectionRange(start + 1, start + 1)
    })
  }

  const chip = (active) =>
    `rounded-full px-3.5 py-1.5 text-sm font-medium border transition-colors ${
      active ? 'bg-primary border-primary text-white' : 'bg-card border-line text-ink hover:border-primary'
    }`

  return (
    <section id="conjugation" className="px-6 py-16 md:py-20 bg-soft">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2">Conjugation Practice</h2>
          <p lang="tr" className="text-brand font-semibold">Çekimleme</p>
          <p className="text-muted mt-1">Choose a tense, then write the correct form of the verb.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {tenses.map((t) => (
            <button key={t.id} type="button" onClick={() => changeMode(t.id, negative)} className={chip(tense === t.id)}>
              <span lang="tr">{t.tr}</span>
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-2 mb-8">
          <button type="button" onClick={() => changeMode(tense, false)} className={chip(!negative)}>
            <span lang="tr">Olumlu</span> <span className="opacity-70">(+)</span>
          </button>
          <button type="button" onClick={() => changeMode(tense, true)} className={chip(negative)}>
            <span lang="tr">Olumsuz</span> <span className="opacity-70">(–)</span>
          </button>
        </div>

        <div className="bg-card border border-line rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-muted mb-1">
                {tenseInfo.en} · {negative ? 'negative' : 'positive'}
              </p>
              <p lang="tr" className="text-3xl font-bold text-ink">{verb.inf}</p>
              <p className="text-sm text-muted">{verb.en}</p>
            </div>
            {score.total > 0 && (
              <p className="text-sm font-semibold text-brand whitespace-nowrap">
                {score.right} / {score.total}
              </p>
            )}
          </div>

          <label htmlFor="conj-answer" className="flex items-center gap-3">
            <span lang="tr" className="text-xl font-semibold text-ink">{person.tr}</span>
            <input
              id="conj-answer"
              ref={inputRef}
              lang="tr"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={onKeyDown}
              readOnly={result !== null}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              className="field-input text-lg"
              placeholder="..."
            />
          </label>
          <p className="text-xs text-muted mt-1 ml-1">{person.tr} = {person.en}</p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {letters.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => insertLetter(l)}
                disabled={result !== null}
                className="h-9 w-9 rounded-lg border border-line bg-soft text-ink font-semibold hover:border-primary disabled:opacity-40"
              >
                {l}
              </button>
            ))}
          </div>

          {result && (
            <div
              className={`mt-5 rounded-xl px-4 py-3 text-sm ${
                result === 'right'
                  ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                  : result === 'almost'
                    ? 'bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                    : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-200'
              }`}
            >
              {result === 'right' && <p className="font-semibold"><span lang="tr">Doğru!</span> Well done.</p>}
              {result === 'almost' && <p className="font-semibold">Almost! Check the Turkish letters.</p>}
              {result === 'wrong' && <p className="font-semibold">Not quite.</p>}
              {result !== 'right' && (
                <p className="mt-1">
                  Correct answer: <strong lang="tr">{person.tr} {correct}</strong>
                </p>
              )}
              <p className="mt-2 opacity-80">{tenseInfo.tip}</p>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            {result ? (
              <button type="button" onClick={next} className="btn-primary">
                Next verb →
              </button>
            ) : (
              <button type="button" onClick={check} className="btn-primary">
                Check
              </button>
            )}
            {result && (
              <button
                type="button"
                onClick={() => setShowTable((s) => !s)}
                className="px-4 py-2 rounded-lg border border-line bg-card text-ink text-sm font-medium hover:bg-soft transition-colors"
              >
                {showTable ? 'Hide all forms' : 'See all forms'}
              </button>
            )}
          </div>

          {showTable && (
            <table lang="tr" className="mt-5 w-full text-sm">
              <tbody>
                {persons.map((p, i) => (
                  <tr key={p.tr} className={`border-t border-line ${i === q.p ? 'font-bold text-brand' : 'text-ink'}`}>
                    <td className="py-1.5 pr-4 w-20">{p.tr}</td>
                    <td className="py-1.5">{conjugate(verb, tense, i, negative)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <p className="text-center text-sm text-muted mt-6">
          Want to practise speaking, not just writing?{' '}
          <a href="#booking" className="text-brand font-semibold underline">Book a lesson</a>
        </p>
      </div>
    </section>
  )
}
