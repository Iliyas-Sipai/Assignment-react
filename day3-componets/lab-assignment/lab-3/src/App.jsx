import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassCompo from './ClassCompo'
import Funcompo from './Funcompo.JSx'


function App() {

  return (
    <>
       <ClassCompo/>
       <Funcompo name="iliyas" city= "agol" age={20}/>
    </>
  )
}

export default App
