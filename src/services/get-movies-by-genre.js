const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export const getMoviesByGenre = async (genreId) => {
  const response = await fetch(`${BASE_URL}/discover/movie?language=es-ES&with_genres=${genreId}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })

  if (!response.ok) {
    throw new Error('Failed getting movies by genre')
  }

  return response.json()
}