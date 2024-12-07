/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

interface Props {
  className: any
  arrow: string
  img: string
  arrow1: string
}

export const TotalpaymentLabels = ({
  className,
  arrow = 'https://c.animaapp.com/F8PWP7iM/img/arrow-9-1.svg',
  img = 'https://c.animaapp.com/F8PWP7iM/img/arrow-10-1.svg',
  arrow1 = 'https://c.animaapp.com/F8PWP7iM/img/arrow-11-1.svg'
}: Props): JSX.Element => {
  return (
    <div className={`totalpayment-labels ${className}`}>
      <div className='overlap-2'>
        <div className='text-wrapper-8'>Plan</div>

        <img
          className='arrow-2'
          alt='Arrow'
          src='https://c.animaapp.com/F8PWP7iM/img/arrow-8-2.svg'
        />
      </div>

      <div className='text-wrapper-9'>Classic</div>

      <div className='overlap-3'>
        <div className='text-wrapper-8'>Price</div>

        <img className='arrow-3' alt='Arrow' src={arrow} />
      </div>

      <div className='text-wrapper-10'>$33.12</div>

      <div className='text-wrapper-11'>One Time</div>

      <div className='overlap-4'>
        <div className='text-wrapper-8'>Billing Cycle</div>

        <img className='arrow-4' alt='Arrow' src={img} />
      </div>

      <div className='overlap-group-2'>
        <div className='text-wrapper-8'>Next Billing Date</div>

        <img className='arrow-5' alt='Arrow' src={arrow1} />
      </div>

      <div className='text-wrapper-12'>10/23/2024</div>

      <div className='overlap-5'>
        <div className='text-wrapper-8'>Selectioned Perk</div>

        <div className='text-wrapper-13'>All Included</div>

        <img
          className='arrow-6'
          alt='Arrow'
          src='https://c.animaapp.com/F8PWP7iM/img/arrow-12-2.svg'
        />
      </div>
    </div>
  )
}

TotalpaymentLabels.propTypes = {
  arrow: PropTypes.string,
  img: PropTypes.string,
  arrow1: PropTypes.string
}
