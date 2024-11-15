// validationSchema.ts
import * as yup from 'yup'

export const NewPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('Campo obligatorio'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Las contraseñas deben ser iguales') // Mensaje personalizado
    .required('Campo obligatorio')
})
