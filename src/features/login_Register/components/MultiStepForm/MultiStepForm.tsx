import React, { useState } from 'react'
import { NewPasswordForm } from '../../register_form/RepeatYourPassword'
import { Diduforgoturpassword } from '../../register_form/didYouForgetYourPassword'
import { RegisterFormComponent } from '../../register_form'
import { registerSchema } from '@/features/login_Register/register_form/register_form.utils' // Importamos el esquema actualizado
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { AlertRegisterException } from '../../register_form/AlertRegisterException/alert_register_exception'

const MultiStepForm = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<any>({})

  // Configuración de useForm, usando el esquema de validación 'registerSchema' que incluye la verificación de email
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError
  } = useForm({
    resolver: yupResolver(registerSchema) // Resolver usando 'yup' y el esquema de validación
  })

  const handleNextStep = (data: any) => {
    setFormData((prevData: any) => {
      const updatedData = { ...prevData, ...data }
      console.log(`Step ${step} - Data collected:`, data)
      console.log(`Updated formData after step ${step}:`, updatedData)
      return updatedData
    })
    console.log(`Moved to next step: ${step + 1}`)
    setStep((prevStep) => prevStep + 1)
  }
  const handleGoBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1)) // Asegura que no retroceda por debajo de 1
    console.log(`Moved to previous step: ${step - 1}`)
  }

  const handleSubmitToAPI = async () => {
    console.log('Final formData before API call:', formData)

    const apiPayload = new FormData()
    apiPayload.append('firstName', formData.name || 'xxxxx')
    apiPayload.append('lastName', formData.surname || 'xxxxx')
    apiPayload.append('email', formData.email || 'xxxxx')
    apiPayload.append('userName', formData.username || 'xxxxx')
    apiPayload.append('password', formData.newPassword || 'xxxxx')
    apiPayload.append('confirmPassword', formData.confirmPassword || 'xxxxx')

    console.log('Payload being sent to API as form-data:', Object.fromEntries(apiPayload.entries()))

    try {
      const response = await fetch(
        'https://crowdevsserviceapi.azurewebsites.net/api/v1/Auth/User/registerUser',
        {
          method: 'POST',
          body: apiPayload
        }
      )

      const result = await response.json()
      console.log('API Response JSON:', result)

      if (response.ok) {
        console.log('User registered successfully:', result)
        setStep(4) // Avanza a la pantalla 4
      } else {
        console.error('Error from API:', result)
        if (result instanceof Array) {
          // Mapea los errores del API al formulario
          result.forEach((error) => {
            setError(error.propertyName, { message: error.errorMessage })
          })
        }
      }
    } catch (error) {
      console.error('Error connecting to the API:', error)
    }
  }

  return (
    <div>
      {step === 1 && <RegisterFormComponent onSubmit={(data) => handleNextStep(data)} />}
      {step === 2 && (
        <NewPasswordForm onSubmit={(data) => handleNextStep(data)} onGoBack={handleGoBack} />
      )}
      {step === 3 && (
        <Diduforgoturpassword onSubmit={() => handleSubmitToAPI()} onGoBack={handleGoBack} />
      )}
      {step === 4 && <AlertRegisterException onGoBack={handleGoBack} />}

      <div>
        <h3>Collected Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  )
}

export default MultiStepForm
