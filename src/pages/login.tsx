import { LoginFormComponent } from '@/features/login_Register/login_form'
import { LoginAndRegisterLayout } from '@/features/login_Register/components/Login_Register_Layout'
import React from 'react'

export default function LoginPage() {
  return (
    <>
      <LoginFormComponent />
      <LoginAndRegisterLayout />
    </>
  )
}
