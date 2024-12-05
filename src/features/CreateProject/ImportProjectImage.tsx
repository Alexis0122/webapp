import { FileCard } from '@/components/common/FileCard'
import { FileUploaderController } from '@/components/form/controllers'
import { CreateProjectForm, ProjectFormAttachment } from '@/types/Project'
import { Grid, Stack, Text } from '@mantine/core'
import React, { FC } from 'react'
import { Control, useWatch, useController } from 'react-hook-form'

type ImportProjectImageProps = {
  control: Control<CreateProjectForm>
}

export const ImportProjectImage: FC<ImportProjectImageProps> = ({ control }) => {
  const images = useWatch({ control, name: 'images', defaultValue: [] }) as File[]

  // Usar useController para interactuar con el estado del formulario
  const { field } = useController({
    control,
    name: 'images',
    defaultValue: []
  })

  // Convertir archivos a ProjectFormAttachment para mostrar
  const attachments: ProjectFormAttachment[] = images.map((file) => ({
    name: file.name,
    format: file.type,
    size: file.size
  }))

  const onImageDelete = (fileName: string) => {
    const updatedImages = images.filter((image) => image.name !== fileName)
    field.onChange(updatedImages) // Actualizar imágenes directamente
  }

  const handleFilesAdded = (files: File[]) => {
    const updatedImages = [...images, ...files]
    field.onChange(updatedImages)
  }

  const content = attachments.length ? (
    attachments.map((attachment, index) => (
      <Stack key={index}>
        <FileCard
          fileName={attachment.name}
          fileSize={attachment.size}
          onDelete={() => onImageDelete(attachment.name)}
        />
      </Stack>
    ))
  ) : (
    <Text ta='center'>No se han agregado archivos</Text>
  )

  return (
    <Grid>
      <Grid.Col span={{ xs: 12, sm: 12, md: 6 }}>
        <FileUploaderController
          control={control}
          name='images'
          onChange={(value) => handleFilesAdded(value as File[])} // Manejar los archivos directamente
        />
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 12, md: 6 }}>{content}</Grid.Col>
    </Grid>
  )
}
