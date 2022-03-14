import React from 'react'
import { useEffect } from 'react'

const Model = ({ closeModel, modelContent }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeModel(false)
    }, 1000)
    return () => clearTimeout(timeout)
  })
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '40%',
          right: 'auto',
        }}
      >
        <h2>{modelContent}</h2>
      </div>
    </>
  )
}

export default Model
