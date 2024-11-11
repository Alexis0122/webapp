// forgotPassword.utils.ts
import * as yup from 'yup'
import { ObjectSchema } from 'yup'

export interface ForgotPasswordForm {
  code: string
}

export const forgotPasswordSchema: ObjectSchema<ForgotPasswordForm> = yup
  .object()
  .shape({
    code: yup
      .string()
      .length(6, 'El código debe tener exactamente 6 caracteres')
      .required('Campo obligatorio')
  })
  .required()
