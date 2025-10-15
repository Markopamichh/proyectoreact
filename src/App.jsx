
import { Fragment } from 'react'
import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Container from './components/Container'

function App() {
  const [saludo, setSaludo] = useState("Hola desde el contenedor!");


  return (
    <>
      <NavBar />
      <Container />
    </>
  )
}

export default App
