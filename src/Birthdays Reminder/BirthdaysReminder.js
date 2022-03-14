import React, { useEffect, useState } from 'react'
import './birthdaysReminder.css'
const url = 'https://randomuser.me/api/'
const data = [
  {
    id: 1,
    name: 'Same',
    age: '25',
  },
  {
    id: 2,
    name: 'Rama',
    age: '30',
  },
  {
    id: 3,
    name: 'James',
    age: '50',
  },
  {
    id: 4,
    name: 'Max',
    age: '10',
  },
  {
    id: 5,
    name: 'Sara',
    age: '21',
  },
]
const BirthdaysReminder = () => {
  const [person, setPerson] = useState(data)

  const removePerson = (id) => {
    setPerson((oldPerson) => {
      let newPerson = oldPerson.filter((person) => person.id !== id)
      return newPerson
    })
  }

  return (
    <>
      <section className='section-birthdays'>
        <h1> {person.length} Birthdays Today</h1>
        {person.map((person) => {
          const { id, name, age } = person

          return (
            <>
              <div className='items-birthdays'>
                <div key={id} className='item-birthdays'>
                  <i className='material-icons'>account_circle</i>
                  <p>
                    {name} <span>{age}</span>
                  </p>
                </div>
                <button onClick={() => removePerson(id)} className='remove'>
                  <i className='material-icons'>delete</i>
                </button>
              </div>
              <br />
            </>
          )
        })}
        <br />
        <br />
        <button onClick={() => setPerson([])} className='remove'>
          Clear All
        </button>
      </section>
    </>
  )
}

export default BirthdaysReminder
