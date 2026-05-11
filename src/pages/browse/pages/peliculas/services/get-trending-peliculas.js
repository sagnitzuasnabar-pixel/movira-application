const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export async function getTrendingPeliculas() {
  const response = await fetch(`${BASE_URL}/trending/movie/week?language=es-ES&region=PE`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
  if (!response.ok) {
    throw new Error('Error al obtener películas trending')
  }
  return response.json()
}