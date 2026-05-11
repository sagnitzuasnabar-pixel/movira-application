import { useEffect, useState } from 'react'
import { getNovedadesPeliculas } from '../services/get-novedades-peliculas'

export const useGetNovedadesPeliculas = () => {
  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getNovedadesPeliculas()
      .then((data) => setPeliculas(data.results))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  return { peliculas, loading, error }
}