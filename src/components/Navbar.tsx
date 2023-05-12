import { Link } from 'gatsby'
import React, { useState } from 'react'
import * as styles from './Navbar.module.css'

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [navClassList, setNavClassList] =
    useState(`${styles.nav} ${styles.flex}`);

  function toggleExpanded() {
    setNavClassList(expanded
      ? `${styles.nav} ${styles.flex}`
      : `${styles.nav} ${styles.flex} ${styles.expanded}`);
    setExpanded(!expanded);
  }

  return (
    <header className={`${styles.header} ${styles.flex}`}>
        <h1>
          <Link to="/">Souvik Ghosh</Link>
        </h1>

        <button
          onClick={toggleExpanded}
          className={styles.mobileNavToggle}
          aria-controls="nav"
          aria-expanded={expanded ? "true" : "false"}>
          <span className={styles.srOnly}>Menu</span>
          {expanded? <CloseIcon /> : <HamburgerIcon />}
        </button>
        
        <nav id="nav" className={navClassList}>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About</Link>
        </nav>
    </header>
  )  
}

function CloseIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 100 100">
      <line
        x1="20"
        y1="80"
        x2="80"
        y2="20"
        stroke="var(--primary-color)"
        stroke-width="15"
        stroke-linecap="round"/>
      <line
        x1="20"
        y1="20"
        x2="80"
        y2="80"
        stroke="var(--primary-color)"
        stroke-width="15"
        stroke-linecap="round"/>
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 100 80" width="1.5rem" height="1.2rem" >
      <rect rx="10" width="100" height="20"></rect>
      <rect rx="10" y="30" width="100" height="20"></rect>
      <rect rx="10" y="60" width="100" height="20"></rect>
    </svg>
  );
}
