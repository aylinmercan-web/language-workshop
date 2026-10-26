import { featuredPosts } from '../data/posts'
import PostCard from './PostCard'

export default function BlogPreview() {
  return (
    <section id="blog" className="px-6 py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2 text-center">
          <span lang="tr">Blog</span>
        </h2>
        <p className="text-muted mb-10 text-center max-w-xl mx-auto">
          Readings, Turkish words and grammar, learning tips and culture. Every post is in Turkish first, with an
          English translation when you need it.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredPosts().map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/blog" lang="tr" className="text-sm font-semibold text-brand underline">
            Tüm yazılar →
          </a>
        </div>
      </div>
    </section>
  )
}
