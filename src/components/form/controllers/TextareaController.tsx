import type { CommonControllerProps } from './Controllers.types'
import React, { type ChangeEvent } from 'react'
import { type FieldValues, useController } from 'react-hook-form'
import { Textarea, type TextareaProps } from '@mantine/core'

interface TextFieldControllerProps<T extends FieldValues> extends CommonControllerProps<T> {
  textareaProps?: Omit<TextareaProps, 'value' | 'onChange' | 'name' | 'error'>
}

/**
 * Component that uses React hook form to handle state of Mantine's Textarea input.
 */
export const TextareaController = <T extends FieldValues>(props: TextFieldControllerProps<T>) => {
  const { control, name, textareaProps } = props

  const {
    field: { value, onBlur, onChange },
    formState: { errors }
  } = useController({
    name,
    control
  })

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)

  return (
    <Textarea
      value={value}
      onBlur={onBlur}
      error={errors[name]?.message as string}
      onChange={handleChange}
      minRows={2}
      {...textareaProps}
    />
  )
}
