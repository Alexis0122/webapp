// Diduforgoturpassword.tsx

import React from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { Button } from '@mantine/core'
import './style.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { forgotPasswordSchema } from './did_you_forget_your_password.utils'
import CodeInputField from './componentsDidYouForgetYourPassword/CodeInputField'

export const Diduforgoturpassword = (): JSX.Element => {
  const formMethods = useForm<{ code: string[] }>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      code: ['', '', '', '', '', ''] // Asegura que code tenga 6 posiciones de strings vacíos
    }
  })

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors }
  } = formMethods

  const onSubmit = (data: { code: string[] }) => {
    console.log('Código OTP ingresado:', data.code)
  }

  const codeValues = watch('code') as unknown as string[] // Forzar a TypeScript a tratarlo como un array de strings

  const isButtonDisabled = codeValues.includes(' ')

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className='diduforgoturpassword'>
        <div className='overlap'>
          <div className='overlap-group'>
            {/* Generamos los 6 campos con el componente CodeInputField */}
            {codeValues.map((_, index) => (
              <CodeInputField
                key={index}
                index={index}
                control={control}
                setValue={setValue}
                watch={watch}
              />
            ))}
            {errors.code && (
              <p className='error-message' style={{ color: 'red' }}>
                {errors.code.message}
              </p>
            )}
          </div>

          <p className='to-continue-with-the'>
            <span>
              To continue with the recovery process, we have sent a verification code to your email
              address{' '}
            </span>
            <span className='text-wrapper-3'>bín4@gmail.com</span>
            <span>. Please make sure to enter it correctly in the verification field.</span>
          </p>

          <div className='overlap-2'>
            <div className='diduforgoturpassword-text-wrapper-4'>Did You Forget your</div>
            <div className='password-text-wrapper-5'>Password?</div>
          </div>

          <div className='button-footer'>
            <Button
              type='submit'
              className='button-instance'
              color='gray'
              size='xl'
              variant='filled'
              disabled={isButtonDisabled} // Deshabilitamos el botón si hay campos vacíos
            >
              CONTINUE
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
