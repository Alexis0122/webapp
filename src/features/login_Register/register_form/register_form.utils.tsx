// registerForm.utils.ts
import * as yup from 'yup'
import { ObjectSchema } from 'yup'

export interface RegisterForm {
  email: string
  username: string
  name: string
  surname: string
}

export const registerSchema: ObjectSchema<RegisterForm> = yup
  .object()
  .shape({
    email: yup.string().email('Correo no válido').required('Campo obligatorio'),
    username: yup
      .string()
      .min(4, 'El nombre de usuario debe tener al menos 4 caracteres')
      .required('Campo obligatorio'),
    name: yup.string().min(2, 'Debe tener al menos 2 caracteres').required('Campo obligatorio'),
    surname: yup.string().min(2, 'Debe tener al menos 2 caracteres').required('Campo obligatorio')
  })
  .required()
