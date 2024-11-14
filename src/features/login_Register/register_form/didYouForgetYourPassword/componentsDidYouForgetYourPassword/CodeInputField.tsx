// CodeInputField.tsx

import React from 'react'
import { Controller, UseFormSetValue } from 'react-hook-form'
import { TextInput } from '@mantine/core'

interface CodeInputFieldProps {
  index: number

  control: any

  setValue: UseFormSetValue<{ code: string[] }>

  watch: (name: string) => string[]
}

const CodeInputField: React.FC<CodeInputFieldProps> = ({ index, control, setValue, watch }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (value.length <= 1) {
      // Limita a un carácter sin restringir el tipo
      setValue(`code.${index}`, value) // Actualiza el valor en el array

      // Si se ingresó un carácter, mover el foco al siguiente campo
      if (value !== '' && index < 5) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`)
        nextInput?.removeAttribute('disabled')
        nextInput?.focus()
      }
    }
  }

  return (
    <Controller
      control={control}
      name={`code[${index}]`}
      render={({ field }) => (
        <TextInput
          {...field}
          id={`otp-input-${index}`}
          placeholder='x'
          maxLength={1}
          size='xl'
          className={`diduforgoturpassword-input-instance-${index + 1}`}
          value={watch(`code[${index}]`)} // Vincular al valor actual
          onChange={handleChange}
          disabled={
            index !== 0 &&
            watch('code')
              .slice(0, index)
              .some((val) => val === '')
          }
        />
      )}
    />
  )
}

export default CodeInputField
