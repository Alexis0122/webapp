import React, { FC, useEffect, useState } from 'react'
import { Loader, Center, Space, Group } from '@mantine/core'
import { ProjectCard } from '@/components/common'
import axios from 'axios'
import { ProjectData } from '@/types/Project'
import useNavigation from '@/hooks/useNavigation'

import './ProjectData.css'
interface ProjectListProps {
  className?: string
}

export const ProjectList: React.FC<ProjectListProps> = ({ className }) => {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { goTo } = useNavigation()

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://crowdevsserviceapi.azurewebsites.net/api/v1/Project')

        if (!response.ok) {
          // Manejo de errores basado en el código de estado
          throw new Error(`Error fetching projects: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        setProjects(data) // Guardar los datos obtenidos en el estado
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false) // Asegurarse de que el loader se detenga
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <Center p='md'>
        <Loader />
      </Center>
    )
  }

  return (
    <Group>
      {projects.map((project) => {
        const donationPercentage = (
          (project.amountCollected / project.financialTarget) *
          100
        ).toFixed(2)
        return (
          <div className='projectDetails'>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={`https://crowdevsserviceapi.azurewebsites.net${project.imageUrl}`}
              amountCollected={`${project.amountCollected.toLocaleString()}`}
              amountCollectedValue={project.amountCollected}
              financialTarget={`${project.financialTarget.toLocaleString()}`}
              donationPercentage={`${donationPercentage}%`}
              buttonURL={() => goTo(`/Project/${project.id}`)}
            />
          </div>
        )
      })}
    </Group>
  )
}
