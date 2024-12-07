import { PaymentFormComponent } from '@/features/Payment/payment'
import router from 'next/router'

import React, { useEffect, useState } from 'react'

export default function PaymentPage() {
  const { id } = router.query
  const [projectId, setProjectId] = useState<number | null>(null);


  useEffect(() => {
    if (id) {
      const numericId = parseInt(id as string, 10);
      if (!isNaN(numericId)) {
        setProjectId(numericId);
      }
    }
  }, [id]);

  console.log(router.query)

  if (!projectId) {
    return <div>Cargando...</div>; // O un mensaje de error si el ID es inválido
  }

  return (
    <>
      <PaymentFormComponent projectId={projectId}/>
    </>
  )
}
