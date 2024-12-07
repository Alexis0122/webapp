// utils/apiUtils.ts
export const checkEmailExistence = async (email: string) => {
  try {
    // Realizamos la solicitud a la API usando fetch
    const response = await fetch(
      `https://crowdevsserviceapi.azurewebsites.net/api/v1/Auth/Admin?email=${email}`
    )

    if (response.status === 200) {
      return true // El correo ya está registrado
    } else {
      return false // El correo no existe
    }
  } catch (error) {
    console.error('Error al verificar el correo:', error)
    return false // Si hay error, consideramos que el correo no existe
  }
}
