import { useEffect, useState } from 'react'
import { getSerieTrailer } from '../services/get-serie-trailer'

export function useGetSerieTrailer(serieId) {
  const [trailerKey, setTrailerKey] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getSerieTrailer(serieId)
      .then((data) => {
        const trailer = data.results.find(function(video) {
          return video.type === 'Trailer' && video.site === 'YouTube'
        })
        if (trailer) {
          setTrailerKey(trailer.key)
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [serieId])

  return { trailerKey, loading, error }
}