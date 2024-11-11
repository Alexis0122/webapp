import React, { ChangeEvent } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '@mantine/core'
import { TextInputController } from '@/components/form/controllers/TextInputController'
import CodeInputField from '../didYouForgetYourPassword/componentsDidYouForgetYourPassword/CodeInputField' // Asegúrate de ajustar la ruta
import './style.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { forgotPasswordSchema } from './did_you_forget_your_password.utils'

export const Diduforgoturpassword = (): JSX.Element => {
  const formMethods = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      code: ''
    }
  })

  const { handleSubmit, control } = formMethods

  const onSubmit = (data: { code: string }) => {
    console.log(data)
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className='diduforgoturpassword'>
        <div className='overlap'>
          <div className='overlap-group'>
            {/* Aquí estamos generando los 6 campos con el componente CodeInputField */}
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <CodeInputField key={index} index={index} control={control} />
            ))}
          </div>

          <p className='to-continue-with-the'>
            <span>
              <br />
              To continue with the recovery process, we have sent a verification code to your email
              address{' '}
            </span>
            <span className='text-wrapper-3'>bín4@gmail.com</span>
            <span>. Please make sure to enter it correctly in the verification field.</span>
          </p>

          <div className='overlap-2'>
            <div className='diduforgoturpassword-text-wrapper-4'>Did You Forgot your</div>
            <div className='password-text-wrapper-5'>Password?</div>
          </div>

          <div className='button-footer'>
            <div className='group'>
              <div className='login-text-wrapper'>Log In</div>
            </div>

            <p className='p'>Has it come back to you?</p>

            <Button
              type='submit'
              className='button-instance'
              color='gray'
              size='xl'
              variant='filled'
            >
              CONTINUE
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
