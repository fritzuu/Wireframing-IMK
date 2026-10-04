import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PortalMotionProvider } from './components/motion/PortalMotion'
import './mobile.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortalMotionProvider><App /></PortalMotionProvider>
  </StrictMode>,
)
