import { FileCard } from '@/components/common/FileCard'
import { FileUploaderController } from '@/components/form/controllers'
import { CreateProjectForm } from '@/types/Project'
import { Grid, Stack, Text } from '@mantine/core'
import React, { FC } from 'react'
import { Control, useWatch } from 'react-hook-form'

type ImportProjectImageProps = {
  control: Control<CreateProjectForm>
}

export const ImportProjectImage: FC<ImportProjectImageProps> = ({ control }) => {
  const images = useWatch({
    control,
    name: 'image',
    defaultValue: []
  })

  const onImageDelete = (id: string) => {
    // todo: implement file deletion logic
  }

  // const onFileDownload = (id: string) => {
  //   // todo: implement file download logic
  // }

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
        <FileUploaderController control={control} name='image' />
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 12, md: 6 }}>{content}</Grid.Col>
    </Grid>
  )
}
