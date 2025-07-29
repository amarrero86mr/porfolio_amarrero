import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import DarkLightProvider from './components/darklight.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkLightProvider>
      <App />
    </DarkLightProvider>
  </StrictMode>,
)
