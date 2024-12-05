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
      Yup.mixed<File>()
        .required('El archivo es obligatorio')
        .test(
          'fileType',
          'Formato no permitido. Solo imágenes JPEG o PNG',
          (file) =>
            file instanceof File && (file.type === 'image/jpeg' || file.type === 'image/png')
        )
        .test(
          'fileSize',
          'El tamaño del archivo no puede exceder los 5MB',
          (file) => file instanceof File && file.size <= 5 * 1024 * 1024
        )
    )
    .min(1, 'Debes subir al menos una imagen')
    .required('La imagen es requerida')
})
