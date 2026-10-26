import { useEffect, useState } from 'react'
import PostCard, { PostMeta } from '../components/PostCard'
import posts, { sortedPosts } from '../data/posts'
import { setPageMeta } from '../utils/meta'

function Translation({ text, show }) {
  if (!show) return null
  return <p className="mt-2 text-sm md:text-base leading-relaxed text-muted italic">{text}</p>
}

function Paragraph({ block, showAll }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="py-3">
      <p lang="tr" className="text-lg leading-relaxed text-ink">
        {block.tr}
      </p>
      <Translation text={block.en} show={showAll || open} />
      {!showAll && (
        <button type="button" onClick={() => setOpen((o) => !o)} className="mt-1 text-xs font-semibold text-brand hover:underline">
          {open ? 'Hide English' : 'Show English'}
        </button>
      )}
    </div>
  )
}

function Block({ block, showAll }) {
  if (block.h) {
    return (
      <h2 className="mt-8 mb-1">
        <span lang="tr" className="block text-xl font-bold text-ink">
          {block.h.tr}
        </span>
        <span className="block text-sm font-normal text-muted">{block.h.en}</span>
      </h2>
    )
  }

  if (block.examples) {
    return (
      <ul className="my-4 rounded-xl border border-line bg-soft divide-y divide-line">
        {block.examples.map((ex) => (
          <li key={ex.tr} className="px-4 py-3">
            <span lang="tr" className="font-semibold text-ink">
              {ex.tr}
            </span>
            <span className="block text-sm text-muted">{ex.en}</span>
          </li>
        ))}
      </ul>
    )
  }

  if (block.tip) {
    return (
      <div className="my-6 rounded-xl border-l-4 border-primary bg-mint px-5 py-4">
        <p lang="tr" className="font-semibold text-ink">
          💡 {block.tip.tr}
        </p>
        <Translation text={block.tip.en} show />
      </div>
    )
  }

  return <Paragraph block={block.p} showAll={showAll} />
}

export default function Post({ slug }) {
  const post = posts.find((p) => p.slug === slug)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    if (post) setPageMeta(`${post.title} (${post.titleEn}) | Turkish with Aylin`, post.summary)
  }, [post])

  if (!post) {
    return (
      <>
        <main className="px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-ink mb-4">Yazı bulunamadı · Post not found</h1>
          <a href="/blog" className="text-brand font-semibold underline">
            Blog
          </a>
        </main>
      </>
    )
  }

  const related = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <main className="px-6 py-10 md:py-14">
        <article className="max-w-2xl mx-auto">
          <a href="/blog" lang="tr" className="text-sm font-semibold text-brand hover:underline">
            ← Tüm yazılar
          </a>

          <div className="mt-6 mb-3">
            <PostMeta post={post} long />
          </div>
          <h1 lang="tr" className="text-3xl md:text-4xl font-extrabold text-ink">
            {post.title}
          </h1>
          <p className="text-lg text-muted mt-1 mb-6">{post.titleEn}</p>

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-mint border border-line px-4 py-3 mb-4">
            <p className="text-sm text-ink">
              <span lang="tr" className="font-semibold">
                Önce Türkçesini okuyun.
              </span>{' '}
              Stuck? Tap “Show English”.
            </p>
            <button
              type="button"
              onClick={() => setShowAll((s) => !s)}
              className="rounded-full bg-card border border-line px-3 py-1 text-xs font-semibold text-brand hover:border-primary"
            >
              {showAll ? 'Hide all translations' : 'Show all translations'}
            </button>
          </div>

          <div>
            {post.blocks.map((b, i) => (
              <Block key={i} block={b} showAll={showAll} />
            ))}
          </div>

          {post.glossary && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-ink mb-4">
                <span lang="tr">Kelimeler</span> <span className="text-sm font-normal text-muted">· Key words</span>
              </h2>
              <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {post.glossary.map(([tr, en]) => (
                  <div key={tr} className="flex gap-2 text-sm border-b border-line pb-2">
                    <dt lang="tr" className="font-semibold text-ink">
                      {tr}
                    </dt>
                    <dd className="text-muted">– {en}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {post.note && (
            <aside className="mt-10 rounded-2xl bg-cream border border-amber-200 dark:border-line p-5">
              <h2 className="font-bold text-ink mb-1">
                <span lang="tr">Biliyor muydunuz?</span> <span className="text-sm font-normal text-muted">· Did you know?</span>
              </h2>
              <p lang="tr" className="text-sm text-ink leading-relaxed">
                {post.note.tr}
              </p>
              <Translation text={post.note.en} show />
            </aside>
          )}

          <section className="mt-10 rounded-2xl bg-hero p-6 text-center text-white">
            <h2 className="text-xl font-bold mb-1" lang="tr">
              Bu konuyu Türkçe konuşalım mı?
            </h2>
            <p className="text-white/90 text-sm mb-5">
              Let’s talk about it in Turkish! In my lessons we read and discuss texts like this one, at your level.
            </p>
            <a
              href="/#booking"
              className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-bold text-teal-700 shadow-md hover:bg-gray-50"
            >
              Book a Lesson
            </a>
          </section>
        </article>

        {related.length > 0 && (
          <section className="max-w-4xl mx-auto mt-16">
            <h2 lang="tr" className="text-xl font-bold text-ink mb-6 text-center">
              Diğer yazılar
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
