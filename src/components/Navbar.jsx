import React from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'
const Navbar = () => {
  return (
    <>
      <header className="custom-header">
        <div className="custom-container">
          <h1 className="custom-logo">Logo</h1>
          <nav>
            <ul className="custom-nav">
              <li className="custom-nav-item">
                <Link to="/" className="custom-nav-link">Home</Link>
              </li>
              <li className="custom-nav-item">
                <Link to="/contact" className="custom-nav-link">Contact</Link>
              </li>
              <li className="custom-nav-item">
                <Link to="/about" className="custom-nav-link">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

    </>
  )
}

export default Navbar
