import React, { useState, useEffect } from 'react'
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

export const CreateProject = () => {
  const { goTo } = useNavigation()

  const {
    control,
    handleSubmit,
    trigger,
    reset,
    setValue,
    formState: { isValid }
  } = useForm<CreateProjectForm>({
    resolver: yupResolver(CreateProjectSchema),
    shouldFocusError: true,
    mode: 'onBlur'
  })

  const [gratifications, setGratifications] = useState<ProjectGratificationForm[]>([])

  const handleFormSubmit = (data: CreateProjectForm) => {
    console.log('Datos del formulario:', data)
    reset()
    // TODO: Implementar lógica de guardado
  }

  const handleGratificationSubmit = (data: ProjectGratificationForm) => {
    setGratifications((prev) => [...prev, data])
    setValue('gratification', [...gratifications, data])
  }

  return (
    <>
      <Stack mt={20} justify='center'>
        <Title>Crea tu propio proyecto</Title>
        <Grid>
          <Grid.Col>
            <TextInputController
              control={control}
              name={'title'}
              textInputProps={{
                label: 'Titulo',
                placeholder: 'CrowdevTest'
              }}
            />
          </Grid.Col>

          <Grid.Col>
            <TextareaController
              control={control}
              name={'description'}
              textareaProps={{
                label: 'Descripcion',
                placeholder: 'descripcion...'
              }}
            />
          </Grid.Col>

          <Grid.Col>
            <ImportProjectImage control={control} />
          </Grid.Col>

          <Grid.Col span={{ xs: 12, sm: 6, md: 6 }}>
            <DatePickerInputController
              control={control}
              name={'startDate'}
              onChange={() => trigger('endDate')}
              datePickerProps={{
                label: 'Fecha de inicio',
                placeholder: 'DD/MM/YY'
              }}
            />
          </Grid.Col>

          <Grid.Col span={{ xs: 12, sm: 6, md: 6 }}>
            <DatePickerInputController
              control={control}
              name={'endDate'}
              onChange={() => trigger('startDate')}
              datePickerProps={{
                label: 'Fecha de finalizacion',
                placeholder: 'DD/MM/YY'
              }}
            />
          </Grid.Col>

          <Grid.Col>
            <SelectController
              control={control}
              name={'status'}
              options={[
                { label: 'Concepto', value: ProjectStatus.Concept },
                { label: 'Prototipo', value: ProjectStatus.Prototype },
                { label: 'Produccion', value: ProjectStatus.Production },
                { label: 'Enviado', value: ProjectStatus.Shipping },
                { label: 'Enviado', value: ProjectStatus.Delivered },
                { label: 'Finalizado', value: ProjectStatus.Ended }
              ]}
              selectProps={{
                label: 'Estado',
                placeholder: 'estado'
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
        <Button onClick={handleSubmit(handleFormSubmit)} disabled={!isValid}>
          Crear Proyecto
        </Button>
      </Group>
    </>
  )
}
