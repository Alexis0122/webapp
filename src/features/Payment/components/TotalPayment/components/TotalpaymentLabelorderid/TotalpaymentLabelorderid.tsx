/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from 'react'
import { Button } from '@mantine/core'
import './style.css'

interface Props {
  className: any
}

export const TotalpaymentLabelorderid = ({ className }: Props): JSX.Element => {
  return (
    <div className={`totalpayment-labelorderid ${className}`}>
      <Button
        className='button-instance'
        color='red'
        children='Order Summary - #04876542'
        size='xl'
        w='500px'
      />
    </div>
  )
}
