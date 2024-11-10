import { ProjectGratificationForm } from '@/types/Project'
import * as yup from 'yup'
import { object, ObjectSchema } from 'yup'

export const GratificationProjectSchema: ObjectSchema<ProjectGratificationForm> = object()
  .shape({
    title: yup.string().trim().required('Campo obligatorio'),
    description: yup.string().trim().required('Campo obligatorio'),
    category: yup.string().trim().required('Campo obligatorio'),
    amount: yup
      .number()
      .moreThan(0, 'El monto debe ser mayor a 0.')
      .required('Campo obligatorio')
      .typeError('Campo obligatorio'),
    imageUrl: yup
      .object()
      .shape({
        name: yup.string().required(),
        format: yup.string().required(),
        size: yup.number().required()
      })
      .optional()
  })
  .required()
