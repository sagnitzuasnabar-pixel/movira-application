const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export async function getPeliculasByGenre(genreId) {
  const response = await fetch(`${BASE_URL}/discover/movie?language=es-ES&with_genres=${genreId}&sort_by=popularity.desc`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
  if (!response.ok) {
    throw new Error('Error al obtener películas por género')
  }
  return response.json()
}