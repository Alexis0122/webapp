import { useState, useEffect, useCallback } from 'react'
import useNavigation from './useNavigation'

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [error, setError] = useState<string | null>(null) // Estado para capturar el error
  const { goTo } = useNavigation()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedToken = localStorage.getItem('jwtToken')
      setToken(savedToken)
      setIsMounted(true)
    }
  }, [])

  useEffect(() => {
    console.log('isAuthenticated changed:', Boolean(token))
    console.log('Current localStorage:', localStorage.getItem('jwtToken'))
  }, [token])

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const response = await fetch(
          'https://crowdevsserviceapi.azurewebsites.net/api/v1/Auth/User/authenticate',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              accept: 'application/json'
            },
            body: JSON.stringify({ username: email, password })
          }
        )

        const result = await response.json()
        console.log('API Response JSON:', result)

        if (response.ok) {
          console.log('User authenticated successfully:', result)
          localStorage.setItem('jwtToken', result.jwtToken)
          setToken(result.jwtToken)
          goTo('/')
        } else {
          console.error('Error from API:', result)
          return { error: result.error || 'Authentication failed' }
        }
      } catch (error) {
        console.error('Error connecting to the API:', error)
        return { error: 'Error connecting to the API' }
      }
    },
    [goTo]
  )

  const logout = useCallback(() => {
    console.log('Before logout. Current localStorage:', localStorage.getItem('jwtToken'))

    localStorage.clear()

    console.log('After removing jwtToken. Current localStorage:', localStorage.getItem('jwtToken'))

    setToken(null)
    goTo('/login')
  }, [goTo])

  const isAuthenticated = Boolean(token)

  return { token, login, logout, isAuthenticated, isMounted, error } // Devolvemos el estado de error
}
