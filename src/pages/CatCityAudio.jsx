import { useEffect, useState } from 'react'
import catCityCover from '../assets/cat-city-cover.jpg'

const chapters = [
  { tr: 'Merhaba, ben Simit!', en: "Hello, I'm Simit!" },
  { tr: "Simit'in Ailesi", en: "Simit's Family" },
  { tr: "Simit'in Mahallesi", en: "Simit's Neighbourhood" },
  { tr: 'Simitçi Sermet Amca', en: 'Sermet the Simit Seller' },
  { tr: 'Balık Pazarında', en: 'At the Fish Market' },
  { tr: "Simit'in Bir Günü", en: "A Day in Simit's Life" },
  { tr: 'Yağmurlu Bir Gün', en: 'A Rainy Day' },
  { tr: 'Vapurla Büyük Macera', en: 'The Big Ferry Adventure' },
]

const check = '9e5eb20885a0b06d8f5e'
const storageKey = 'cat-city-kod'

export const catCityAudioMeta = {
  title: 'Cat City İstanbul · Dinle | Turkish with Aylin',
  description: 'Listen to the stories of Cat City İstanbul, read by the author Aylin Mercan.',
}

const clean = (code) =>
  code
    .trim()
    .toLocaleUpperCase('tr')
    .replace(/İ/g, 'I')
    .replace(/Ö/g, 'O')
    .replace(/Ü/g, 'U')
    .replace(/Ş/g, 'S')
    .replace(/Ç/g, 'C')
    .replace(/Ğ/g, 'G')
    .replace(/\s+/g, '')

async function sha(text) {
  const data = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(data)].map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 20)
}

async function folderFor(code) {
  const folder = await sha('cat-city:' + clean(code))
  return (await sha(folder)) === check ? folder : null
}

function readStored() {
  try {
    return localStorage.getItem(storageKey)
  } catch {
    return null
  }
}

function store(code) {
  try {
    localStorage.setItem(storageKey, code)
  } catch {
    return
  }
}

export default function CatCityAudio() {
  const [folder, setFolder] = useState(null)
  const [code, setCode] = useState('')
  const [status, setStatus] = useState('checking')

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('kod')
    const saved = fromUrl || readStored()
    if (!saved) {
      setStatus('idle')
      return
    }
    folderFor(saved).then((f) => {
      if (f) {
        store(saved)
        setFolder(f)
        setStatus('open')
        requestAnimationFrame(() => document.querySelector(window.location.hash || 'none')?.scrollIntoView())
      } else {
        setStatus('idle')
      }
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const f = await folderFor(code)
    if (!f) {
      setStatus('wrong')
      return
    }
    store(code)
    setFolder(f)
    setStatus('open')
    requestAnimationFrame(() => document.querySelector(window.location.hash || 'none')?.scrollIntoView())
  }

  return (
    <>
      <header className="bg-hero px-6 pt-12 pb-14">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8">
          <img src={catCityCover} alt="Cat City İstanbul" className="w-32 rounded-lg shadow-xl rotate-[-2deg]" />
          <div className="text-center sm:text-left">
            <p lang="tr" className="text-white/90 font-semibold mb-1">Simit'in Maceraları</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Cat City <span lang="tr">İstanbul</span>
            </h1>
            <p lang="tr" className="text-white font-medium">Hikâyeleri dinleyin. Yazarın kendi sesinden.</p>
            <p className="text-white/80 text-sm mt-1">Listen to the stories, read by the author.</p>
          </div>
        </div>
      </header>

      <main className="px-6 py-12">
        {status === 'open' ? (
          <ol className="max-w-3xl mx-auto space-y-4">
            {chapters.map((c, i) => (
              <li
                key={c.tr}
                id={`bolum-${i + 1}`}
                className="scroll-mt-24 bg-card border border-line rounded-2xl p-5 target:border-primary target:ring-2 target:ring-primary/40"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand">Bölüm {i + 1}</span>
                  <h2 lang="tr" className="text-lg font-bold text-ink">{c.tr}</h2>
                  <span className="text-sm text-muted">{c.en}</span>
                </div>
                <audio controls preload="none" src={`/audio/${folder}/cat-city-bolum-${i + 1}.mp3`} className="w-full" />
              </li>
            ))}
          </ol>
        ) : status === 'checking' ? (
          <div className="h-40" />
        ) : (
          <form onSubmit={handleSubmit} noValidate className="max-w-sm mx-auto text-center">
            <p lang="tr" className="text-lg font-bold text-ink mb-1">Dinleme kodunu gir</p>
            <p className="text-sm text-muted mb-1"><span lang="tr">Kodu kitabı satın aldığında gelen e-postada bulabilirsin.</span></p>
            <p className="text-sm text-muted mb-6">You'll find the code in your purchase email.</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="KOD"
                aria-label="Kod"
                autoCapitalize="characters"
                className="field-input uppercase"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Dinle
              </button>
            </div>
            {status === 'wrong' && (
              <p className="field-error">
                <span lang="tr">Kod yanlış.</span> Wrong code.
              </p>
            )}
            <p className="text-sm text-muted mt-8">
              <span lang="tr">Kitabın yok mu?</span>{' '}
              <a href="/#book" className="text-brand font-semibold underline">Cat City İstanbul</a>
            </p>
          </form>
        )}
      </main>
    </>
  )
}
