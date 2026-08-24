import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import order: Bootstrap first (grid + modal structural CSS),
// then Tailwind (utility classes) and finally the custom animations.
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './animations.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
