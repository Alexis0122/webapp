import type { FileWithPath } from '@mantine/dropzone'
import type { CommonControllerProps } from './Controllers.types'
import React from 'react'
import { type FieldValues, useController } from 'react-hook-form'
import { ImportFile, type ImportFileProps } from '../ImportFile'

interface FileUploaderControllerProps<T extends FieldValues> extends CommonControllerProps<T> {
  fileUploaderProps?: Omit<ImportFileProps, 'onDrop'>
}

/**
 * Component that uses React hook form to handle state of Mantine's Dropzone.
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
    const updatedFiles = [...files, ...newFiles]
    onChange(updatedFiles)
  }

  return <ImportFile onDrop={handleChange} {...fileUploaderProps} />
}
