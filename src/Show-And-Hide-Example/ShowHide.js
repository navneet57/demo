import React from 'react'
import { useState } from 'react/cjs/react.development'

const ShowHide = () => {
  const [text, setText] = useState(false)

  const showText = () => {
    setText(!text)
  }

  const Item = () => {
    return <h1>show</h1>
  }
  return (
    <>
      <h1>Show And Hide</h1>

      <button onClick={() => showText()} className='remove'>
        toggle
      </button>
      <br />
      <br />
      <br />
      {text && <Item />}
    </>
  )
}
export default ShowHide
