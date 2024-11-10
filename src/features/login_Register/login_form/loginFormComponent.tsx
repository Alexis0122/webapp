import React, { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Checkbox, Anchor } from '@mantine/core'
import { loginSchema } from './loginForm.utils' // Ajusta la ruta según tu estructura de proyecto
import { TextInputController } from '@/components/form/controllers/TextInputController' // Ajusta la ruta según tu estructura
import { PasswordInputController } from '@/components/form/controllers/PasswordInputController' // Ajusta la ruta según tu estructura
import { LoginForm } from '@/types/Project' // Ajusta la ruta según tu estructura de proyecto
import './style.css'

export const LoginFormComponent = () => {
  const formMethods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  })
  const { handleSubmit, control, formState } = formMethods
  const { errors } = formState

  const onSubmit = (data: LoginForm) => {
    console.log(data)
  }

  useEffect(() => {
    // Si hay errores, añade la clase yup-error a :root
    if (Object.keys(errors).length > 0) {
      document.documentElement.classList.add('yup-error')
    } else {
      document.documentElement.classList.remove('yup-error')
    }
  }, [errors])

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className='login-form-section'>
        <div className='overlap-group-2'>
          <div className='text-wrapper-7'>Welcome Back!</div>
          <div className='text-wrapper-8'>Hello,</div>
        </div>

        <TextInputController
          control={control}
          name='email'
          textInputProps={{
            label: 'Email',
            className: `input-2 ${errors.email ? 'login-input-error-email' : ''}`,
            placeholder: 'Your email',
            size: 'xl'
          }}
        />

        <PasswordInputController
          control={control}
          name='password'
          PasswordInputProps={{
            description: 'Password',
            className: `input-2 password`,
            placeholder: 'Password',
            size: 'xl'
          }}
        />

        <div>
          <div
            className={`remember-me-group ${errors.password ? 'login-input-error-password' : ''}`}
          >
            <Checkbox className='remember-me-text' label='Remember Me' />
          </div>
          <div
            className={`forgot-password-group ${errors.password ? 'login-input-error-password' : ''}`}
          >
            <Anchor href='/forgot-password' className='forgot-password-text'>
              Forgot Password
            </Anchor>
          </div>
        </div>

        <div className='overlap'>
          <div className='overlap-group'>
            <p className={`p ${errors.password ? 'login-input-error-account' : ''}`}>
              Don’t have an account yet?
            </p>
            <Button
              type='submit'
              className={`button-2 button-instance ${errors.password ? 'login-input-error-password' : ''}`}
              size='xl'
              variant='outlined'
            >
              Login
            </Button>
          </div>

          <div className={`signUp-wrapper ${errors.password ? 'login-input-error-account' : ''}`}>
            <Anchor href='/forgot-password' className='signUp-text'>
              Sign Up
            </Anchor>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
