import { useEffect, useState } from 'react'
import { getTrendingSeries } from '../services/get-trending-series'

export function useGetTrendingSeries() {
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTrendingSeries()
      .then((data) => setSeries(data.results))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  return { series, loading, error }
}