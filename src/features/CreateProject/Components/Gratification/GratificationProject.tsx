import { Gratification } from '@/components/common'
import { CreateProjectForm, ProjectGratificationForm } from '@/types/Project'
import { Box, Group, Text } from '@mantine/core'
import React, { FC } from 'react'
import { Control, useWatch } from 'react-hook-form'
import './GratificationProjectForm.modules.css'

type GratificationProjectProps = {
  control: Control<CreateProjectForm>
}

export const GratificationProject: FC<GratificationProjectProps> = ({ control }) => {
  const gratifications = useWatch({
    control,
    name: 'gratifications',
    defaultValue: []
  })

  const onGratificationDelete = (index: number) => {
    // todo: hacer la funcion de eliminar el card
  }

  const content = gratifications?.length ? (
    gratifications?.map((gratification, index) => (
      <Box key={index}>
        <Gratification
          title={gratification.title}
          image={Array.isArray(gratification.images) ? '' : gratification.images || ''}
          category={gratification.category}
          price={gratification.amount || 0}
          onClose={() => onGratificationDelete(index)}
          description={gratification.description}
          include={gratification.include}
        />
      </Box>
    ))
  ) : (
    <Text ta='center'className='projec-subtitle'>Aún no se han agregado Recompensas</Text>
  )

  return <Group>{content}</Group>
}
