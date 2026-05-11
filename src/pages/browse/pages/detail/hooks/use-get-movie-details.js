import { useEffect, useState } from 'react'
import { getMovieDetail } from '../services/get-movie-detail'

export function useGetMovieDetail(movieId) {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getMovieDetail(movieId)
      .then((data) => setMovie(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [movieId])

  return { movie, loading, error }
}