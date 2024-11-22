import React, { useState } from 'react'
import { NewPasswordForm } from '../../register_form/RepeatYourPassword'
import { Diduforgoturpassword } from '../../register_form/didYouForgetYourPassword'
import { RegisterFormComponent } from '../../register_form'

const MultiStepForm = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<any>({})

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

  const handleSubmitToAPI = async () => {
    console.log('Final formData before API call:', formData)

    const apiPayload = {
      firstName: String(formData.name || 'xxxxx'),
      lastName: String(formData.surname || 'xxxxx'),
      email: String(formData.email || 'xxxxx'),
      userName: String(formData.username || 'xxxxx'),
      password: String(formData.newPassword || 'xxxxx'),
      confirmPassword: String(formData.confirmPassword || 'xxxxx')
    }
    console.log('Payload being sent to API:', apiPayload)

    try {
      const response = await fetch(
        'https://crowdevsserviceapi.azurewebsites.net/api/v1/Auth/User/registerUser',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(apiPayload)
        }
      )

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)
      const result = await response.json()
      console.log('API Response JSON:', result)

      if (response.ok) {
        console.log('User registered successfully:', result)
      } else {
        console.error('Error from API:', result)
      }
    } catch (error) {
      console.error('Error connecting to the API:', error)
    }

    console.log('Final state of formData:', formData)
    console.log('Step count at submission:', step)
    console.log('API call completed for registration')

    if (
      !formData.name ||
      !formData.surname ||
      !formData.email ||
      !formData.username ||
      !formData.newPassword
    ) {
      console.warn('Warning: Some form fields are missing data before submission!')
    }

    console.log('Checking if the form data is valid: ', apiPayload) // Log the payload validation
  }

  return (
    <div>
      {step === 1 && <RegisterFormComponent onSubmit={(data) => handleNextStep(data)} />}
      {step === 2 && <NewPasswordForm onSubmit={(data) => handleNextStep(data)} />}
      {step === 3 && <Diduforgoturpassword onSubmit={() => handleSubmitToAPI()} />}
      <div>
        <h3>Collected Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  )
}

export default MultiStepForm
