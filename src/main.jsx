import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { currentPath } from './utils/path'
import './index.css'

const root = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if (root.dataset.path === currentPath()) {
  ReactDOM.hydrateRoot(root, app)
} else {
  root.innerHTML = ''
  ReactDOM.createRoot(root).render(app)
}
