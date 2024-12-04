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

  imageUrl?: ProjectFormAttachment[]

  title: string

  description: string

  category: string

  amount: number

  include: string

}
;


export interface ProjectData {
  id: number
  title: string
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

export type CreateProjectForm = {
    title: string
    description: string
    startDate: Date
    endDate: Date
    status?: ProjectStatus
    financialTarget?: number | null  // Permitir null
    equity?: number | null  // Permitir null
    images: AnyPresentValue[] // Array de objetos con nombre y tamaño de la imagen
    gratifications?: ProjectGratificationForm[] | null
  
}
    
