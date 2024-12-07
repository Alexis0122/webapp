import { ProjectStatus } from '@/constants'
import { DateValue } from '@mantine/dates'

export interface AnyPresentValue {
  name: string
  size: number
}
export interface PaymentCardForm {
  cardName: string // Cardholder's name
  cardNumber: string // Credit card number (16 digits)
  cardExpiration: string // Expiration date (MM/YY)
  cardSecurityCode: string // 3-digit security code (CVC)
  cardPostalCode: string // Postal code
  cardType: string // Card type (e.g., Visa, MasterCard)
  focus?: 'name' | 'number' | 'expiry' | 'cvc' // Focused input field
}

export interface ValidateInfoValues {
  cardNumber: string
  cardExpiration: string
  cardSecurityCode: string
  cardName: string
  cardPostalCode: string
  cardType: string
}

export interface ValidationErrors {
  show: boolean
  variant: string
  message: string
  cname: boolean
  cnumber: boolean
  ctype: boolean
  cexp: boolean
  ccvv: boolean
  cpostal: boolean
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
  financialTarget?: number | null // Permitir null
  equity?: number | null // Permitir null
  // images: { name: string; format: string; size: number; }[] ; // Array de objetos con nombre y tamaño de la imagen
  images: File[] // Array de objetos con nombre y tamaño de la imagen

  gratifications?: ProjectGratificationForm[] | undefined
}

export interface Project {
  id: string
  title: string
  imageUrl: string
  amountCollected: number
  financialTarget: number
}
