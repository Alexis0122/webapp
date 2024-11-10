import React from 'react'
import { RegisterFormComponent } from '@/features/login_Register/register_form'
import { LoginAndRegisterLayout } from '@/features/login_Register/components/Login_Register_Layout'

export default function registerPage() {
  return (
    <>
      <LoginAndRegisterLayout />
      <RegisterFormComponent />
    </>
  )
}
