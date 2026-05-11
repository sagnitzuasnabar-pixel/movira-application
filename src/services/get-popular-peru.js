const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export const getPopularPeru = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?language=es-ES&region=PE`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })

  if (!response.ok) {
    throw new Error('Failed getting popular movies in Peru')
  }

  return response.json()
}