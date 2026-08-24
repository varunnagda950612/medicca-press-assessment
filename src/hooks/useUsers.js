import { useEffect, useState } from 'react'

const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

/**
 * Fetches the user data from the JSONPlaceholder API.
 */
export function useUsers() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchUsers() {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(USERS_ENDPOINT, {
          signal: controller.signal,
        })
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Could not load the user directory. Please try again.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()

    // Cancel the in-flight request if the component unmounts before it
    return () => controller.abort()
  }, [])

  return { users, isLoading, error }
}
