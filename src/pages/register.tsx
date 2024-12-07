import React from 'react'
import { LoginAndRegisterLayout } from '@/features/login_Register/components/Login_Register_Layout'
import MultiStepForm from '@/features/login_Register/components/MultiStepForm/MultiStepForm'
import { FormProvider } from '@/context/FormContext'

export default function registerPage() {
  return (
    <>
      <LoginAndRegisterLayout />
      <FormProvider>
        <MultiStepForm />
      </FormProvider>
    </>
  )
}
