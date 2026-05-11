const API_URL = 'https://fakestoreapi.com/auth/login'

export const loginService = async ({ username, password }) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })

  if (!response.ok) {
    throw new Error('Usuario o contraseña incorrectos')
  }

  const data = await response.json()
  return data.token
}