export function setPageMeta(title, description) {
  document.title = title
  const tag = document.querySelector('meta[name="description"]')
  if (tag) tag.setAttribute('content', description)
}
