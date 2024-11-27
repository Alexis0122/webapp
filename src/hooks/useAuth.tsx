import { useState, useEffect, useCallback } from 'react'
import useNavigation from './useNavigation'
import { AUTH_ENDPOINT } from '@/constants'

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
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
          'https://crowdevsserviceapi.azurewebsites.net/api/v1/'+ AUTH_ENDPOINT ,
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
          goTo('/', true)
        } else {
          console.error('Error from API:', result)
          throw new Error(result.message || 'Failed to authenticate')
        }
      } catch (error) {
        console.error('Error connecting to the API:', error)
        throw error
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

  return { token, login, logout, isAuthenticated, isMounted }
}