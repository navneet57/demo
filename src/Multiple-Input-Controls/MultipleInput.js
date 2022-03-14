import React, { useState } from 'react'

const MultipleInput = () => {
  const [person, setPerson] = useState({ fName: '', age: '', email: '' })
  const [people, setPeople] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (person.fName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() }

      setPeople([...people, newPerson])
      setPerson({ fName: '', age: '', email: '' })
    } else {
      console.log('error')
    }
  }
  return (
    <>
      <h1>Multiple Input</h1>
      <div className='items'>
        <form onSubmit={submitHandler}>
          <div className='itnput-item'>
            <label htmlFor='fName'>Name</label>
            <input
              type='text'
              id='fName'
              name='fName'
              value={person.fName}
              onChange={handleChange}
            />
          </div>
          <div className='input-item'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='input-item'>
            <label htmlFor='age'>Age</label>
            <input
              type='text'
              name='age'
              id='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button
            style={{ backgroundColor: 'blueviolet' }}
            className='remove'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
      {people.map((peoples) => {
        const { email, fName, age, id } = peoples
        return (
          <div className='items' key={id}>
            <p>
              {fName} {age} {email}
            </p>
          </div>
        )
      })}
    </>
  )
}

export default MultipleInput
