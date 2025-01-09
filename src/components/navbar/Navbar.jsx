import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        Progressor Capital
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
       </div>
    </div>
  )
}

export default Navbar
