import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CreateProjectSchema } from './CreateProject.utils'
import { CreateProjectForm, ProjectGratificationForm } from '@/types/Project'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, Group, Stack, Title, Text, Space } from '@mantine/core'
import {
  DatePickerInputController,
  SelectController,
  TextareaController,
  TextInputController
} from '@/components/form/controllers'
import { ImportProjectImage } from './ImportProjectImage'
import { ProjectStatus } from '@/constants'
import { GratificationForm } from './Components'
import { GratificationProject } from './Components/Gratification/GratificationProject'
import useNavigation from '@/hooks/useNavigation'
import { useAuth } from '@/hooks/useAuth'
import { FormProvider } from '@/context/FormContext'
import './CreateProject.modules.css'
import { toast } from 'react-toastify'

export const CreateProject = () => {
  const { goTo } = useNavigation()
  const { token } = useAuth() // Obtener el token desde la autenticación

  const methods = useForm<CreateProjectForm>({
    resolver: yupResolver(CreateProjectSchema),
    shouldFocusError: true,
    mode: 'onChange' // Cambia a 'onChange' si deseas validación en cada cambio
  })
  const { control, handleSubmit, trigger, setValue, formState, watch } = methods
  const { isValid, errors } = formState
  const [gratifications, setGratifications] = useState<ProjectGratificationForm[]>([])

  // Monitorear valores en tiempo real para depuración
  const formDataWatcher = watch()
  console.log('Formulario actualizado:', formDataWatcher)
  console.log('Errores del formulario:', errors)
  console.log('Estado de validación (isValid):', isValid)

  const handleFormSubmit = async (data: CreateProjectForm) => {
    console.log('Datos del formulario enviados para creación:', data)

    // Crear el objeto FormData
    const formData = new FormData()

    // Añadir los campos básicos
    if (data.title) formData.append('title', data.title)
    if (data.description) formData.append('description', data.description)
    if (data.startDate) formData.append('startDate', data.startDate.toISOString())
    if (data.endDate) formData.append('endDate', data.endDate.toISOString())
    if (data.status) formData.append('status', data.status)
    if (data.financialTarget !== undefined)
      formData.append('financialTarget', String(data.financialTarget))
    if (data.equity !== undefined) formData.append('equity', String(data.equity))

    console.log('Campos básicos añadidos al FormData:', Object.fromEntries(formData.entries()))

    // // Añadir imágenes como archivos
    // if (Array.isArray(data.images) && data.images.length > 0) {
    //   console.log('Número de imágenes:', data.images.length)
    //   data.images.forEach((file, index) => {
    //     if (file instanceof File || file instanceof Blob) {
    //       console.log(`Añadiendo imagen ${index + 1}:`, file)
    //       formData.append('images', file) // Adjuntar el archivo directamente
    //     } else {
    //       console.error(`El elemento ${index + 1} no es un archivo válido:`, file)
    //     }
    //   })
    // } else {
    //   console.warn('No se añadieron imágenes. ¿Es obligatorio?')
    // }
    // Convertir las imágenes en archivos y añadirlas al FormData
    if (Array.isArray(data.images) && data.images.length > 0) {
      data.images.forEach((file, index) => {
        if (file instanceof File) {
          formData.append('images', file) // Adjuntar el archivo directamente
        } else {
          console.error(`El elemento ${index + 1} no es un archivo válido:`, file)
        }
      })
    } else {
      console.warn('No se añadieron imágenes. ¿Es obligatorio?')
    }
    // Agregar gratificaciones (si se requiere)
    if (gratifications.length > 0) {
      gratifications.forEach((gratification, index) => {
        Object.entries(gratification).forEach(([key, value]) => {
          if (value !== undefined) {
            formData.append(`gratifications[${index}][${key}]`, String(value))
          }
        })
      })
    } else {
      console.warn('No se añadieron gratificaciones. ¿Es obligatorio?')
    }

    // Realizar la petición a la API
    try {
      console.log('Enviando solicitud a la API...')
      const response = await fetch('https://crowdevsserviceapi.azurewebsites.net/api/v1/Project', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}` // Token para autenticación
        },
        body: formData
      })

      console.log('Respuesta de la API recibida. Estado:', response.status)

      if (!response.ok) {
        const errorMessage = await response.text()
        console.error('Error al crear el proyecto. Mensaje del servidor:', errorMessage)
        return
      }

      const responseData = await response.json()
      console.log('Proyecto creado exitosamente. Respuesta del servidor:', responseData)
    } catch (error) {
      console.error('Error al realizar la solicitud:', error)
    }
  }

  const handleGratificationSubmit = (data: ProjectGratificationForm) => {
    const updatedGratifications = [...gratifications, data]
    setGratifications(updatedGratifications)
    setValue('gratifications', updatedGratifications)
    setTimeout(() => {
      toast.success('Proyecto Creado')
      goTo('/')
    }, 1000)

  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Stack mt={20} justify='center'>
            <Title className='project-title'>Create your own project</Title>
            <Text className='project-subtitle'>Make your project easy to see and know.</Text>
            <Space h='xs' />
            <Grid>
              <Grid.Col>
                <Text className='project-sectiontitle'>Project title</Text>
                <Space h='md' />
                <Text className='project-sectionsubtitle'>
                  This is the first impression that potential sponsors will have. Make sure it is
                  brief, clear and attractive.
                </Text>
                <Space h='xs' />
                <TextInputController
                  control={control}
                  name='title'
                  textInputProps={{
                    placeholder: 'CrowdevTest'
                  }}
                />
                <Space h='md' />
              </Grid.Col>

              <Grid.Col>
                <Text className='project-sectiontitle'>Description</Text>
                <Space h='md' />
                <Text className='project-sectionsubtitle'>
                  Explain why your project is important, what makes it unique and how it will impact
                  the community or the world. Be sincere and passionate, and use language that
                  resonates with your audience.
                  <Space h='sm' />
                  Don't forget to include details about the objectives and how the funds raised will
                  be used.
                </Text>
                <Space h='xs' />
                <TextareaController
                  control={control}
                  name='description'
                  textareaProps={{
                    placeholder: 'Description...'
                  }}
                />
                <Space h='md' />
              </Grid.Col>

              <Grid.Col>
                <ImportProjectImage control={control} />
              </Grid.Col>

              <Grid.Col span={{ xs: 12, sm: 6, md: 6 }}>
                <Text className='project-sectiontitle'>Project Start</Text>
                <Space h='md' />
                <Text className='project-sectionsubtitle'>
                  Specify when your project will start. Make sure this date is realistic and gives
                  you enough time to prepare before launch.
                </Text>
                <Space h='sm' />
                <DatePickerInputController
                  control={control}
                  name='startDate'
                  datePickerProps={{
                    placeholder: 'DD/MM/YY'
                  }}
                />
                <Space h='md' />
              </Grid.Col>

              <Grid.Col span={{ xs: 12, sm: 6, md: 6 }}>
                <Text className='project-sectiontitle'>End Project</Text>
                <Space h='md' />
                <Text className='project-sectionsubtitle'>
                  Indicate when you plan to complete your project. This will help your sponsors
                  understand the timeline and manage their expectations.
                </Text>
                <Space h='sm' />
                <DatePickerInputController
                  control={control}
                  name='endDate'
                  datePickerProps={{
                    placeholder: 'DD/MM/YY'
                  }}
                />
                <Space h='md' />
              </Grid.Col>

              <Grid.Col>
                <Text className='project-sectiontitle'>State</Text>
                <Space h='md' />
                <Text className='project-sectionsubtitle'>
                  Describe what stage your project is currently in (planning, development, launch,
                  etc.). This will give sponsors a clear idea of how far you have come and what
                  remains to be done.
                </Text>
                <Space h='sm' />
                <SelectController
                  control={control}
                  name='status'
                  options={[
                    { label: 'Concepto', value: ProjectStatus.Concept },
                    { label: 'Prototipo', value: ProjectStatus.Prototype },
                    { label: 'Producción', value: ProjectStatus.Production },
                    { label: 'Enviado', value: ProjectStatus.Shipping },
                    { label: 'Entregado', value: ProjectStatus.Delivered },
                    { label: 'Finalizado', value: ProjectStatus.Ended }
                  ]}
                  selectProps={{
                    placeholder: 'State'
                  }}
                />
                <Space h='md' />
              </Grid.Col>

              <Grid.Col>
                <Text className='project-sectionsubtitle'>
                  Rewards are an excellent way to incentivize sponsors to contribute. contribute.
                  Offer different levels of rewards depending on the amount of the donation.
                  donation. Make sure they are attractive and valuable. The more creative they are,
                  the better.
                </Text>
                <Space h='md' />
                <GratificationProject control={control} />
                <Space h='md' />
                <GratificationForm onGratificationSubmit={handleGratificationSubmit} />
                <Space h='lg' />
              </Grid.Col>
            </Grid>
          </Stack>
          <Group grow mb={20}>
            <Button className='project-cancelbutton' onClick={() => goTo('/')}>
              CANCEL
            </Button>
            <Button className='project-createbutton' type='submit'>
            CREATE PROJECT
            </Button>
          </Group>
        </form>
      </FormProvider>
    </>
  )
}
