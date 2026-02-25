import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import AppRoutes from './routes/AppRoutes'
import Header from './components/shared/Header'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header />
    <AppRoutes />
   
    </BrowserRouter>
  )
}

export default App
