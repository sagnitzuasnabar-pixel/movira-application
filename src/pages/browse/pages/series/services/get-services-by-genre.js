const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export async function getSeriesByGenre(genreId) {
  const response = await fetch(`${BASE_URL}/discover/tv?language=es-ES&with_genres=${genreId}&sort_by=popularity.desc`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
  if (!response.ok) {
    throw new Error('Error al obtener series por género')
  } 
  return response.json()
}