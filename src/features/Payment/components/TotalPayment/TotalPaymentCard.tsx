import React, { FC, useEffect, useState } from 'react'
import './style.css'
import { TotalPayment, TotalPaymentLabelOrderId, TotalPaymentLabels, TotalPaymentWrapper } from './components'

const ITBIS_PERCENTAGE = 0.18;

interface TotalPaymentCardProps {
  grandTotalPayment: number;
  onGrandTotalChange?: (newGrandTotal: number) => void
}


export const TotalPaymentCard: FC<TotalPaymentCardProps> = ({grandTotalPayment, onGrandTotalChange}) => {

  const [amount, setAmount] = useState(0);
  const billingDate = new Date().toLocaleDateString(); // Fecha actual en formato local
  const itbis = amount * ITBIS_PERCENTAGE;
  const calculatedGrandTotal = amount + itbis;

  const generateInvoiceId = () => {
    return `OrderID-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };
  const [invoiceId] = useState<string>(generateInvoiceId())

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setAmount(value);
  };

  useEffect(() => {
    if (onGrandTotalChange) {
      onGrandTotalChange(calculatedGrandTotal);
    }
  }, [calculatedGrandTotal, onGrandTotalChange]);

  return (
    <div className='totalpayment-card'>
      <TotalPayment className='totalpayment-totalamountlabel'  total={amount}/>
      <TotalPaymentWrapper
        className='totalpayment-grandtotallabel'
        hasImg={false}
        hasLine={false}
        grandTotal={calculatedGrandTotal}
      />
      <TotalPaymentLabels className='totalpayment-labels-instance' price={amount} billingDate={billingDate} itbis={itbis} />
      <input
        id="amount"
        type="number"
        className="totalpayment-input"
        value={amount}
        onChange={handleInputChange}
        placeholder="Ingresa el monto"
      />
      <TotalPaymentLabelOrderId className='totalpayment-instance' summary={invoiceId} />
    </div>
  )
}
