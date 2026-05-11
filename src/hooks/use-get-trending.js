import { useEffect, useState } from 'react'
import { getTrending } from '../services/get-trending'

export const useGetTrending = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrending()
      .then((data) => setMovies(data.results.slice(0, 10)))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  return { movies, loading, error }
}