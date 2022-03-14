import React from 'react'
import { useFetch } from './UseFetch'

const url = 'https://api.github.com/users'

const CustomHooks = () => {
  const { loading, user } = useFetch(url)
  return (
    <>
      <h1> Customs Hooks </h1>
      <div className='items'>
        <h1>{loading ? 'Loading...' : 'UseFetch'}</h1>
      </div>
    </>
  )
}

export default CustomHooks
