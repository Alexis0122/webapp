import { ProjectDetails } from '@/features/ProjectDetails'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Loader, Center, Group, Tabs, Stack } from '@mantine/core'
import useNavigation from '@/hooks/useNavigation'
import { Star } from '@phosphor-icons/react'

export default function ProjectDetailPage() {
  const router = useRouter()
  const { id } = router.query // Obtenemos el ID desde la URL
  const [project, setProject] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return // Si no hay un ID, no hacer nada
      try {
        const response = await axios.get(
          `https://crowdevsserviceapi.azurewebsites.net/api/v1/Project/${id}`
        )
        setProject(response.data) // Guardamos la data del proyecto
      } catch (error) {
        console.error('Error fetching project:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [id])

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    )
  }

  if (!project) {
    return <div>Proyecto no encontrado</div>
  }

  const { goTo } = useNavigation()

  return (
    <Stack>
      <Group mt='md' justify='center'>
        <Tabs defaultValue='Crowdfunding' variant='pills' radius='md'>
          <Tabs.List>
            <Tabs.Tab leftSection={<Star size={12} />} value='Home' onClick={() => goTo('/')}>
              Home
            </Tabs.Tab>
            <Tabs.Tab
              leftSection={<Star size={12} />}
              value='Crowdfunding'
              onClick={() => goTo('/Search/AllProjects')}
            >
              Crowdfunding
            </Tabs.Tab>
            <Tabs.Tab leftSection={<Star size={12} />} value='About' onClick={() => goTo('/about')}>
              About
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Group>
      <ProjectDetails
        images={project.imagesUrls.map((img: string) => ({
          url: `https://crowdevsserviceapi.azurewebsites.net${img}`
        }))}
        campaignInfo={{
          campaingState: project.status,
          titleCampaing: project.title,
          usernameCampaing: project.tenant.userName,
          descriptionCampaing: project.description,
          aboutUsercampaing: `${project.tenant.firstName} ${project.tenant.lastname}`,
          price: project.financialTarget,
          priceDescription: `Meta de financiamiento: $${project.financialTarget}`,
          informacionSupport: `Patronajes: ${project.patronageCount}`,
          userImageUrl: project.tenant.imageUrl || '',
          buttonPago: () => goTo('/')
        }}
        timelineInfo={{
          titleTimeline: 'Project Timeline', // Ejemplo estático, puedes modificar según tu lógica
          descriptionTimeline: 'Descripción del timeline', // Lo mismo aquí
          activeBar: 3 // Esta es una barra activa de ejemplo, puedes obtenerlo de otro lugar si lo necesitas
        }}
        perkSections={project.gratifications.map((perk: any) => ({
          title: perk.title,
          text: perk.include,
          image: `${perk.imageUrl}`, // Asegúrate de que este campo sea una URL válida
          number: perk.amount,
          category: 'Gratificación'
        }))}
        description={{
          title: 'Descripción del Proyecto',
          image: `https://crowdevsserviceapi.azurewebsites.net${project.imagesUrls[0]}`, // Usar la primera imagen como portada
          text: project.description
        }}
      />
    </Stack>
  )
}
