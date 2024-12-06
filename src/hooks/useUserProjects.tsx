import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Project } from '@/types/Project'
import axios from 'axios'

export const useUserProjects = (userId: string | string[] | undefined) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { token } = useAuth()

  useEffect(() => {
    const fetchProjects = async () => {
      if (!token || !userId) return

      try {
        setLoading(true)
        const response = await axios.get<Project[]>(
          `https://crowdevsserviceapi.azurewebsites.net/api/v1/Project/getAllProjectsByUser`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        setProjects(response.data)
      } catch (err: any) {
        setError(err.response?.data?.message || 'Error al obtener los proyectos del usuario.')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [token, userId])

  return { projects, loading, error }
}
