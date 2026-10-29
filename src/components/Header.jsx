import profilFoto from '../assets/profil.jpeg'

const bullets = [
  'Improve fluency',
  'Speak confidently',
  'Improve communication',
  'Speak Turkish for success!',
]

function scrollTo(e, href) {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
  return (
    <header className="bg-hero flex items-center min-h-[calc(100svh-60px)]">
      <div className="w-full max-w-6xl mx-auto px-6 py-14 md:py-20 flex flex-col md:flex-row md:items-center gap-10 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="hero-pop inline-block bg-[#E30A17] text-white font-extrabold text-sm md:text-base px-4 py-2 rounded-lg -rotate-2 shadow-md mb-6">
            LEARN TURKISH WITH <span lang="tr">AYLİN</span>
          </h1>

          <ul className="space-y-1 mb-8">
            {bullets.map((b, i) => (
              <li key={b} style={{ animationDelay: `${250 + i * 180}ms` }} className="hero-up text-white font-extrabold text-xl md:text-3xl lg:text-4xl uppercase leading-tight">
                {b}
              </li>
            ))}
          </ul>

          <a
            href="#booking"
            onClick={(e) => scrollTo(e, '#booking')}
            style={{ animationDelay: '1000ms' }}
            className="hero-up inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm md:text-base font-bold text-teal-700 shadow-md hover:bg-gray-50 transition-colors"
          >
            Book a Lesson
          </a>
        </div>

        <div style={{ animationDelay: '300ms' }} className="hero-up relative w-full max-w-[260px] md:max-w-[340px] lg:max-w-[440px] mx-auto md:mx-0 flex-shrink-0">
          <div className="rounded-full p-2 bg-white">
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
