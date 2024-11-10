import { LoginForm } from '@/types/Project'
import * as yup from 'yup'
import { object, ObjectSchema } from 'yup'

export const loginSchema: ObjectSchema<LoginForm> = object()
  .shape({
    email: yup.string().email('Correo no válido').trim().required('Campo obligatorio'),
    password: yup
      .string()
      .trim()
      .min(8, 'Debe tener al menos 8 caracteres')
      .required('Campo obligatorio')
  })
  .required()
