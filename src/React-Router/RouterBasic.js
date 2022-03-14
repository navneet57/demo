import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './ReactRouter.css'
import Home from './Home'
import About from './About'
import Project from './Project'
import User from './User'
import Person from './Person'
import Navbar from './Navbar'

const RouterBasic = () => {
  return (
    <>
      <Router>
        <h1 style={{ marginTop: '-2rem' }}>React Router Basic</h1>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route exact path='/project' element={<Project />} />

          <Route exact path='/user' element={<User />}></Route>
          <Route exact path='/user/:id' element={<Person />} />

          <Route exact path='/about' element={<About />} />

          <Route
            path='*'
            element={
              <main className='items'>
                <h3>There's nothing here!</h3>
              </main>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default RouterBasic
