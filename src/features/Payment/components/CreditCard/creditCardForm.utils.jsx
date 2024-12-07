import { LoginForm } from '@/types/Project' // Assuming this type exists in your project
import * as Yup from 'yup' // Correct import
import { object, ObjectSchema } from 'yup'

export const PaymentCardSchema = Yup.object().shape({
  cardName: Yup.string().required('Cardholder name is required'),
  cardNumber: Yup.string()
    .length(16, 'Card number must be 16 digits')
    .matches(/^\d+$/, 'Card number must only contain digits')
    .required('Card number is required'),
  cardExpiration: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration date must be in MM/YY format')
    .required('Expiration date is required'),
  cardSecurityCode: Yup.string()
    .length(3, 'Security code must be 3 digits')
    .matches(/^\d+$/, 'Security code must only contain digits')
    .required('Security code is required'),
  cardPostalCode: Yup.string().required('Postal code is required'),
  cardType: Yup.string().required('Card type is required')
})
