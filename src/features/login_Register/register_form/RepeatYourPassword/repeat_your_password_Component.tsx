// NewPasswordForm.tsx
import React, { useEffect } from 'react'
import * as yup from 'yup'
import { NewPasswordSchema } from './repeat_your_password.utils'
import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '@mantine/core'
import { PasswordInputController } from '@/components/form/controllers/PasswordInputController'
import './style.css'
import { yupResolver } from '@hookform/resolvers/yup'
// import { NPasswordForm } from '@/types/Project'
import useNavigation from '@/hooks/useNavigation' // Importamos el hook personalizado

interface NewPasswordFormProps {
  onSubmit: () => void
}

export const NewPasswordForm = ({ onSubmit }: NewPasswordFormProps): JSX.Element => {
  const formMethods = useForm({
    resolver: yupResolver(NewPasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: ''
    }
  })

  const { goTo } = useNavigation() // Usamos el hook personalizado
  const { handleSubmit, control, formState } = formMethods
  const { errors } = formState

  const handleFormSubmit = () => {
    onSubmit()
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
      <form onSubmit={handleSubmit(handleFormSubmit)} className='newPasswordForm-section'>
        <p className='newPasswordForm-to-continue-with-the'>
          <span>Almost finished, </span>
          <span className='text-wrapper-3'>Pedro!</span>
          <span> Set your new password, and you’ll be all set to go.</span>
        </p>
        <div className={`newPasswordForm-header-newPasswordForm-text`}>Register</div>

        <PasswordInputController
          control={control}
          name='newPassword'
          PasswordInputProps={{
            label: 'New Password',
            placeholder: 'Set Your New Password',
            size: 'xl',
            className: `newPasswordForm-input-newPassword ${errors.newPassword ? 'newPasswordForm-input-error-newPassword' : ''}`
          }}
        />
        <PasswordInputController
          control={control}
          name='confirmPassword'
          PasswordInputProps={{
            label: 'Confirm Password',
            placeholder: 'Repeat your Password...',
            size: 'xl',
            className: `newPasswordForm-input-confirmPassword ${errors.confirmPassword ? 'newPasswordForm-input-error-confirmPassword' : ''}`
          }}
        />

        <p
          className={`newPasswordForm-to-continue-with-the-2 ${errors.confirmPassword ? 'newPasswordForm-input-error-confirmPassword-label' : ''}`}
        >
          <span>Create a strong password for your account, associated with </span>
          <span className='text-wrapper-3-2'>Bín@gmail.com</span>
          <span>, and re-enter it below to confirm your choice.</span>
        </p>
        <Button
          type='submit'
          className={`button-newPasswordForm`}
          size='xl'
          variant='filled'
          // onClick={() => goTo('/')}
        >
          Update & Proceed
        </Button>
      </form>
    </FormProvider>
  )
}
