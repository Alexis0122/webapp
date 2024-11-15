import React from 'react'
import { LoginAndRegisterLayout } from '@/features/login_Register/components/Login_Register_Layout'
import MultiStepForm from '@/features/login_Register/components/MultiStepForm/MultiStepForm'

export default function registerPage() {
  return (
    <>
      <LoginAndRegisterLayout />
      <MultiStepForm />
    </>
  )
}
