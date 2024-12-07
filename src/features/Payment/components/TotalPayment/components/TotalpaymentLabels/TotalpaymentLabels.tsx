import React, { FC } from 'react'
import './style.css'
import { Input } from '@mantine/core'

interface TotalPaymentLabelsProps {
  className: any
  price: number
  itbis: number
  billingDate: string
}

const ARROWS = {
  default: 'https://c.animaapp.com/F8PWP7iM/img/arrow-8-2.svg',
  price: 'https://c.animaapp.com/F8PWP7iM/img/arrow-9-1.svg',
  billingCycle: 'https://c.animaapp.com/F8PWP7iM/img/arrow-10-1.svg',
  nextBilling: 'https://c.animaapp.com/F8PWP7iM/img/arrow-11-1.svg',
  perk: 'https://c.animaapp.com/F8PWP7iM/img/arrow-12-2.svg'
}

const STATIC_DATA = {
  plan: 'Classic',
  billingCycle: 'One Time',
  nextBillingDate: '10/23/2024',
  perk: 'All Included'
}

export const TotalPaymentLabels: FC<TotalPaymentLabelsProps> = ({
  className,
  price,
  billingDate,
  itbis
}) => {
  return (
    <div className={`totalpayment-labels ${className}`}>
      {/* Plan Section */}
      <div className='overlap-2'>
        <div className='text-wrapper-8'>Plan</div>
        <img className='arrow-2' alt='Arrow' src={ARROWS.default} />
      </div>
      <div className='text-wrapper-9'>{STATIC_DATA.plan}</div>

      {/* Price Section */}
      {/* <div className='overlap-3'>
        <div className='text-wrapper-8'>Price</div>
        <img className='arrow-3' alt='Arrow' src={ARROWS.price} />
      </div>
      <div className='text-wrapper-10'>{`$ ${price}`}</div>
      <div className='text-wrapper-11'>{STATIC_DATA.billingCycle}</div> */}

      {/* Price Section */}
      <div className='overlap-3'>
        <div className='text-wrapper-8'>Itbis</div>
        <img className='arrow-3' alt='Arrow' src={ARROWS.price} />
      </div>

      <div className='text-wrapper-10'>{`$ ${itbis}`}</div>
      <div className='text-wrapper-11'>{STATIC_DATA.billingCycle}</div>

      {/* Billing Cycle Section */}
      <div className='overlap-4'>
        <div className='text-wrapper-8'>Billing Cycle</div>
        <img className='arrow-4' alt='Arrow' src={ARROWS.billingCycle} />
      </div>

      {/* Next Billing Date Section */}
      <div className='overlap-group-2'>
        <div className='text-wrapper-8'>Next Billing Date</div>
        <img className='arrow-5' alt='Arrow' src={ARROWS.nextBilling} />
      </div>
      <div className='text-wrapper-12'>{billingDate}</div>

      {/* Selected Perk Section */}
      <div className='overlap-5'>
        <div className='text-wrapper-8'>Selected Perk</div>
        <div className='text-wrapper-13'>{STATIC_DATA.perk}</div>
        <img className='arrow-6' alt='Arrow' src={ARROWS.perk} />
      </div>
    </div>
  )
}
