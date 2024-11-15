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
      {step === 2 && <Diduforgoturpassword onSubmit={handleNextStep} />}
      {step === 3 && <NewPasswordForm />}
    </div>
  )
}

export default MultiStepForm
