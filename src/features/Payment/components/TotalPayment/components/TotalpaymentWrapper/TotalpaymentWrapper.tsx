/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

interface Props {
  className: any
  hasLine: boolean
  hasImg: boolean
}

export const TotalpaymentWrapper = ({
  className,
  hasLine = true,
  hasImg = true
}: Props): JSX.Element => {
  return (
    <div className={`totalpayment-wrapper ${className}`}>
      <div className='text-wrapper-4'>Grand Total</div>

      <div className='text-wrapper-5'>$30.00</div>

      {hasLine && (
        <img className='line' alt='Line' src='https://c.animaapp.com/F8PWP7iM/img/line-10.svg' />
      )}

      {hasImg && (
        <img className='line-2' alt='Line' src='https://c.animaapp.com/F8PWP7iM/img/line-9.svg' />
      )}
    </div>
  )
}

TotalpaymentWrapper.propTypes = {
  hasLine: PropTypes.bool,
  hasImg: PropTypes.bool
}
