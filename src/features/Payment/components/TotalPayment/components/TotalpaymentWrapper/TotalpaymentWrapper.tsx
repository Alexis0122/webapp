
import PropTypes from 'prop-types'
import React, { FC } from 'react'
import './style.css'

interface TotalPaymentWrapperProps {
  className: any
  hasLine: boolean
  hasImg: boolean
  grandTotal: number
}

export const TotalPaymentWrapper: FC<TotalPaymentWrapperProps> = ({ className, grandTotal, hasImg, hasLine }) => {
  return (
    <div className={`totalpayment-wrapper ${className}`}>
      <div className='text-wrapper-4'>Grand Total</div>

      <div className='text-wrapper-5'>{grandTotal}</div>

      {hasLine && (
        <img className='line' alt='Line' src='https://c.animaapp.com/F8PWP7iM/img/line-10.svg' />
      )}

      {hasImg && (
        <img className='line-2' alt='Line' src='https://c.animaapp.com/F8PWP7iM/img/line-9.svg' />
      )}
    </div>
  )
}

