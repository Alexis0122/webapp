import * as yup from 'yup'

export const forgotPasswordSchema = yup.object().shape({
  code: yup
    .array()
    .of(
      yup
        .string()
        .required('Este campo es obligatorio') // Asegura que cada campo no esté vacío
        .test('not-empty', 'No debe contener espacios en blanco', (value) => value.trim() !== '') // Verifica que no sea solo un espacio
    )
    .min(6, 'El código debe tener 6 caracteres') // Asegura que haya exactamente 6 caracteres
    .max(6, 'El código debe tener 6 caracteres')
    .required('El código es requerido') // Asegura que el array completo esté presente
    .test('valid-code', 'El código que ha suministrado no es válido', (code) => {
      const codeStr = code.join('') // Juntamos los valores de cada campo del código
      return codeStr === '123456' // Aquí validamos si el código es igual a '123456'
    })
})
