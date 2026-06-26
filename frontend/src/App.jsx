import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx'
import ConvertPage from './pages/convert-page.jsx'
import Footer from './components/footer.jsx'
import CompressPage from './pages/compress-page.jsx'
import ResizePage from './pages/resize-page.jsx'
import DarkModeToggle from './components/darkMode.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300 relative">
      <Navbar />
      <div className="relative max-w-480 mx-auto w-full z-20">
        <div className="absolute top-5 2xl:top-10 right-4 sm:right-10 md:right-30 2xl:right-28 z-30 transition-all">
          <DarkModeToggle />
        </div>
      </div>
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/convert" element={<ConvertPage />} />
          <Route path='/compress' element={<CompressPage />} />
          <Route path='/resize' element={<ResizePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
