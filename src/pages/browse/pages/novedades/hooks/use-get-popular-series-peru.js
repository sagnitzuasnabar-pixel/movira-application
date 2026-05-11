import { useEffect, useState } from 'react'
import { getPopularSeriesPeru } from '../services/get-popular-series-peru'

export const useGetPopularSeriesPeru = () => {
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPopularSeriesPeru()
      .then((data) => setSeries(data.results.slice(0, 10)))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  return { series, loading, error }
}