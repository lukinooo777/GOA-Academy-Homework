import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './comp1.jsx/index.js'
import App from './comp2/comp2.jsx/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
