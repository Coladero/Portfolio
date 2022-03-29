import React from 'react'
import { Link } from 'react-router-dom'
import "../css/navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
    <Link className='navbar-link' to="/">About me</Link>
    <Link className='navbar-link' to="/skills">Skills</Link>
    <Link className='navbar-link' to="/myWork">My Work</Link>
    </div>
  )
}

export default Navbar