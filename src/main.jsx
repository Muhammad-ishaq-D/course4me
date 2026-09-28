import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// index.html (and pre-rendered snapshots) carry head tags for crawlers that
// do not run JavaScript. Each page renders its own, so drop these first to
// avoid two titles, descriptions or canonicals.
document.querySelectorAll('head [data-seo-default]').forEach((el) => el.remove())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
