import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx'
import ConvertPage from './pages/convert-page.jsx'
import Footer from './components/footer.jsx'
import CompressPage from './pages/compress-page.jsx'
import ResizePage from './pages/resize-page.jsx'
import AboutPage from './pages/about.jsx'
import DarkModeToggle from './components/darkMode.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
      <Navbar />
      <div className="w-full max-w-6xl mx-auto px-4 pt-4 sm:pt-10 flex justify-end">
        <DarkModeToggle />
      </div>
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/convert" element={<ConvertPage />} />
          <Route path='/compress' element={<CompressPage />} />
          <Route path='/resize' element={<ResizePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
