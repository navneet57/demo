import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const user = await response.json()
    setUser(user)
    setLoading(false)
  }
  useEffect(() => {
    getUsers()
  }, [url])
  return { loading, user }
}
