import type { DatePickerInputProps, DatesRangeValue, DateValue } from '@mantine/dates'
import type { CommonControllerProps } from './Controllers.types'
import React from 'react'
import { type FieldValues, useController } from 'react-hook-form'
import { DatePickerInput } from '@mantine/dates'

interface DatePickerInputControllerProps<T extends FieldValues> extends CommonControllerProps<T> {
  datePickerProps?: Omit<DatePickerInputProps, 'value' | 'onChange' | 'name' | 'error'>
}

/**
 * Component that uses React hook form to handle state of Mantine's DatePickerInput input.
 */
export const DatePickerInputController = <T extends FieldValues>(
  props: DatePickerInputControllerProps<T>
) => {
  const { control, name, datePickerProps, onChange: onChangeProp } = props

  const {
    field: { value, onBlur, onChange },
    formState: { errors }
  } = useController({
    name,
    control
  })

  const handleChange = (e: DatesRangeValue | DateValue | Date[]) => {
    onChange(e)
    if (onChangeProp) onChangeProp(e)
  }

  return (
    <DatePickerInput
      value={value}
      onBlur={onBlur}
      error={errors[name]?.message as string}
      onChange={handleChange}
      valueFormat='DD/MM/YYYY'
      {...datePickerProps}
    />
  )
}
