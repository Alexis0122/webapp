import React, { ChangeEvent } from 'react'
import { TextInputController } from '@/components/form/controllers/TextInputController'
import { useForm, useFormContext } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { forgotPasswordSchema } from '../did_you_forget_your_password.utils'

interface CodeInputFieldProps {
  index: number
  control: any // Agrega el tipo adecuado para control, dependiendo de tu configuración
}

const CodeInputField: React.FC<CodeInputFieldProps> = ({ index, control }) => {
  const formMethods = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      code: ''
    }
  })

  return (
    <TextInputController
      control={control}
      name='code'
      textInputProps={{
        placeholder: 'x',
        size: 'xl',
        className: `diduforgoturpassword-input-instance-${index}`
      }}
    />
  )
}

export default CodeInputField
