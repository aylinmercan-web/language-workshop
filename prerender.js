import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const { render, pages, siteUrl } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const page of pages) {
  const url = siteUrl + (page.path === '/' ? '/' : page.path)
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${escape(page.description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(page.title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(page.description)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace('</head>', page.noindex ? '  <meta name="robots" content="noindex" />\n  </head>' : '</head>')
    .replace('<div id="root"></div>', `<div id="root" data-path="${page.path}">${render(page.path)}</div>`)

  const file = page.path === '/' ? path.join(dist, 'index.html') : path.join(dist, page.path, 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
  console.log('prerendered', page.path)
}

const urls = pages.filter((p) => !p.noindex).map((p) => `  <url>\n    <loc>${siteUrl}${p.path === '/' ? '/' : p.path}</loc>\n  </url>`).join('\n')
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
