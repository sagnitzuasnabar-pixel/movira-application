import { useEffect, useState } from 'react'
import { getSerieDetail } from '../services/get-serie-detail'

export function useGetSerieDetail(serieId) {
  const [serie, setSerie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getSerieDetail(serieId)
      .then((data) => setSerie(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [serieId])

  return { serie, loading, error }
}