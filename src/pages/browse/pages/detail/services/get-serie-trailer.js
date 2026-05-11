const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export async function getSerieTrailer(serieId) {
  const response = await fetch(`${BASE_URL}/tv/${serieId}/videos?language=es-ES`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })

  if (!response.ok) {
    throw new Error('Error al obtener trailer de serie')
  }

  return response.json()
}