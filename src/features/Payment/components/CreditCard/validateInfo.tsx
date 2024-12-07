import valid from 'card-validator'

interface ValidateInfoValues {
  cardNumber: string
  cardExpiration: string
  cardSecurityCode: string
  cardName: string
  cardPostalCode: string
  cardType: string
}

interface ValidationErrors {
  show: boolean
  variant: string
  message: string
  cname: boolean
  cnumber: boolean
  ctype: boolean
  cexp: boolean
  ccvv: boolean
  cpostal: boolean
}

export default function validateInfo(values: ValidateInfoValues): ValidationErrors {
  let errors: ValidationErrors = {
    show: true,
    variant: 'danger',
    message: 'An unknown error occurred. Please try again later',
    cname: false,
    cnumber: false,
    ctype: false,
    cexp: false,
    ccvv: false,
    cpostal: false
  }

  let creditCard = valid.number(values.cardNumber)
  let expirationDate = valid.expirationDate(values.cardExpiration)
  const cvv = valid.cvv(values.cardSecurityCode)
  // const cardholderName = valid.cardholderName(values.cardName)
  const postalCode = valid.postalCode(values.cardPostalCode)

  if (values.cardPostalCode === null || !values.cardPostalCode.trim()) {
    errors.message = 'Credit card postal code is not complete'
  } else if (postalCode.isValid) {
    errors.cpostal = true
  } else {
    errors.message = 'Credit card postal code is invalid'
  }

  if (values.cardSecurityCode === null || !values.cardSecurityCode.trim()) {
    errors.message = 'Credit card CVC is not complete'
  } else if (cvv.isValid) {
    errors.ccvv = true
  } else {
    errors.message = 'Credit card CVC is invalid'
  }

  if (values.cardExpiration === null || !values.cardExpiration.trim()) {
    errors.message = 'Credit card expiration date is not complete'
  } else if (expirationDate.isValid) {
    errors.cexp = true
  } else {
    errors.message = 'Credit card expiration date is invalid'
  }

  if (values.cardType === null || !values.cardType.trim() || creditCard.card === null) {
    errors.message = 'Credit card type is not complete'
  } else if (
    creditCard.card.type &&
    creditCard.card.type.toUpperCase() === values.cardType.toUpperCase()
  ) {
    errors.ctype = true
  } else {
    errors.message = 'Credit card type is invalid'
  }

  if (values.cardNumber === null || !values.cardNumber.trim()) {
    errors.message = 'Credit card number is not complete'
  } else if (creditCard.isValid) {
    errors.cnumber = true
  } else {
    errors.message = 'Credit card number is invalid'
  }

  if (values.cardName === null || !values.cardName.trim()) {
    errors.message = 'Cardholder name is not complete'
  } else {
    errors.cname = true
  }

  if (
    errors.ctype &&
    errors.cname &&
    errors.cnumber &&
    errors.cexp &&
    errors.cpostal &&
    errors.ccvv
  ) {
    errors.variant = 'success'
    errors.message = 'Credit Card is valid'
  }

  return errors
}
