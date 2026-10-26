import { categoryOf, formatDate } from '../data/posts'

const levelColors = {
  A1: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200',
  A2: 'bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200',
  B1: 'bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200',
  B2: 'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200',
}

export function LevelBadge({ level }) {
  if (!level) return null
  return (
    <span className={`rounded-md px-2 py-0.5 text-xs font-extrabold ${levelColors[level] || 'bg-soft text-ink'}`}>
      {level}
    </span>
  )
}

export function PostMeta({ post, long = false }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
      <LevelBadge level={post.level} />
      <span lang="tr" className="font-semibold text-brand">
        {categoryOf(post)?.tr}
      </span>
      <span>·</span>
      <span>{long ? `${post.minutes} dk okuma` : `${post.minutes} dk`}</span>
      {long && (
        <>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
        </>
      )}
    </div>
  )
}

export default function PostCard({ post }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-card rounded-2xl border border-line p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="mb-3">
        <PostMeta post={post} />
      </div>
      <h3 lang="tr" className="text-lg font-bold text-ink">
        {post.title}
      </h3>
      <p className="text-xs text-muted mb-3">{post.titleEn}</p>
      <p lang="tr" className="text-sm text-ink leading-relaxed flex-1">
        {post.summaryTr}
      </p>
      <span lang="tr" className="mt-4 text-sm font-semibold text-brand group-hover:underline">
        Oku →
      </span>
    </a>
  )
}
