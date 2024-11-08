import { CreateProject, ProjectFormAttachment, ProjectGratification, ProjectStatus } from "@/types/Project"
import * as yup from 'yup'
import { object, ObjectSchema } from "yup"

export const CreateProjectSchema: ObjectSchema<CreateProject> = object().shape({
  title: yup.string().trim().required('Campo obligatorio'),
  description: yup.string().trim().required('Campo obligatorio'),
  image: yup.array(yup.mixed<ProjectFormAttachment>().required()).optional(),
  startDate: yup.date().nullable().required('Campo obligatorio').max(yup.ref('due_date'), 'La fecha de emisión debe ser menor a la fecha de vencimiento'),
  endDate: yup.date().required('Campo obligatorio').min(yup.ref('date'), 'La fecha de vencimiento debe ser mayor a la fecha de emisión'),
  status: yup.mixed<ProjectStatus>().oneOf(Object.values(ProjectStatus)).required('Campo obligatorio'),
  gratification: yup.array(yup.mixed<ProjectGratification>().required()).optional(),
}).required()