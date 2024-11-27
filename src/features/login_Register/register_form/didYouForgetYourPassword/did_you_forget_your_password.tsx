import React from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { Button } from '@mantine/core'
import './style.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { forgotPasswordSchema } from './did_you_forget_your_password.utils'
import CodeInputField from './componentsDidYouForgetYourPassword/CodeInputField'
import useNavigation from '@/hooks/useNavigation'
import { useFormContext } from '@/context/FormContext' // Importar el contexto

interface DiduforgoturpasswordProps {
  onSubmit: (data: { code: string[] }) => void
  onGoBack: () => void
}

export const Diduforgoturpassword: React.FC<DiduforgoturpasswordProps> = ({
  onSubmit,
  onGoBack
}) => {
  const formMethods = useForm<{ code: string[] }>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      code: ['', '', '', '', '', '']
    }
  })

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors }
  } = formMethods

  const { goTo } = useNavigation()
  const codeValues = watch('code') as unknown as string[]
  const isButtonDisabled = codeValues.includes(' ')
  const { formData } = useFormContext() // Obtener datos del contexto

  const handleFormSubmit = (data: { code: string[] }) => {
    console.log('Verification code entered:', data)
    onSubmit(data)
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='diduforgoturpassword'>
        <div className='diduforgoturpassword-overlap'>
          <div className='overlap-group'>
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
            <span className='text-wrapper-3'>{formData.email}</span>
            <span>. Please make sure to enter it correctly in the verification field.</span>
          </p>

          <div className='overlap-2'>
            <div className='diduforgoturpassword-text-wrapper-4'>Did You Forget your</div>
            <div className='password-text-wrapper-5'>Password?</div>
          </div>

          <Button
            type='submit'
            className={`button-diduforgoturpassword`}
            size='xl'
            variant='filled'
            // onClick={() => goTo('/')}
          >
            Proceed
          </Button>
          <Button
            type='button'
            className={`button-diduforgoturpassword-go-back`}
            size='xl'
            variant='filled'
            onClick={onGoBack}
          >
            Go Back
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
