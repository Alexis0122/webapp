import type { CommonControllerProps } from './Controllers.types'
import React, { type ChangeEvent } from 'react'
import { type FieldValues, useController } from 'react-hook-form'
import { TextInput, type TextInputProps } from '@mantine/core'

interface TextFieldControllerProps<T extends FieldValues> extends CommonControllerProps<T> {
  textInputProps?: Omit<TextInputProps, 'value' | 'onChange' | 'name' | 'error'>
}

/**
 * Component that uses React hook form to handle state of Mantine's TextInput input.
 */
export const TextInputController = <T extends FieldValues>(props: TextFieldControllerProps<T>) => {
  const { control, name, textInputProps } = props

  const {
    field: { value, onBlur, onChange },
    formState: { errors }
  } = useController({
    name,
    control
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e)

  return (
    <TextInput
      size='sm'
      value={value}
      onBlur={onBlur}
      error={errors[name]?.message as string}
      onChange={handleChange}
      {...textInputProps}
    />
  )
}
