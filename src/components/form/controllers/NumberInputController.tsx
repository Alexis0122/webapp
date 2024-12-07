import type { CommonControllerProps } from './Controllers.types'
import React from 'react'
import { type FieldValues, useController } from 'react-hook-form'
import { NumberInput, NumberInputProps } from '@mantine/core'

interface NumberInputControllerProps<T extends FieldValues> extends CommonControllerProps<T> {
  numberInputProps?: Omit<NumberInputProps, 'value' | 'onChange' | 'name' | 'error'>
}

/**
 * Component that uses React hook form to handle state of Mantine's NumberInput input.
 */
export const NumberInputController = <T extends FieldValues>(
  props: NumberInputControllerProps<T>
) => {
  const { control, name, numberInputProps } = props

  const {
    field: { value, onBlur, onChange },
    formState: { errors }
  } = useController({
    name,
    control
  })

  const handleChange = (e: string | number) => onChange(e)

  return (
    <NumberInput
      size='sm'
      value={value}
      onBlur={onBlur}
      error={errors[name]?.message as string}
      onChange={handleChange}
      {...numberInputProps}
    />
  )
}
