import * as Yup from 'yup'
import { ProjectStatus } from '../../constants/enums'

export const EditProjectSchema = Yup.object().shape({
  title: Yup.string().required('El título es obligatorio').min(3).max(100),
  description: Yup.string().required('La descripción es obligatoria').min(10).max(500),
  startDate: Yup.date().required('Fecha de inicio obligatoria'),
  endDate: Yup.date().required('Fecha de finalización obligatoria'),
  status: Yup.mixed<ProjectStatus>().oneOf(Object.values(ProjectStatus))
})
