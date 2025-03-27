import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import Pokemon from './pages/Pokemon'
import Details from './pages/Details'
import Home from './pages/Home'
import Nav from './components/Nav'
import Favorites from './pages/Favorites'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokemon" element={<Pokemon/>}/>
        <Route path="/pokemon/:name" element={<Details/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
