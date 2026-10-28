import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'
import CatCityAudio from './pages/CatCityAudio'
import Nav from './components/Nav'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { currentPath } from './utils/path'

function getPage() {
  const path = currentPath()
  if (path === '/blog') return <Blog />
  if (path === '/cat-city/dinle') return <CatCityAudio />
  if (path.startsWith('/blog/')) return <Post slug={path.split('/')[2]} />
  return <Home />
}

function App() {
  return (
    <div>
      <Nav />
      {getPage()}
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
