import { ProjectFormAttachment, ProjectGratificationForm } from '@/types/Project'
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
    imageUrl: yup.array(yup.mixed<ProjectFormAttachment>().required()).optional(),
    include: yup.string().trim().required('Campo obligatorio')
  })
  .required()
