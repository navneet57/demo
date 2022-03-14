import React from 'react'
import { Link } from 'react-router-dom'
import data from './Data'

const User = () => {
  return (
    <>
      <h1>User Page</h1>
      {data.map((item) => {
        const { name, id } = item
        return (
          <div
            key={id}
            className='item'
            style={{ widt: '100%', maxWidth: '400px' }}
          >
            <p>{name}</p>
            <Link
              style={{ color: 'crimson' }}
              className='link'
              to={`/user/${id}`}
            >
              more info
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default User
