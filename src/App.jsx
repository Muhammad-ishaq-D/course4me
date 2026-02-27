import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import AppRoutes from './routes/AppRoutes'
import Header from './components/shared/Header'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/shared/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header />
    <AppRoutes />
   <Footer />
    </BrowserRouter>
  )
}

export default App
