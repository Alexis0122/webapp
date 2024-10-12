import type { CommonItem } from '@/types'
import type { CommonControllerProps } from './Controllers.types'
import React from 'react'
import { type FieldValues, useController } from 'react-hook-form'
import { Select, type SelectProps } from '@mantine/core'

interface SelectControllerProps<T extends FieldValues> extends CommonControllerProps<T> {
  options: CommonItem[]
  selectProps?: SelectProps
}

/**
 * Component that uses React hook form to handle state of a Select input.
 */
export const SelectController = <T extends FieldValues>(props: SelectControllerProps<T>) => {
  const { control, name, options, selectProps } = props

  const {
    field: { value, onBlur, onChange },
    formState: { errors }
  } = useController({
    name: name,
    control
  })

  const handleChange = (value: string | null) => {
    onChange(value)
  }

  return (
    <Select
      data={options}
      onChange={handleChange}
      error={errors[name]?.message as string}
      value={value}
      onBlur={onBlur}
      placeholder={'Seleccionar'}
      {...selectProps}
    />
  )
}
