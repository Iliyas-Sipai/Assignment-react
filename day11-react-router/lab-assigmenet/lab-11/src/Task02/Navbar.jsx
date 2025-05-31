import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contect from './Contect';

const Navbar = () => {
const navStyle = {
    display: "flex",
    gap: "20px",
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  };
  return (
    <>
       <BrowserRouter>
      <div style={{borderColor:"red"}}> 
        <nav style={navStyle}>
          <Link to="/home" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contect />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
    
  )
}

export default Navbar
