const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export async function getMovieTrailer(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?language=es-ES`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })

  if (!response.ok) {
    throw new Error('Error al obtener trailer de película')
  }

  return response.json()
}