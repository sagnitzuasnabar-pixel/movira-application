import { useGetTrending } from "../../../../hooks/use-get-trending";
import { Hero } from "./components/hero";
import { MovieRow } from "./components/movie-row";
import { TopTenPeru } from "./components/top-ten-peru";
import { TrendingRow } from "./components/trending-row";

export function BrowseHome() {
  const { movies, loading, error } = useGetTrending()

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
      <Hero movie={movies[0]} />
      <TopTenPeru/>
      <TrendingRow title= "Tendencias de la semana"/>
      <MovieRow title="Películas de acción" genreId={28} />
      <MovieRow title="Películas de comedia" genreId={35} />
      <MovieRow title="Cine dramático" genreId={18} />
      <MovieRow title="Películas de terror" genreId={27} />
      <MovieRow title="Ciencia ficción" genreId={878} />
      <MovieRow title="Películas románticas" genreId={10749} />
      <MovieRow title="Animación" genreId={16} />
      <MovieRow title="TV-Peliculas" genreId={10770} />
      <MovieRow title="Thriller" genreId={53} />
    </div>
  )
}
