import * as Yup from 'yup'
import { ProjectStatus } from '../../constants/enums'

export const CreateProjectSchema = Yup.object().shape({
  title: Yup.string()
    .required('El título es obligatorio')
    .min(3, 'El título debe tener al menos 3 caracteres')
    .max(100, 'El título no puede tener más de 100 caracteres'),

  description: Yup.string()
    .required('La descripción es obligatoria')
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(500, 'La descripción no puede tener más de 500 caracteres'),

  startDate: Yup.date()
    .required('La fecha de inicio es obligatoria')
    .max(
      Yup.ref('endDate'),
      'La fecha de inicio no puede ser posterior a la fecha de finalización'
    ),

  endDate: Yup.date()
    .required('La fecha de finalización es obligatoria')
    .min(
      Yup.ref('startDate'),
      'La fecha de finalización no puede ser anterior a la fecha de inicio'
    ),

  status: Yup.mixed<ProjectStatus>()

    .oneOf(Object.values(ProjectStatus), 'Estado inválido'),

  financialTarget: Yup.number()
    .notRequired()
    .min(0, 'El objetivo financiero no puede ser negativo'),

  equity: Yup.number().notRequired().min(0, 'La participación no puede ser negativa'),

  images: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required('El nombre de la imagen es obligatorio'),
        size: Yup.number()
          .max(5000000, 'El tamaño de la imagen no puede ser mayor a 5MB') // Máximo tamaño de archivo de 5MB
          .required('El tamaño de la imagen es obligatorio')
      })
    )
    .min(1, 'Debe subir al menos una imagen')
    .required('Las imágenes son obligatorias'),

  gratifications: Yup.array()
    .of(
      Yup.object().shape({
        title: Yup.string().required('El título es obligatorio'),
        description: Yup.string()
          .max(200, 'La descripción de la gratificación no puede exceder los 200 caracteres')
          .required('La descripción es obligatoria'),
        category: Yup.string().required('La categoría es obligatoria'),
        amount: Yup.number()
          .min(0, 'El monto de gratificación no puede ser negativo')
          .required('El monto es obligatorio'),
        include: Yup.string().required('El campo "include" es obligatorio')
      })
    )
    .nullable()
    .notRequired()
})
