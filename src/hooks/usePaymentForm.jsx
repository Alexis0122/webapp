import { useState } from 'react'

export const usePaymentForm = () => {
  const [values, setValues] = useState({
    cardName: '',
    cardNumber: '',
    cardType: '',
    cardExpiration: '',
    cardSecurityCode: '',
    cardPostalCode: '',
    focus: ''
  })

  const [errors, setErrors] = useState({})

  const handleFocus = (e) => {
    setValues({
      ...values,
      focus: e.target.name === 'cardSecurityCode' ? 'cvc' : e.target.name
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Assuming validateInfo is a function that returns errors object

    // Set errors using setErrors if errors exist
    setErrors(errors)

    // If there are no errors, you can proceed with the form submission logic
    if (Object.keys(errors).length === 0) {
      // Proceed with form submission (e.g., call an API, etc.)
      console.log('Form submitted successfully')
    } else {
      console.log('There are validation errors')
    }
  }

  return { handleChange, handleFocus, handleSubmit, values, errors }
}

export default usePaymentForm
