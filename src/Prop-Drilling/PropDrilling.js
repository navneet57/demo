import React, { useState } from 'react'
import { data } from './Data'

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    setPeople(people.filter((item) => item.id !== id))
  }
  return (
    <>
      <h1>Prop Drilling</h1>
      <List data={people} removeItem={removeItem} />
    </>
  )
}

const List = ({ data, removeItem }) => {
  return (
    <>
      {data.map((item) => {
        return <People key={item.id} {...item} removeItem={removeItem} />
      })}
    </>
  )
}

const People = ({ id, name, removeItem }) => {
  return (
    <div className='item'>
      <p>{name}</p>
      <button className='remove' onClick={() => removeItem(id)}>
        remove
      </button>
    </div>
  )
}
export default PropDrilling
