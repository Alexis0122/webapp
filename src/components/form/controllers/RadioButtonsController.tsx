import type { CommonItem } from '@/types'
import type { CommonControllerProps } from './Controllers.types'
import React from 'react'
import { type FieldValues, useController } from 'react-hook-form'
import { Radio, type RadioGroupProps } from '@mantine/core'

interface RadioButtonsControllerProps<T extends FieldValues> extends CommonControllerProps<T> {
  options: CommonItem[]
  radioGroupProps?: RadioGroupProps
}

/**
 * Component that uses React hook form to handle state of Mantine's Radio input.
 */
export const RadioButtonsController = <T extends FieldValues>(
  props: RadioButtonsControllerProps<T>
) => {
  const { control, name, radioGroupProps, options } = props

  const {
    field: { value, onChange },
    formState: { errors }
  } = useController({
    name,
    control
  })

  const handleChange = (value: string) => onChange(value)

  return (
    <Radio.Group
      error={errors[name]?.message as string}
      value={value}
      onChange={handleChange}
      {...radioGroupProps}
    >
      {options.map(({ value, label }) => (
        <Radio key={value} value={value} label={label} />
      ))}
    </Radio.Group>
  )
}
