import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserData from './UserData'
import Counter from './Counter'

function App() {

  return (
    <>
     <UserData  name = "iliyas" city = "agol" age = {20}/>
     <Counter/>
    </>
  )
}

export default App
