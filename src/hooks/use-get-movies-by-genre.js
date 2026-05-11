import { useEffect, useState } from 'react'
import { getMoviesByGenre } from '../services/get-movies-by-genre'

export const useGetMoviesByGenre = (genreId) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getMoviesByGenre(genreId)
      .then((data) => setMovies(data.results))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [genreId])

  return { movies, loading, error }
}