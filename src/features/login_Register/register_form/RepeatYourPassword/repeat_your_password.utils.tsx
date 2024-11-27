import * as yup from 'yup'

export const NewPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres') // Validación de longitud mínima
    .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula') // Validación de mayúscula
    .matches(/\d/, 'La contraseña debe contener al menos un número') // Validación de número
    .matches(/[^A-Za-z0-9]/, 'La contraseña debe contener al menos un carácter especial') // Validación de carácter especial
    .required('Campo obligatorio'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Las contraseñas deben ser iguales') // Validación de coincidencia
    .required('Campo obligatorio')
})
