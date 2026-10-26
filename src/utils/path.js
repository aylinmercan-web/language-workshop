export function currentPath() {
  if (typeof window === 'undefined') return globalThis.__PAGE_PATH__ || '/'
  return window.location.pathname.replace(/\/+$/, '') || '/'
}
