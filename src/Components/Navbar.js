import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/NavbarStyles.css';

export default function Navbar() {
  return (
    <nav>
        <div className='nav-text'>
        <NavLink className='link' to='/'>Home</NavLink>
        <div className='dropdown'>

            <NavLink className='dropbtn' to="/About">About us</NavLink>
            <div className='dropdown-menu'>
                <NavLink className='drop-link' to="/maintenance">Maintenance Services </NavLink>
                <NavLink className='drop-link' to="/landscaping">Landscaping Services </NavLink>
                
            </div>
        </div>
                <NavLink className='link' to="/contact">Contact Us</NavLink>
        </div>
    </nav>
  )
}

