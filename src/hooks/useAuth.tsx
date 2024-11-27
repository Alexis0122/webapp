import { useState, useEffect, useCallback } from 'react'
import useNavigation from './useNavigation'
import { AUTH_ENDPOINT } from '@/constants'

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const [id, setId] = useState<string | null>(null)

  const [isMounted, setIsMounted] = useState(false)
  const [error, setError] = useState<string | null>(null) // Estado para capturar el error
  const { goTo } = useNavigation()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedToken = localStorage.getItem('jwtToken')
      const savedId = localStorage.getItem('jwtID')

      setToken(savedToken)
      setId(savedId)
      setIsMounted(true)
    }
  }, [])

  useEffect(() => {
    console.log('isAuthenticated changed:', Boolean(token))
    // console.log('Current localStorage:', localStorage.getItem('jwtToken'))
    console.log('Current id:', localStorage.getItem('jwtID'))
  }, [token])

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const response = await fetch(
          'https://crowdevsserviceapi.azurewebsites.net/api/v1/' + AUTH_ENDPOINT,
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
          localStorage.setItem('jwtID', result.id)

          setToken(result.jwtToken)
          setId(result.id)
          goTo('/', true)
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
