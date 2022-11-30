import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      
      <h1>Bem vindo ao Final Boss</h1>
      <main>
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Login/>}/> 
        
      </Routes>
    </BrowserRouter>
    </main>
    </div>
  )
}

export default App
