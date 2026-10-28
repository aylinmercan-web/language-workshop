import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import posts from './data/posts'
import { blogMeta } from './pages/Blog'
import { catCityAudioMeta } from './pages/CatCityAudio'

export const siteUrl = 'https://turkishwithaylin.com'

export const pages = [
  {
    path: '/',
    title: 'Turkish with Aylin | Online Turkish Lessons',
    description:
      'Online Turkish lessons with Aylin Mercan, a qualified native teacher since 2016. Build confidence and fluency, and read Cat City İstanbul, an A1 Turkish reader.',
  },
  { path: '/blog', ...blogMeta },
  { path: '/cat-city/dinle', ...catCityAudioMeta, noindex: true },
  ...posts.map((p) => ({
    path: `/blog/${p.slug}`,
    title: `${p.title} (${p.titleEn}) | Turkish with Aylin`,
    description: p.summary,
  })),
]

export function render(path) {
  globalThis.__PAGE_PATH__ = path
  return renderToString(<App />)
}
