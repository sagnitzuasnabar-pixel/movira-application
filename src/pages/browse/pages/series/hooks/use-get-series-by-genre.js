import { useEffect, useState } from 'react'
import { getSeriesByGenre } from '../services/get-services-by-genre'

export function useGetSeriesByGenre(genreId) {
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getSeriesByGenre(genreId)
      .then((data) => setSeries(data.results))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [genreId])

  return { series, loading, error }
}