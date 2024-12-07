/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { FC } from 'react'
import { Button } from '@mantine/core'
import './style.css'

interface TotalPaymentLabelOrderIdProps {
  className: any
  summary: string
}

export const TotalPaymentLabelOrderId: FC<TotalPaymentLabelOrderIdProps> = ({className, summary}) => {
  return (
    <div className={`totalpayment-labelorderid ${className}`}>
      <Button
        className='button-instance'
        color='red'
        children={`${summary}`}
        size='xl'
        w='500px'
      />
    </div>
  )
}
