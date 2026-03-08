import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //StrictMode intentionally renders components twice in development to help you cath side effects and bugs. It only does this in dev mode — your production build will render normally.
  <StrictMode>
    <App />
  </StrictMode>,
)
