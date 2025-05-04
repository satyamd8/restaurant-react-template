// Header.jsx
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import '../assets/styles.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Diso's</h1>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  )
}
