import React, { useEffect, useState } from 'react'

const UseEffectBasic = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect')
    document.title = `count ${count}`
  }, [count])
  console.log('render')
  return (
    <>
      <h1>UseEffect Basic</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} className='remove'>
        increse
      </button>
    </>
  )
}

export default UseEffectBasic
