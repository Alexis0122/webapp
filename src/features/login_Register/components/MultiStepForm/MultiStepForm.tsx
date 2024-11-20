import React, { useState } from 'react'
import { NewPasswordForm } from '../../register_form/RepeatYourPassword'
import { Diduforgoturpassword } from '../../register_form/didYouForgetYourPassword'
import { RegisterFormComponent } from '../../register_form'

const MultiStepForm = () => {
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }

  return (
    <div>
      {step === 1 && <RegisterFormComponent onSubmit={handleNextStep} />}
      {step === 2 && <NewPasswordForm onSubmit={handleNextStep} />}
      {step === 3 && <Diduforgoturpassword />}
    </div>
  )
}

export default MultiStepForm
