import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='c1'> 
      <h1>Welcome to To-Do list</h1>
    </div>
    <div className='header'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
    </>
  )
}

export default Header
