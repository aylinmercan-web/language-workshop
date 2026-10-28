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

export const catCityAudioMeta = {
  title: 'Cat City İstanbul · Dinle | Turkish with Aylin',
  description: 'Listen to the stories of Cat City İstanbul, read by the author Aylin Mercan.',
}

export default function CatCityAudio() {
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
              <audio controls preload="none" src={`/audio/cat-city-bolum-${i + 1}.mp3`} className="w-full" />
            </li>
          ))}
        </ol>

        <p lang="tr" className="max-w-3xl mx-auto text-center text-muted text-sm mt-10">
          Türkçeye benimle devam etmek ister misiniz?{' '}
          <a href="/#booking" className="text-brand font-semibold underline">Book a lesson</a>
        </p>
      </main>
    </>
  )
}
