import React, { useState } from 'react'
import { ProjectCard } from '@/components/common'
import useNavigation from '@/hooks/useNavigation'
import { useUserProjects } from '@/hooks/useUserProjects'
import router from 'next/router'
import { Group, Button } from '@mantine/core'
import { ProjectModal } from '@/features/Modales/ProjectModal'
import { CreateProjectForm, Project } from '@/types/Project'
import { mapProjectToForm } from '@/utils/mapProjectToForm'
import axios from 'axios'
import { useDisclosure } from '@mantine/hooks'
import { useAuth } from '@/hooks/useAuth'
import { toast } from 'react-toastify'

export default function PerfilPage() {
  const { id } = router.query
  const { projects, loading, error } = useUserProjects(id as string)
  const [selectedProject, setSelectedProject] = useState<CreateProjectForm | null>(null)
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const [modalOpened, { open, close }] = useDisclosure(false)
  const { token } = useAuth()

  const handleOpenModal = (project: Project) => {
    const formData = mapProjectToForm(project)
    setSelectedProject(formData)
    setSelectedProjectId(project.id)
    open()
  }

  //Todo: Arrelgar el manejo de actualizar
  const handleSave = async (data: CreateProjectForm, projectId: string) => {
    try {
      const url = `https://crowdevsserviceapi.azurewebsites.net/api/v1/Project/${projectId}`
      await axios.put(url, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      alert('Proyecto actualizado exitosamente')
    } catch (error) {
      console.error('Error al actualizar el proyecto:', error)
      alert('Hubo un error al actualizar el proyecto.')
    }
  }

  const handleDelete = async (projectId: string) => {
    try {
      const url = `https://crowdevsserviceapi.azurewebsites.net/api/v1/Project/${projectId}`
      await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      toast.success('Proyecto eliminado exitosamente')
      close()
      setTimeout(() => {
        router.reload()
      }, 2000)
    } catch (error) {
      console.error('Error al eliminar el proyecto:', error)
      toast.error('Hubo un error al eliminar el proyecto.')
    }
  }

  if (loading) return <p>Cargando proyectos...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      {selectedProject && selectedProjectId && (
        <ProjectModal
          opened={modalOpened}
          onClose={close}
          onSave={handleSave}
          defaultValues={selectedProject}
          projectId={selectedProjectId}
          onDelete={() => handleDelete(selectedProjectId)}
        />
      )}
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
                buttonURL={() => handleOpenModal(project)}
              />
            </div>
          ))
        ) : (
          <p>No tienes proyectos creados aún.</p>
        )}
      </Group>
    </>
  )
}
