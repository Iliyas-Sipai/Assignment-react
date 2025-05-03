import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterUse from './CounterUse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterUse/>
    </>
  )
}

export default App
