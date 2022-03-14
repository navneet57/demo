import React from 'react'
import { Link } from 'react-router-dom'
import Data from './Data'
import './Projects.css'
const Home = () => {
  return (
    <>
      <h2 className='h1-home'>
        Following are all sample projects that I make to practice reactjs
      </h2>
      <br />
      <br />
      youtube Tutorial:
      <a href='https://www.youtube.com/watch?v=iZhV0bILFb0&t=0s'>
        https://www.youtube.com/watch?v=iZhV0bILFb0&t=0s
      </a>
      <br />
      <br />
      icons:
      <a href='https://fonts.google.com/icons?selected=Material+Icons+Outlined'>
        https://fonts.google.com/icons?selected=Material+Icons+Outlined
      </a>
      <br />
      <br />
      source code Github:
      <a href='https://github.com/jyotip101/react-practice-projects'>
        https://github.com/jyotip101/react-practice-projects
      </a>
      <br />
      <br />
      <br />
      <ul className='ulLinks'>
        {Data.map((item) => {
          const { id, text, path } = item
          return (
            <li key={id}>
              <Link to={path}>{text}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Home
