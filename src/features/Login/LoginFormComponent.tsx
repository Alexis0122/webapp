import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from './LoginForm.utils'
import { PasswordInputController, TextInputController } from '@/components/form/controllers'
import { LoginForm } from '@/types/Project'
import { Box, Button, Stack } from '@mantine/core'

export const LoginFormComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid }
  } = useForm<LoginForm>({
    resolver: yupResolver(LoginSchema),
    shouldFocusError: true,
    mode: 'onBlur'
  })

  const onSubmit = (data: LoginForm) => {
    console.log('Datos del formulario:', data)
    // todo: implement save logic
  }

  return (
    <form id='login' onSubmit={handleSubmit(onSubmit)}>
      <Stack justify='center'>
        <TextInputController
          control={control}
          name='email'
          textInputProps={{
            label: 'Email',
            placeholder: 'Pedro@gmail.com'
          }}
        />
        <PasswordInputController
          control={control}
          name='password'
          PasswordInputProps={{
            label: 'Password',
            placeholder: '**********'
          }}
        />
        <Button fullWidth color='primary.6' type='submit' form='login' disabled={!isValid} >Login</Button>
      </Stack>
    </form>
  )
}