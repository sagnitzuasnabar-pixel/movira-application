import { useEffect, useState } from 'react'
import { getPeliculasByGenre } from '../services/get-peliculas-by-genre'

export function useGetPeliculasByGenre(genreId) {
  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPeliculasByGenre(genreId)
      .then((data) => setPeliculas(data.results))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [genreId])

  return { peliculas, loading, error }
}