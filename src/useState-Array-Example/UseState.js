import React, { useState } from 'react'

import { data } from './UseStateData'

const UseState = () => {
  const [item, setItem] = useState(data)

  const removeItem = (id) => {
    let itemAfterRemove = item.filter((item) => item.id !== id)
    setItem(itemAfterRemove)
  }
  return (
    <>
      {item.map((data) => {
        const { name, age, id } = data

        return (
          <div key={id} className='item'>
            <h3>
              {name}, {age}
            </h3>
            <button onClick={() => removeItem(id)} className='remove'>
              remove
            </button>
          </div>
        )
      })}
      <button onClick={() => setItem([])} className='remove'>
        Clear All items
      </button>
    </>
  )
}

export default UseState
