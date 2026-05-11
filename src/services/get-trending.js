const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'; /*Ruta de Imagenes a usar en Hero*/
export const IMAGE_BASE_URL_SMALL = 'https://image.tmdb.org/t/p/w500';  /*Ruta de Imagenes a usar en Posters*/

export const getTrending = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/week?language=es-ES&region=PE`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })

  if (!response.ok) {
    throw new Error('Failed getting trending movies')
  }

  return response.json()
}