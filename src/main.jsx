import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  smoothTouch: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>

    <App />
    </BrowserRouter>
  </StrictMode>,

 
)
