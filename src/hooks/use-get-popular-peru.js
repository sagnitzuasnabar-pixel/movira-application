import { useEffect, useState } from "react";
import { getPopularPeru } from "../services/get-popular-peru";

export const useGetPopularPeru = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPopularPeru()
      .then((data) => setMovies(data.results.slice(0, 10)))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  return { movies, loading, error }
}