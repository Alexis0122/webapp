import { FileCard } from '@/components/common/FileCard'
import { FileUploaderController } from '@/components/form/controllers'
import { CreateProjectForm } from '@/types/Project'
import { Grid, Stack, Text } from '@mantine/core'
import { ProjectFormAttachment } from '@/types/Project'
import React, { FC } from 'react'
import { Control, useWatch, useController } from 'react-hook-form'

type ImportProjectImageProps = {
  control: Control<CreateProjectForm>
}

export const ImportProjectImage: FC<ImportProjectImageProps> = ({ control }) => {
  const images = useWatch({ control, name: 'images', defaultValue: [] })

  // Usar useController para interactuar con el estado del formulario
  const { field } = useController({
    control,
    name: 'images',
    defaultValue: []
  })

  const onImageDelete = (fileName: string) => {
    const updatedImages = (images || []).filter(
      (image): image is ProjectFormAttachment => 'format' in image && image.name !== fileName
    )
    field.onChange(updatedImages) // Actualizar imágenes directamente
  }

  const content = images?.length ? (
    images
      .filter((image): image is ProjectFormAttachment => 'format' in image)
      .map((image, index) => (
        <Stack key={index}>
          <FileCard
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
