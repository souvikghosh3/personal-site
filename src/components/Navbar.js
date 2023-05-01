import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className="navLinks">
            <Link to="/">Home</Link>&nbsp;
            <Link to="/resume">Resume</Link>&nbsp;
            <Link to="/hobbies">Hobbies</Link>&nbsp;
            <Link to="/game">Two Truths and a Lie</Link>
        </div>
    </nav>
  )
}
