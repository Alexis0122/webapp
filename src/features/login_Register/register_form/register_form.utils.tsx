// registerForm.utils.ts
import * as yup from 'yup'
import { checkEmailExistence } from '@/utils/apiUtils' // Importamos la función

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email('Correo no válido') // Validación básica de email
    .required('Campo obligatorio') // El email es obligatorio
    .test('email-check', 'Este correo ya está registrado', async (value) => {
      if (value) {
        // Llamamos a la función que verifica si el correo ya existe
        const emailExists = await checkEmailExistence(value)
        return !emailExists // Si el correo ya existe, muestra un error
      }
      return true // Si no hay valor (en caso de que el campo no esté lleno), pasa
    }),
  username: yup
    .string()
    .min(4, 'El nombre de usuario debe tener al menos 4 caracteres')
    .required('Campo obligatorio'),
  name: yup.string().min(2, 'Debe tener al menos 2 caracteres').required('Campo obligatorio'),
  surname: yup.string().min(2, 'Debe tener al menos 2 caracteres').required('Campo obligatorio')
})
