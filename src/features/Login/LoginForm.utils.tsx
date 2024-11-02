import { LoginForm } from "@/types/Project";
import * as yup from 'yup'
import { object, ObjectSchema } from 'yup'

export const LoginSchema: ObjectSchema<LoginForm> = object().shape({
  email: yup.string().trim().required('Campo obligatorio'),
  password: yup.string().trim().required('Campo obligatorio')
}).required()