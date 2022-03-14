import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import data from './Data'
const Person = () => {
  const [name, setName] = useState('')

  const { id } = useParams()
  useEffect(() => {
    const nperson = data.find((item) => item.id === parseInt(id))

    setName(nperson)
  }, [])
  return (
    <>
      <div className='items'>
        <h3 className='items'> person </h3>
        <h3 className='items'>Name: {name.name}</h3>
        <p className='items'>Age: {name.age}</p>
        <Link
          className='link items'
          style={{
            borderRadius: '5px',
            background: 'crimson',
            padding: '0.5rem',
            color: '#fff',
          }}
          to='/user'
        >
          back to user
        </Link>
      </div>
    </>
  )
}

export default Person
