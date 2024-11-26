import React, { useEffect } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Checkbox, Anchor } from '@mantine/core'
import { loginSchema } from './loginForm.utils'
import { TextInputController } from '@/components/form/controllers/TextInputController'
import { PasswordInputController } from '@/components/form/controllers/PasswordInputController'
import { LoginForm } from '@/types/Project'
import './style.css'
import { useAuth } from '@/hooks/useAuth'

export const LoginFormComponent = () => {
  const formMethods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { userName: '', password: '' }
  })
  const { handleSubmit, control, formState, setError } = formMethods
  const { errors } = formState

  // Hook de autenticación
  const { login } = useAuth()

  const onSubmit = async (data: LoginForm) => {
    console.log('Data being sent to the API:', data)

    // Realizar login
    const result = await login(data.userName as string, data.password as string)

    if (result?.error) {
      // Manejo condicional de errores según el mensaje de la API
      if (result.error === 'Invalid credentials') {
        // Asigna el error solo al campo de password
        setError('password', { type: 'manual', message: 'Credenciales Incorrectas' })
      } else if (result.error.startsWith("There're not Accounts registered with")) {
        // Asigna el error solo al campo de userName
        setError('userName', { type: 'manual', message: result.error })
      } else if (
        result.error.startsWith('Account locked due to too many failed attempts. Try in 1 hour') ||
        result.error.startsWith('This account is locked try again in 1 hour')
      ) {
        // Asigna el error solo al campo de userName
        setError('userName', { type: 'manual', message: result.error })
      } else {
        // Si el error no es uno de los anteriores, asignamos al campo de userName
        setError('userName', { type: 'manual', message: result.error })
        setError('password', { type: 'manual', message: result.error })
      }
    } else {
      console.log('User logged in successfully')
    }
  }

  useEffect(() => {
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
          name='userName'
          textInputProps={{
            label: 'UserName',
            className: `input-2 ${errors.userName ? 'login-input-error-email' : ''} ${errors.userName?.message === 'Account locked due to too many failed attempts. Try in 1 hour' ? 'blocked' : ''}`,
            placeholder: 'Your UserName',
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
            <Anchor href='/register' className='signUp-text'>
              Sign Up
            </Anchor>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
