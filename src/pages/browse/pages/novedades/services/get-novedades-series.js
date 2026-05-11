const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export const getNovedadesSeries = async () => {
  const response = await fetch(`${BASE_URL}/tv/on_the_air?language=es-ES&page=1`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })

  if (!response.ok) {
    throw new Error('Failed getting new series')
  }

  return response.json()
}