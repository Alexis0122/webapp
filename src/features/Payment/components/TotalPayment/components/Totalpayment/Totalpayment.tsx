
import React, { FC } from 'react'
import './style.css'

interface TotalPaymentProps {
  className: any
  total: number
}

export const TotalPayment: FC<TotalPaymentProps> = ({className, total}) => {
  return (
    <div className={`totalpayment ${className}`}>
      <div className='overlap-group'>
        <div className='text-wrapper'>Total Account</div>

        <div className='div'>{total}</div>

        <img
          className='arrow'
          alt='Arrow'
          src='https://c.animaapp.com/F8PWP7iM/img/arrow-13-2.svg'
        />
      </div>
    </div>
  )
}
