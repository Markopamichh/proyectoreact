
import { Fragment } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0)
  const [nombre, setNombre] = useState('marko')
  console.log('counter', counter)
  return (
    <>
      <p>contador: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>incrementar</button>
      <button onClick={() => setCounter(counter - 1)}>decrementar</button>
      <button onClick={() => setCounter(0)}>resetear</button>
      <p>nombre: {nombre}</p>
      <button onClick={() => setNombre('kito')}>cambiar nombre</button>

    </>
  )
}

export default App
