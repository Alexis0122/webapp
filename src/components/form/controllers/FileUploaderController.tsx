import type { FileWithPath } from '@mantine/dropzone'
import type { CommonControllerProps } from './Controllers.types'
import React from 'react'
import { type FieldValues, useController } from 'react-hook-form'
import { ImportFile, type ImportFileProps } from '../ImportFile'

interface FileUploaderControllerProps<T extends FieldValues> extends CommonControllerProps<T> {
  fileUploaderProps?: Omit<ImportFileProps, 'onDrop'>
}

/**
 * Componente que usa react-hook-form para manejar el estado de Dropzone de Mantine.
 */
export const FileUploaderController = <T extends FieldValues>(
  props: FileUploaderControllerProps<T>
) => {
  const { control, name, fileUploaderProps } = props

  const {
    field: { value: files = [], onChange },
    formState: { errors }
  } = useController({
    name,
    control
  })

  const handleChange = (newFiles: FileWithPath[]) => {
    const uniqueFiles = newFiles.filter(
      (newFile) => !files.some((existingFile: FileWithPath) => existingFile.name === newFile.name)
    )

    // Actualizar el estado del formulario con los archivos únicos
    onChange([...files, ...uniqueFiles])
  }

  const errorMessage = typeof errors[name]?.message === 'string' ? errors[name]?.message : null

  return (
    <div>
      <ImportFile onDrop={handleChange} {...fileUploaderProps} />
      {errorMessage && <p style={{ color: 'red', fontSize: '0.875rem' }}>{errorMessage}</p>}
    </div>
  )
}
