import { DateValue } from "@mantine/dates"

export enum ProjectStatus {
  Concept = 'Concepto',
  Prototype = 'Prototipo',
  Production = 'Produccion',
  Shipping = 'Enviado',
  Delivered = 'Entregado',
  Ended = 'Finalizado'
}

export interface ProjectFormAttachment {
  name: string
  format: string
  size: number
}

export interface ProjectGratification {
  title: string
  category: string
  amount: number
  imageUrl: ProjectFormAttachment[]
  description: string
}

export type RegisterForm = {
  name?: string
  surName?: string
  userName?: string
  email?: string
  password?: string
}

export type LoginForm = {
  email?: string
  password?: string
}

export type CreateProject = {
  title?: string
  description?: string
  image?: ProjectFormAttachment[]
  startDate?: DateValue
  endDate?: DateValue
  status?: ProjectStatus
  gratification?: ProjectGratification[]
}