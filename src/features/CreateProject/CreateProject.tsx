import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CreateProjectSchema } from './CreateProject.utils'
import { CreateProjectForm, ProjectGratificationForm } from '@/types/Project'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, Group, Stack, Title } from '@mantine/core'
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
    console.log('Gratificaciones actualizadas:', updatedGratifications)
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Stack mt={20} justify='center'>
            <Title>Crea tu propio proyecto</Title>
            <Grid>
              <Grid.Col>
                <TextInputController
                  control={control}
                  name='title'
                  textInputProps={{
                    label: 'Título',
                    placeholder: 'CrowdevTest'
                  }}
                />
              </Grid.Col>

              <Grid.Col>
                <TextareaController
                  control={control}
                  name='description'
                  textareaProps={{
                    label: 'Descripción',
                    placeholder: 'Descripción...'
                  }}
                />
              </Grid.Col>

              <Grid.Col>
                <ImportProjectImage control={control} />
              </Grid.Col>

              <Grid.Col span={{ xs: 12, sm: 6, md: 6 }}>
                <DatePickerInputController
                  control={control}
                  name='startDate'
                  datePickerProps={{
                    label: 'Fecha de inicio',
                    placeholder: 'DD/MM/YY'
                  }}
                />
              </Grid.Col>

              <Grid.Col span={{ xs: 12, sm: 6, md: 6 }}>
                <DatePickerInputController
                  control={control}
                  name='endDate'
                  datePickerProps={{
                    label: 'Fecha de finalización',
                    placeholder: 'DD/MM/YY'
                  }}
                />
              </Grid.Col>

              <Grid.Col>
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
                    label: 'Estado',
                    placeholder: 'Estado'
                  }}
                />
              </Grid.Col>

              <Grid.Col>
                <GratificationProject control={control} />
                <GratificationForm onGratificationSubmit={handleGratificationSubmit} />
              </Grid.Col>
            </Grid>
          </Stack>
          <Group grow mb={20}>
            <Button onClick={() => goTo('/')}>Cancelar</Button>
            <Button type='submit'>Crear Proyecto</Button>
          </Group>
        </form>
      </FormProvider>
    </>
  )
}
