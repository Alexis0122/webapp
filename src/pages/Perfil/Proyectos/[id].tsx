import React, { useState } from 'react'
import { ProjectCard } from '@/components/common'
import useNavigation from '@/hooks/useNavigation'
import { useUserProjects } from '@/hooks/useUserProjects'
import router from 'next/router'
import { Group, Button } from '@mantine/core'
import { ProjectModal } from '@/features/Modales/ProjectModal'
import { CreateProjectForm, EditProjectForm, Project, SendEditProjectForm } from '@/types/Project'
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
  const [loadingModalData, setLoadingModalData] = useState<boolean>(false)
  const { token } = useAuth()

  // Cargar los datos del proyecto cuando se abre el modal
  const handleOpenModal = async (project: Project) => {
    setLoadingModalData(true)
    setSelectedProjectId(project.id)
    setSelectedProject(null) // Limpia cualquier dato anterior del proyecto

    try {
      const url = `https://crowdevsserviceapi.azurewebsites.net/api/v1/Project/${project.id}`
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()

      if (response.ok) {
        const formData = mapProjectToForm(data) // Mapea la respuesta de la API
        setSelectedProject(formData)
        open() // Abre el modal solo después de haber cargado los datos
      } else {
        console.error('Error al cargar los detalles del proyecto')
        toast.error('Hubo un error al cargar los detalles del proyecto.')
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error)
      toast.error('Hubo un error al cargar los detalles del proyecto.')
    } finally {
      setLoadingModalData(false)
    }
  }

  const handleSave = async (data: EditProjectForm, projectId: string) => {
    try {
      const projectData = selectedProject // Valores actuales del proyecto, los que ya están en el modal

      if (!projectData) {
        toast.error('No se pudo cargar los datos del proyecto.')
        return
      }

      // Ver los datos actuales del proyecto y los datos enviados desde el formulario
      console.log('Datos actuales del proyecto:', projectData)
      console.log('Datos enviados desde el formulario:', data)

      // Crear el objeto FormData
      const formData = new FormData()

      // Añadir el campo TITLE (convertido a mayúsculas en el nombre de la columna)
      formData.append('Title', data.title.charAt(0).toUpperCase() + data.title.slice(1))

      // Añadir el campo DESCRIPTION (convertido a mayúsculas en el nombre de la columna)
      formData.append(
        'Description',
        data.description.charAt(0).toUpperCase() + data.description.slice(1)
      )

      // Añadir FinancialTarget solo si ha cambiado y es válido
      if (
        data.financialTarget !== undefined &&
        data.financialTarget !== projectData.financialTarget
      ) {
        formData.append('FinancialTarget', String(data.financialTarget))
      }

      // Añadir Equity solo si ha cambiado y no es null ni undefined
      if (data.equity !== null && data.equity !== undefined && data.equity !== projectData.equity) {
        formData.append('Equity', String(data.equity)) // Convertir a string si es un número
      }

      // Verificar si startDate ha cambiado
      formData.append('StartDate', data.startDate.toISOString())

      // Verificar si endDate ha cambiado
      formData.append('EndDate', data.endDate.toISOString())

      // Verificar si status ha cambiado
      if (data.status && data.status !== projectData.status) {
        formData.append('Status', data.status)
      }

      // Ver los campos que se están añadiendo al FormData
      console.log('Campos añadidos al FormData:', Object.fromEntries(formData.entries()))

      // Realizar la solicitud PUT con los datos actualizados en el FormData
      const url = `https://crowdevsserviceapi.azurewebsites.net/api/v1/Project/${projectId}`
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData // Enviar el FormData con los campos añadidos
      })

      // Verificar el código de respuesta
      if (response.ok) {
        toast.success('Proyecto actualizado con éxito.') // Mensaje de éxito
      } else {
        const errorData = await response.json()
        toast.error(`Error al actualizar el proyecto: ${errorData.message || 'Error desconocido'}`) // Mensaje de error
      }

      // Opcionalmente, puedes recargar la página después de un breve tiempo si es necesario
      // setTimeout(() => {
      //   router.reload()
      // }, 1000)
    } catch (error) {
      console.error('Error al realizar la solicitud PUT:', error)
      toast.error('Hubo un error al actualizar el proyecto.') // Mensaje en caso de error en la solicitud
    }
  }

  const handleDelete = async (projectId: string) => {
    try {
      const url = `https://crowdevsserviceapi.azurewebsites.net/api/v1/Project/${projectId}`
      const response = await axios.delete(url, {
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
      {selectedProject && selectedProjectId && !loadingModalData && (
        <ProjectModal
          opened={modalOpened}
          onClose={close}
          onSave={handleSave}
          defaultValues={selectedProject}
          projectId={selectedProjectId}
          onDelete={() => handleDelete(selectedProjectId)}
        />
      )}
      {loadingModalData && <p>Cargando datos del proyecto...</p>}
      <Group>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div className='projectDetails' key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={`https://crowdevsserviceapi.azurewebsites.net${project.imageUrl}`}
                amountCollected={`${project.amountCollected.toLocaleString()}`}
                amountCollectedValue={project.amountCollected}
                financialTarget={`${project.financialTarget.toLocaleString()}`}
                donationPercentage={(
                  (project.amountCollected / project.financialTarget) *
                  100
                ).toFixed(2)}
                buttonURL={() => handleOpenModal(project)} // Abre el modal al hacer clic
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
