import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import FSenha from './pages/FSenha'
import './App.css'
import SSave from './pages/SSave'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <main>
      <BrowserRouter>
       <Routes>
        
        <Route path='/' element={<Login/>}/>
        <Route path='/FSenha' element={<FSenha/>}/>
        <Route path='/Cadastro' element={<Cadastro/>}/>
        <Route path='/SSave' element={<SSave/>}/>

       </Routes>
      </BrowserRouter>
      </main>
    </div>
  )
}

export default App
