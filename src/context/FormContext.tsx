import React, { createContext, useContext, useState } from 'react'

// Definir el tipo para el estado del formulario
interface FormContextProps {
  formData: Record<string, any>
  updateFormData: (data: Record<string, any>) => void
}

// Crear el contexto
const FormContext = createContext<FormContextProps | undefined>(undefined)

// Proveedor del contexto
export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<Record<string, any>>({})

  const updateFormData = (data: Record<string, any>) => {
    setFormData((prevData) => ({ ...prevData, ...data }))
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>{children}</FormContext.Provider>
  )
}

// Hook para usar el contexto
export const useFormContext = (): FormContextProps => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}
