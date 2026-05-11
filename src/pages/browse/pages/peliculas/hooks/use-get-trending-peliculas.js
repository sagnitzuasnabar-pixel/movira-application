import { useEffect, useState } from 'react'
import { getTrendingPeliculas } from '../services/get-trending-peliculas'

export function useGetTrendingPeliculas() {
  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTrendingPeliculas()
      .then((data) => setPeliculas(data.results))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  return { peliculas, loading, error }
}