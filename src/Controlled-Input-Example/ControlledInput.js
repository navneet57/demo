import React, { useState } from 'react'

const ControlledInput = () => {
  const [person, setPerson] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const onsubmitHandler = (e) => {
    e.preventDefault()
    if (name && email) {
      const persons = {
        name: name,
        email: email,
        id: new Date().getTime().toString(),
      }
      setPerson((person) => {
        return [...person, persons]
      })
    } else {
      console.log('empty input')
    }
    setName('')
    setEmail('')
  }

  const removePerson = (id) => {
    console.log(id)
    setPerson((oldPerson) => {
      const newPerson = oldPerson.filter((person) => person.id !== id)
      return newPerson
    })
  }
  return (
    <>
      <h1>Controlled Input</h1>
      <div className='items'>
        <form onSubmit={onsubmitHandler}>
          <div className='input-item'>
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='input-item'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className='remove'>Submit</button>
        </form>
      </div>
      {person.map((person) => {
        const { name, id, email } = person
        return (
          <div key={id} className='items'>
            <h1 style={{ fontSize: '115%' }}>
              name: {name}, Email: {email}
            </h1>
            <button className='remove' onClick={() => removePerson(id)}>
              <i className='material-icons'>delete</i>
            </button>
          </div>
        )
      })}
    </>
  )
}

export default ControlledInput
