import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <>
    <nav className='nav-container'>
        <div className="container nav-div d-flex">
            <ul className='d-flex navItems'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Portfolio</li>
                <li>Profile</li>
            </ul>
        </div>
    </nav>
    </>
  );
}
