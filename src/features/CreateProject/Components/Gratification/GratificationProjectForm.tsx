import {
  NumberInputController,
  TextareaController,
  TextInputController
} from '@/components/form/controllers'
import { ProjectGratificationForm } from '@/types/Project'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Grid, Group, Modal, Paper, Stack } from '@mantine/core'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { GratificationProjectSchema } from './GratificationProject.utils'
import { ImportGratificationImage } from './ImportGratificationImage'
import { useDisclosure } from '@mantine/hooks'

type GratificationFormProps = {
  onGratificationSubmit: (data: ProjectGratificationForm) => void
}

export const GratificationForm: FC<GratificationFormProps> = ({ onGratificationSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset
  } = useForm<ProjectGratificationForm>({
    resolver: yupResolver(GratificationProjectSchema),
    shouldFocusError: true,
    mode: 'onBlur'
  })

  const [isModalShown, { open, close }] = useDisclosure(false)

  const handleFormSubmit = (data: ProjectGratificationForm) => {
    onGratificationSubmit(data)
    reset()
  }

  return (
    <>
      <Button mt={18} fullWidth variant='outline' onClick={open}>
        Crear Recompensas
      </Button>
      <Modal
        opened={isModalShown}
        onClose={() => {
          close()
          reset()
        }}
        withCloseButton={false}
        centered
        title='Gratificaciones'
        size='xl'
      >
        <form id='createGratification' onSubmit={handleSubmit(handleFormSubmit)}>
          <Stack>
            <Grid>
              <Grid.Col>
                <TextInputController
                  control={control}
                  name={'title'}
                  textInputProps={{
                    label: 'Titulo',
                    placeholder: 'recompensa'
                  }}
                />
              </Grid.Col>
              <Grid.Col>
                <TextareaController
                  control={control}
                  name={'description'}
                  textareaProps={{
                    label: 'Descripcion',
                    placeholder: '...'
                  }}
                />
              </Grid.Col>
              <Grid.Col>
                <NumberInputController
                  control={control}
                  name={'amount'}
                  numberInputProps={{
                    label: 'Precio',
                    placeholder: '00.00'
                  }}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInputController
                  control={control}
                  name={'category'}
                  textInputProps={{
                    label: 'Categoria',
                    placeholder: 'premio'
                  }}
                />
              </Grid.Col>
              <Grid.Col>
                <ImportGratificationImage control={control} />
              </Grid.Col>
            </Grid>
            <Group grow>
              <Button
                fullWidth
                onClick={() => {
                  close()
                  reset()
                }}
              >
                Cancelar
              </Button>
              <Button fullWidth type='submit' form='createGratification' disabled={!isValid}>
                Crear Recompensa
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  )
}
