import React, { useContext, useState } from 'react'
import { data } from './Data'

const PersonContext = React.createContext()

const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    setPeople(people.filter((item) => item.id !== id))
  }
  return (
    <PersonContext.Provider value={{ removeItem, people }}>
      <h1>Context API / useContext</h1>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  const datas = useContext(PersonContext)
  console.log(datas)
  return (
    <>
      {datas.people.map((item) => {
        return <People key={item.id} {...item} />
      })}
    </>
  )
}

const People = ({ id, name }) => {
  const { removeItem } = useContext(PersonContext)
  return (
    <div className='item'>
      <p>{name}</p>
      <button className='remove' onClick={() => removeItem(id)}>
        remove
      </button>
    </div>
  )
}
export default ContextAPI
