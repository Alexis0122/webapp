import { ProjectStatus } from '@/constants'
import { DateValue } from '@mantine/dates'

export interface AnyPresentValue {
  name: string
  size: number
}

export interface ProjectFormAttachment {
  name: string
  format: string
  size: number
}

export type ProjectGratificationForm = {
  title: string
  description: string
  category: string
  amount: number
  include: string
  images?: { name: string; format: string; size: number }[]
}

export interface ProjectData {
  id: number
  title: string
  description: string
  imageUrl: string
  financialTarget: number
  amountCollected: number
  patronageCount: number
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

export interface CreateProjectForm {
  title: string
  description: string
  startDate: Date
  endDate: Date
  status?: ProjectStatus
  financialTarget?: number | null
  equity?: number | null
  // images: { name: string; format: string; size: number; }[] ;
  images: File[]
  gratifications?: ProjectGratificationForm[] | undefined
}
export interface EditProjectForm {
  title: string
  description: string
  startDate: Date
  endDate: Date
  status?: ProjectStatus
  financialTarget?: number | null
  equity?: number | null
  // images: { name: string; format: string; size: number; }[] ;
  // images: File[]| null
}
export interface SendEditProjectForm {
  Title: string
  Description: string
  startDate: Date
  endDate: Date
  status?: ProjectStatus
  financialTarget?: number | null
  equity?: number | null
  // images: { name: string; format: string; size: number; }[] ;
  // images: File[]| null
}
export type EditProjectGratificationForm = {
  title: string
  description: string
  category: string
  amount: number
  include: string
  // images?: { name: string; format: string; size: number }[] | null
}

export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  amountCollected: number
  financialTarget: number
}
