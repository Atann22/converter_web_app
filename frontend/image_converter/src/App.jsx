import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx'
import ConvertPage from './pages/convert-page.jsx'
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/convert" element={<ConvertPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
