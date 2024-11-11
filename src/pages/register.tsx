import React from 'react'
import { RegisterFormComponent } from '@/features/login_Register/register_form'
import { LoginAndRegisterLayout } from '@/features/login_Register/components/Login_Register_Layout'
import { Diduforgoturpassword } from '@/features/login_Register/register_form/didYouForgetYourPassword/did_you_forget_your_password'

export default function registerPage() {
  return (
    <>
      <LoginAndRegisterLayout />
      {/* <RegisterFormComponent /> */}
      <Diduforgoturpassword />
    </>
  )
}
