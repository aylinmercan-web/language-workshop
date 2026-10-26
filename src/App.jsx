import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { currentPath } from './utils/path'

function getPage() {
  const path = currentPath()
  if (path === '/blog') return <Blog />
  if (path.startsWith('/blog/')) return <Post slug={path.split('/')[2]} />
  return <Home />
}

function App() {
  return (
    <div>
      {getPage()}
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
