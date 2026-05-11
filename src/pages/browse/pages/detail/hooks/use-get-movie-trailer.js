import { useEffect, useState } from 'react'
import { getMovieTrailer } from '../services/get-movie-trailer'

export function useGetMovieTrailer(movieId) {
  const [trailerKey, setTrailerKey] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getMovieTrailer(movieId)
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
  }, [movieId])

  return { trailerKey, loading, error }
}