import React from 'react'
import { useState } from 'react/cjs/react.development'
import './Menu.css'

function Menu() {
  const [show, setShow] = useState(false)

  console.log(show)
  const MenuItem = () => {
    return (
      <div className='items'>
        <ul>
          <li onClick={() => setShow(!show)}>Home</li>
          <li onClick={() => setShow(!show)}>Contact</li>
          <li onClick={() => setShow(!show)}>Projects</li>
          <li onClick={() => setShow(!show)}>About</li>
        </ul>
      </div>
    )
  }
  return (
    <>
      <button onClick={() => setShow(!show)} className='btn'>
        <i className='material-icons'>menu</i>
      </button>

      {show && <MenuItem />}
    </>
  )
}

export default Menu
