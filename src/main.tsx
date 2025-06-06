import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lesson1 from './pages/One.tsx'
import Lesson2 from './pages/Two.tsx'
import Lesson3 from './pages/Three.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/tech-studies/" element={<App />} />
        <Route path="/tech-studies/one" element={<Lesson1 />} />
        <Route path="/tech-studies/two" element={<Lesson2 />} />
        <Route path="/tech-studies/three" element={<Lesson3 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
