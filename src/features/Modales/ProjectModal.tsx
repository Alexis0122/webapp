import React, { useEffect } from 'react'
import { Modal, Button, Group, Stack, Grid } from '@mantine/core'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateProjectForm } from '@/types/Project'
import {
  TextInputController,
  TextareaController,
  DatePickerInputController,
  SelectController,
  NumberInputController
} from '@/components/form/controllers'
import { CreateProjectSchema } from '../CreateProject/CreateProject.utils'

interface EditProjectModalProps {
  opened: boolean
  onClose: () => void
  defaultValues?: CreateProjectForm
  onSave: (data: CreateProjectForm, projectId: string) => Promise<void>
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
  const { control, handleSubmit, reset } = useForm<CreateProjectForm>({
    defaultValues: defaultValues,
    resolver: yupResolver(CreateProjectSchema)
  })

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues)
    }
  }, [defaultValues, reset])

  const handleFormSubmit = async (data: CreateProjectForm) => {
    console.log('Datos enviados:', data)
    await onSave(data, projectId)
    onClose()
  }

  return (
    <Modal opened={opened} onClose={onClose} title='Editar Proyecto'>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Stack>
          <TextInputController
            control={control}
            name='title'
            textInputProps={{ label: 'Título', placeholder: 'CrowdevTest' }}
          />
          <TextareaController
            control={control}
            name='description'
            textareaProps={{ label: 'Descripción', placeholder: 'Descripción...' }}
          />
          <Grid>
            <Grid.Col span={6}>
              <DatePickerInputController
                control={control}
                name='startDate'
                datePickerProps={{
                  label: 'Fecha de inicio',
                  placeholder: 'DD/MM/YY'
                }}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <DatePickerInputController
                control={control}
                name='endDate'
                datePickerProps={{
                  label: 'Fecha de finalización',
                  placeholder: 'DD/MM/YY'
                }}
              />
            </Grid.Col>
          </Grid>
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
          <NumberInputController
            control={control}
            name='financialTarget'
            numberInputProps={{ label: 'Meta Financiera' }}
          />
        </Stack>
        <Group mt='md'>
          <Button variant='outline' onClick={onClose}>
            Cancelar
          </Button>
          <Button type='submit'>Guardar</Button>
          <Button onClick={onDelete}> Borrar</Button>
        </Group>
      </form>
    </Modal>
  )
}
