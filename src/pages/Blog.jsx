import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import { categories, sortedPosts } from '../data/posts'
import { setPageMeta } from '../utils/meta'

export const blogMeta = {
  title: 'Blog: Turkish Readings, Words & Learning Tips | Turkish with Aylin',
  description:
    'Free Turkish readings, everyday phrases, grammar tips and advice for learning Turkish. Every post is in Turkish first, with an English translation.',
}

export default function Blog() {
  const [active, setActive] = useState('all')

  useEffect(() => {
    setPageMeta(blogMeta.title, blogMeta.description)
  }, [])

  const used = categories.filter((c) => sortedPosts.some((p) => p.category === c.id))
  const shown = active === 'all' ? sortedPosts : sortedPosts.filter((p) => p.category === active)

  const chip = (selected) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      selected ? 'bg-primary text-white' : 'bg-card border border-line text-ink hover:border-primary'
    }`

  return (
    <>
      <header className="bg-hero pb-12">
        <div className="max-w-4xl mx-auto px-6 pt-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Blog</h1>
          <p lang="tr" className="text-white font-medium max-w-xl mx-auto">
            Türkçe okumalar, kelimeler, dil bilgisi, dil öğrenme ipuçları ve kültür.
          </p>
          <p className="text-white/80 text-sm max-w-xl mx-auto mt-1">
            Readings, words, grammar, learning tips and culture: Turkish first, English when you need it.
          </p>
        </div>
      </header>

      <main className="px-6 py-12">
        <div lang="tr" className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 mb-10">
          <button type="button" onClick={() => setActive('all')} className={chip(active === 'all')}>
            Hepsi
          </button>
          {used.map((c) => (
            <button key={c.id} type="button" title={c.en} onClick={() => setActive(c.id)} className={chip(active === c.id)}>
              {c.tr}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {shown.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </main>
    </>
  )
}
