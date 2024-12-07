import React, { FC, useEffect, useState } from 'react'
import { Loader, Center, Space } from '@mantine/core'
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
        const response = await axios.get(
          'https://crowdevsserviceapi.azurewebsites.net/api/v1/Project',
          {}
        )
        setProjects(response.data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    )
  }

  return (
    <div className='projectContainer'>
      <div className='projectGrid'>
        {projects.map((project) => {
          const donationPercentage = (
            (project.amountCollected / project.financialTarget) *
            100
          ).toFixed(2)
          return (
            <div className='projectDetails' key={project.id}>
              <ProjectCard
                title={project.title}
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
      </div>
    </div>
  )
}
