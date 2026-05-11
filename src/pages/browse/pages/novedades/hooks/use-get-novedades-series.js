import { useEffect, useState } from 'react'
import { getNovedadesSeries } from '../services/get-novedades-series'

export const useGetNovedadesSeries = () => {
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getNovedadesSeries()
      .then((data) => setSeries(data.results))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  return { series, loading, error }
}