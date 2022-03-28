import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <NavLink to="/" >Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/skills">Skills</NavLink>
    <NavLink to="/project">Projects</NavLink>
    </div>
  )
}

export default Navbar