import type { CommonControllerProps } from './Controllers.types'
import React, { type ChangeEvent } from 'react'
import { type FieldValues, useController } from 'react-hook-form'
import { PasswordInput, type PasswordInputProps } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

interface TextFieldControllerProps<T extends FieldValues> extends CommonControllerProps<T> {
  PasswordInputProps?: Omit<
    PasswordInputProps,
    'value' | 'onChange' | 'name' | 'error' | 'visible' | 'onVisibilityChange'
  >
}

/**
 * Component that uses React hook form to handle state of Mantine's PasswordInput input.
 */
export const PasswordInputController = <T extends FieldValues>(
  props: TextFieldControllerProps<T>
) => {
  const { control, name, PasswordInputProps } = props

  const {
    field: { value, onBlur, onChange },
    formState: { errors }
  } = useController({
    name,
    control
  })
  const [visible, { toggle }] = useDisclosure(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e)

  return (
    <PasswordInput
      size='sm'
      value={value}
      onBlur={onBlur}
      error={errors[name]?.message as string}
      onChange={handleChange}
      onVisibilityChange={toggle}
      visible={visible}
      {...PasswordInputProps}
    />
  )
}
