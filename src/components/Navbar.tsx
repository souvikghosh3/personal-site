import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <h1>
          <Link to="/">Souvik Ghosh</Link>
        </h1>
        
        <div className="navLinks">
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About</Link>
        </div>
    </nav>
  )
}
