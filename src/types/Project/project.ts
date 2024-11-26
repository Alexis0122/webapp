import { ProjectStatus } from '@/constants'
import { DateValue } from '@mantine/dates'

export interface ProjectFormAttachment {
  name: string
  format: string
  size: number
}

export interface ProjectGratificationForm {
  title: string
  category: string
  amount?: number
  imageUrl?: ProjectFormAttachment
  description: string
}

export type RegisterForm = {
  name?: string
  surName?: string
  userName?: string
  email?: string
  password?: string
}

export interface NPasswordForm {
  newPassword: string

  confirmPassword: string
}

export type LoginForm = {
  userName?: string
  password?: string
}

export type CreateProjectForm = {
  title?: string
  description?: string
  image?: ProjectFormAttachment[]
  startDate?: DateValue
  endDate?: DateValue
  status?: ProjectStatus
  gratification?: ProjectGratificationForm[]
}
