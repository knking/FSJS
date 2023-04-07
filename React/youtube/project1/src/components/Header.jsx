import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
        <h1>TechStart</h1>
        <main>
            <Link to={"/"}>Home</Link>
            <Link to={"/contact"}>Contsct</Link>
            <Link to={"/#about"}>About</Link>
            <Link to={"/#brands"}>Brands</Link>
            <Link to={"/services"}>Services</Link>
            
            
        </main>
    </nav>
  )
}

export default Header
