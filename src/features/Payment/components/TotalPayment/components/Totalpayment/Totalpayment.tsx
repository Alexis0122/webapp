/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from 'react'
import './style.css'

interface Props {
  className: any
}

export const Totalpayment = ({ className }: Props): JSX.Element => {
  return (
    <div className={`totalpayment ${className}`}>
      <div className='overlap-group'>
        <div className='text-wrapper'>Total Account</div>

        <div className='div'>$33.12</div>

        <img
          className='arrow'
          alt='Arrow'
          src='https://c.animaapp.com/F8PWP7iM/img/arrow-13-2.svg'
        />
      </div>

      <div className='overlap'>
        <div className='text-wrapper-2'>-$03.12</div>

        <div className='text-wrapper-3'>Cuopon Applied</div>

        <img className='img' alt='Arrow' src='https://c.animaapp.com/F8PWP7iM/img/arrow-14-2.svg' />
      </div>
    </div>
  )
}
