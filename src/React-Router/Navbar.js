import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <ul className='item'>
        <li>
          <Link className='link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='link' to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link className='link' to='/project'>
            Project
          </Link>
        </li>
        <li>
          <Link className='link' to='/user'>
            user
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Navbar
