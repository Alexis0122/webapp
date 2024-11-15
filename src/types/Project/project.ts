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
  email?: string
  password?: string
}
