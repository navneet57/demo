import React, { useState } from 'react'

const UseState = () => {
  const [item, setItem] = useState({
    language: 'JavaScript',
    extension: '.js',
    frameWork: 'React',
  })

  const [language, setLanguage] = useState('JavaScript')
  const [extension, setExtension] = useState('.js')
  const [frameWork, setFrameWork] = useState('React')

  const changeItem = () => {
    // setItem({...item, frameWork: 'Angular'});
    frameWork !== 'React' ? setFrameWork('React') : setFrameWork('Angular')
  }
  return (
    <>
      <div className='items'>
        <h3>{language}</h3>
        <p>{extension}</p>
        <p>{frameWork}</p>
      </div>
      <button className='remove' onClick={() => changeItem()}>
        change items
      </button>
    </>
  )
}

export default UseState
