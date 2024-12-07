import React from 'react'
import { ProjectCard } from '@/components/common'
import useNavigation from '@/hooks/useNavigation'
import { useUserProjects } from '@/hooks/useUserProjects'
import router from 'next/router'
import { Group } from '@mantine/core'

export default function PerfilPage() {
  const { id } = router.query
  const { projects, loading, error } = useUserProjects(id as string)
  const { goTo } = useNavigation()

  if (loading) return <p>Cargando proyectos...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <Group>
      {projects.length > 0 ? (
        projects.map((project) => (
          <div className='projectDetails'>
            <ProjectCard
              key={project.id}
              title={project.title}
              imageUrl={`https://crowdevsserviceapi.azurewebsites.net${project.imageUrl}`}
              amountCollected={`${project.amountCollected.toLocaleString()}`}
              amountCollectedValue={project.amountCollected}
              financialTarget={`${project.financialTarget.toLocaleString()}`}
              donationPercentage={(
                (project.amountCollected / project.financialTarget) *
                100
              ).toFixed(2)}
              buttonURL={() => goTo(`/Project/${project.id}`)}
            />
          </div>
        ))
      ) : (
        <p>No tienes proyectos creados aún.</p>
      )}
    </Group>
  )
}
