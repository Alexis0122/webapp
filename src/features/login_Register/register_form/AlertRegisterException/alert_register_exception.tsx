import React from 'react'
import './style.css'
import { Button } from '@mantine/core'
import useNavigation from '@/hooks/useNavigation'
import { useFormContext } from '@/context/FormContext' // Importar el contexto

interface AlertRegisterExceptionProps {
  onGoBack: () => void
}
export const AlertRegisterException: React.FC<AlertRegisterExceptionProps> = ({ onGoBack }) => {
  const { goTo } = useNavigation()
  const { formData } = useFormContext() // Obtener datos del contexto

  return (
    <div className='alert_register_exception_section'>
      <div className='title'>
        <div className='text-wrapper'>Your Inbox!</div>
        <div className='div'>Check</div>
      </div>
      <p className='to-complete-your'>
        <span className='span'>
          <br />
          To complete your registration and continue supporting innovative software projects, please
          locate the confirmation email we sent to your registered email address{' '}
        </span>
        <span className='text-wrapper-2'>{formData.email}</span>
        <span className='span'>
          . Don&#39;t forget to check your spam or junk folder if you don&#39;t see the email.
          <br />
          <br />
          Verifying your account is necessary to proceed with your registration and gain full access
          to our crowdfunding platform, enabling you to support and contribute to exciting software
          initiatives. You no longer need to remain on this page; please use the email link to
          complete your verification.
        </span>
      </p>
      <Button
        type='submit'
        className={`button-AER`}
        size='xl'
        variant='filled'
        onClick={() => goTo('/login')}
      >
        Login
      </Button>
      <Button
        type='button'
        className={`button-go-back`}
        size='xl'
        variant='filled'
        onClick={onGoBack}
      >
        Go Back
      </Button>
    </div>
  )
}
