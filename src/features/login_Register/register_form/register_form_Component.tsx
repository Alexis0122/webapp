import React, { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Anchor } from '@mantine/core'
import { TextInputController } from '@/components/form/controllers/TextInputController'
import { registerSchema } from './register_form.utils'
import { RegisterForm } from '@/types/Project'
import './style.css'

export const RegisterFormComponent = (): JSX.Element => {
  const formMethods = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: '',
      username: '',
      name: '',
      surname: ''
    }
  })

  const { handleSubmit, control, formState } = formMethods
  const { errors } = formState

  const onSubmit = (data: RegisterForm) => {
    console.log(data)
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
      <form onSubmit={handleSubmit(onSubmit)} className='register-section'>
        <div
          className={`header-text ${errors.surname ? 'input-error-surname' : ''} ${errors.name ? 'input-error-name' : ''}`}
        >
          Register
        </div>

        <TextInputController
          control={control}
          name='email'
          textInputProps={{
            label: 'Email',
            placeholder: 'Pedro@gmail.com',
            size: 'xl',
            className: `input-email ${errors.username ? 'input-error-email' : ''}`
          }}
        />

        <TextInputController
          control={control}
          name='username'
          textInputProps={{
            label: 'Username',
            placeholder: 'Pedro1234',
            size: 'xl',
            className: `input-username ${errors.username ? 'input-error-username' : ''}`
          }}
        />

        <TextInputController
          control={control}
          name='name'
          textInputProps={{
            label: 'Name',
            placeholder: 'Pedro',
            size: 'xl',
            className: `input-name ${errors.name ? 'input-error-name' : ''}`
          }}
        />

        <TextInputController
          control={control}
          name='surname'
          textInputProps={{
            label: 'Surname',
            placeholder: 'Antonio',
            size: 'xl',
            className: `input-surname ${errors.surname ? 'input-error-surname' : ''}`
          }}
        />

        <Button
          type='submit'
          className={`button-register ${errors.email ? 'input-error-email' : ''}`}
          size='xl'
          variant='filled'
        >
          Register
        </Button>

        <div className={`account-check ${errors.email ? 'input-error-check' : ''}`}>
          <p className='p'>Already have an account?</p>
          <Anchor href='/login' className='login-link'>
            Log In
          </Anchor>
        </div>
      </form>
    </FormProvider>
  )
}
