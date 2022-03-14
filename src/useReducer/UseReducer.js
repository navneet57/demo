import React, { useReducer, useState } from 'react'
import Model from './Model'
import { data } from './Data'
import { reducer } from './reducer'

const defaultState = {
  people: data,
  isModel: true,
  modelContent: '',
}
const UseReducer = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'Add_Item', paylod: newItem })
      setName('')
    } else {
      dispatch({ type: 'Empty_Value' })
    }
  }

  const closeModel = () => {
    dispatch({ type: 'Close_Model' })
  }
  const removeItem = (id) => {
    dispatch({ type: 'Remove_Item', paylod: id })
  }
  return (
    <>
      {state.isModel && (
        <Model closeModel={closeModel} modelContent={state.modelContent} />
      )}

      <div className='items'>
        <form onSubmit={handleSubmit}>
          <div className='input-item'>
            <input
              type='text'
              name='age'
              id='age'
              value={name}
              onChange={(e) => setName(e.target.value)}
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
      {state.people.map((item) => {
        return (
          <div key={item.id} className='item' style={{ minWidth: '250px' }}>
            <p>{item.name}</p>
            <button
              style={{ color: 'blueviolet' }}
              onClick={() => removeItem(item.id)}
              className='remove'
            >
              remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default UseReducer
