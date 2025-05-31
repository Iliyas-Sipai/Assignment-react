import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavCompo from './Task01/NavCompo'
import Navbar from './Task02/Navbar';
// import './App.css'

function App() {
 return(
  <>
  <NavCompo/>
  <Navbar/>
   </>
  )
}

export default App
