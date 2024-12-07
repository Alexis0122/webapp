import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Modal, Button, Grid, Group, Stack, Title } from '@mantine/core'
import {
  DatePickerInputController,
  SelectController,
  TextareaController,
  TextInputController
} from '@/components/form/controllers'
import { EditProjectSchema } from './ProjectModal.utils'
import { CreateProjectForm, EditProjectForm } from '@/types/Project'

interface EditProjectModalProps {
  opened: boolean
  onClose: () => void
  defaultValues?: CreateProjectForm
  onSave: (data: EditProjectForm, projectId: string) => Promise<void>
  projectId: string
  onDelete: () => void
}

export const ProjectModal: React.FC<EditProjectModalProps> = ({
  opened,
  onClose,
  defaultValues,
  onSave,
  projectId,
  onDelete
}) => {
  const methods = useForm<EditProjectForm>({
    resolver: yupResolver(EditProjectSchema),
    defaultValues,
    shouldFocusError: true,
    mode: 'onChange'
  })
  const { control, handleSubmit, reset } = methods

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues) // Set the form data when defaultValues change
    }
  }, [defaultValues, reset])

  const handleFormSubmit = async (data: EditProjectForm) => {
    try {
      await onSave(data, projectId)
      onClose()
    } catch (error) {
      console.error('Error al guardar el proyecto:', error)
    }
  }

  return (
    <Modal opened={opened} onClose={onClose} title='Editar Proyecto'>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Stack>
          <Title>Editar Proyecto</Title>
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
                  { label: 'Concepto', value: 'Concept' },
                  { label: 'Prototipo', value: 'Prototype' },
                  { label: 'Producción', value: 'Production' },
                  { label: 'Enviado', value: 'Shipping' },
                  { label: 'Entregado', value: 'Delivered' },
                  { label: 'Finalizado', value: 'Ended' }
                ]}
                selectProps={{
                  label: 'Estado',
                  placeholder: 'Selecciona un estado'
                }}
              />
            </Grid.Col>
          </Grid>
        </Stack>
        <Group mt='md'>
          <Button variant='outline' onClick={onClose}>
            Cancelar
          </Button>
          <Button type='submit'>Guardar</Button>
          <Button color='red' onClick={onDelete}>
            Borrar
          </Button>
        </Group>
      </form>
    </Modal>
  )
}
