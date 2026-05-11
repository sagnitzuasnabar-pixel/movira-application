import { useGetTrendingPeliculas } from './hooks/use-get-trending-peliculas'
import { PeliculasHero } from './components/peliculas-hero'
import { PeliculasRow } from './components/peliculas-row'

export function Peliculas() {
  const { peliculas, loading, error } = useGetTrendingPeliculas()

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Cargando...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen pt-16">
      <PeliculasHero movie={peliculas[0]} />
      <PeliculasRow title="Películas de acción"       genreId={28} />
      <PeliculasRow title="Películas de comedia"      genreId={35} />
      <PeliculasRow title="Cine dramático"            genreId={18} />
      <PeliculasRow title="Películas de terror"       genreId={27} />
      <PeliculasRow title="Ciencia ficción"           genreId={878} />
      <PeliculasRow title="Películas románticas"      genreId={10749} />
      <PeliculasRow title="Animación"                 genreId={16} />
      <PeliculasRow title="Thriller"                  genreId={53} />
      <PeliculasRow title="Aventura"                  genreId={12} />
      <PeliculasRow title="Películas de crimen"       genreId={80} />
    </div>
  )
}