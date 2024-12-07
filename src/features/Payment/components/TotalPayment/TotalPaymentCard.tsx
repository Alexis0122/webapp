/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from 'react'
import { DivWrapper } from './components/DivWrapper'
import { Totalpayment } from './components/Totalpayment'
import { TotalpaymentLabelorderid } from './components/TotalpaymentLabelorderid'
import { TotalpaymentLabels } from './components/TotalpaymentLabels'
import { TotalpaymentWrapper } from './components/TotalpaymentWrapper'
import './style.css'

export const TotalpaymentCard = (): JSX.Element => {
  return (
    <div className='totalpayment-card'>
      <Totalpayment className='totalpayment-totalamountlabel' />
      <TotalpaymentWrapper
        className='totalpayment-grandtotallabel'
        hasImg={false}
        hasLine={false}
      />
      <DivWrapper className='totalpayment-couponlabel' />
      <TotalpaymentLabels
        arrow='https://c.animaapp.com/F8PWP7iM/img/arrow-9-2.svg'
        arrow1='https://c.animaapp.com/F8PWP7iM/img/arrow-11-2.svg'
        className='totalpayment-labels-instance'
        img='https://c.animaapp.com/F8PWP7iM/img/arrow-10-2.svg'
      />
      <TotalpaymentLabelorderid className='totalpayment-instance' />
    </div>
  )
}
