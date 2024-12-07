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
import './GratificationProjectForm.modules.css'
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
    mode: 'onChange'
  })

  const [isModalShown, { open, close }] = useDisclosure(false)

  const handleFormSubmit = (data: ProjectGratificationForm) => {
    onGratificationSubmit(data)
    reset()
  }

  return (
    <>
      <Button className='project-buttonreward' onClick={open}>
        CREATE REWARD
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
                    label: 'Title',
                    placeholder: 'Reward'
                  }}
                />
              </Grid.Col>
              <Grid.Col>
                <TextareaController
                  control={control}
                  name={'description'}
                  textareaProps={{
                    label: 'Description',
                    placeholder: '...'
                  }}
                />
              </Grid.Col>
              <Grid.Col>
                <NumberInputController
                  control={control}
                  name={'amount'}
                  numberInputProps={{
                    label: 'Price',
                    placeholder: '00.00'
                  }}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInputController
                  control={control}
                  name={'category'}
                  textInputProps={{
                    label: 'Category',
                    placeholder: 'Award'
                  }}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInputController
                  control={control}
                  name={'include'}
                  textInputProps={{
                    label: 'Include',
                    placeholder: 'Details of what is included'
                  }}
                />
              </Grid.Col>
              <Grid.Col>
                <ImportGratificationImage control={control} />
              </Grid.Col>
            </Grid>
            <Group>
              <Button
                className='project-cancelbutton'
                onClick={() => {
                  close()
                  reset()
                }}
              >
                Cancel
              </Button>
              <Button
                className='project-createbutton'
                type='submit'
                form='createGratification'
                disabled={!isValid}
              >
                Create Reward
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  )
}
