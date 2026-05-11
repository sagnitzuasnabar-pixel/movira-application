const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export const getNovedadesPeliculas = async () => {
  const response = await fetch(`${BASE_URL}/movie/now_playing?language=es-ES&region=PE&page=1`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })

  if (!response.ok) {
    throw new Error('Failed getting new movies')
  }

  return response.json()
}