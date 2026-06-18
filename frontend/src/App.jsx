import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx'
import ConvertPage from './pages/convert-page.jsx'
import Footer from './components/footer.jsx'
import CompressPage from './pages/compress-page.jsx'
import ResizePage from './pages/resize-page.jsx'
import AboutPage from './pages/about.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/convert" element={<ConvertPage />} />
        <Route path='/compress' element={<CompressPage />} />
        <Route path='/resize' element={<ResizePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
