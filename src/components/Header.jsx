import profilFoto from '../assets/profil.jpeg'

const bullets = [
  'Improve fluency',
  'Speak confidently',
  'Improve communication',
  'Speak Turkish for success!',
]

export default function Header() {
  return (
    <header className="px-6 py-16 md:py-24 bg-teal-600">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-3">Language Workshop</p>
          <span className="inline-block bg-accent text-teal-900 font-extrabold text-sm md:text-base px-4 py-2 rounded-lg -rotate-2 shadow-md mb-6">
            LEARN TURKISH WITH AYLIN
          </span>

          <ul className="space-y-1 mb-8">
            {bullets.map((b) => (
              <li key={b} className="text-accent font-extrabold text-xl md:text-2xl uppercase leading-tight">
                {b}
              </li>
            ))}
          </ul>

          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm md:text-base font-bold text-teal-700 shadow-md hover:bg-gray-50 transition-colors"
          >
            Book a Trial Now and Achieve Your Future Goals!
          </a>
        </div>

        <div className="relative w-full max-w-[220px] mx-auto md:mx-0 flex-shrink-0">
          <div className="rounded-full p-2 bg-accent">
            <img
              src={profilFoto}
              alt="Aylin Mercan"
              className="w-full aspect-square object-cover object-top rounded-full"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
