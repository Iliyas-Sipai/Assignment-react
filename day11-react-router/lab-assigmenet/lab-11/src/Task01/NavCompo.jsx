import React from 'react'
import Home from './Home'
import About from './About'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavCompo = () => {
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

  const containerStyle = {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "10px",
    fontFamily: "Arial, sans-serif",
  };
  return (
    
    <>
      <BrowserRouter>
      <div style={containerStyle}>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default NavCompo
