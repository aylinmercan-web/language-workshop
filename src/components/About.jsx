const facts = [
  'Teaching since 2016',
  'Teaching online since 2020',
  'Over 6,000 online lessons',
  'BA in Translation and Interpreting',
  'MA in Interpersonal Communication',
  'Certificate in Teaching Turkish as a Foreign Language',
  'Native speaker from Turkey',
]

export default function About() {
  return (
    <section id="about" className="px-6 py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 text-center">Merhaba, I'm Aylin!</h2>

        <ul className="flex flex-wrap justify-center gap-2 mb-8">
          {facts.map((f) => (
            <li key={f} className="rounded-full bg-mint border border-line px-3 py-1 text-xs font-semibold text-brand">
              {f}
            </li>
          ))}
        </ul>

        <div className="space-y-4 text-ink leading-relaxed">
          <p>
            I'm a qualified Turkish teacher with a Master's degree. I've been teaching Turkish since 2016, and online
            since 2020, to students from all around the world. I grew up in İzmir and spent many of my adult years in
            İstanbul.
          </p>
          <p>
            My lessons are interactive and focus on speaking, to build your <strong>confidence</strong> and{' '}
            <strong>fluency</strong>. I use course books and online materials, with an intercultural approach, and
            I plan every lesson around your goals. And yes, we laugh a lot: humor is one of my favourite teaching tools.
          </p>
          <p>
            Learning a language isn't always easy, but I'll support you every step of the way. All you need is to
            take the first step and keep learning a little every day!
          </p>
        </div>
      </div>
    </section>
  )
}
