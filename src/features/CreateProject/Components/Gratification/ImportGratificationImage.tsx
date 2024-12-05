import { FileCard } from '@/components/common/FileCard'
import { FileUploaderController } from '@/components/form/controllers'
import { ProjectGratificationForm } from '@/types/Project'
import { Grid, Stack, Text } from '@mantine/core'
import React, { FC } from 'react'
import { Control, useWatch } from 'react-hook-form'

type ImportGratificationImageProps = {
  control: Control<ProjectGratificationForm>
}

export const ImportGratificationImage: FC<ImportGratificationImageProps> = ({ control }) => {
  const images = useWatch({
    control,
    name: 'images'
  })

  const onImageDelete = (id: string) => {
    // todo: implement file deletion logic
  }

  const content = images?.length ? (
    images?.map((image, index) => (
      <Stack>
        <FileCard
          key={index}
          fileName={image.name}
          fileSize={image.size}
          onDelete={() => onImageDelete(image.name)}
        />
      </Stack>
    ))
  ) : (
    <Text ta='center'>No se han agregado archivos</Text>
  )

  return (
    <Grid>
      <Grid.Col span={{ xs: 12, sm: 12, md: 6 }}>
        <FileUploaderController control={control} name='images' />
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 12, md: 6 }}>{content}</Grid.Col>
    </Grid>
  )
}
