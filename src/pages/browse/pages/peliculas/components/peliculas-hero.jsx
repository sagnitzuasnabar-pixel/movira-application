import { Play, Info } from 'lucide-react'
import { useNavigate } from 'react-router'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

export function PeliculasHero({ movie }) {
  const navigate = useNavigate();
   
  function handleReproducir() {
    navigate(`/browse/movie/${movie.id}`)
  }
  
  if (!movie) {
    return null
  }

  return (
    <div
      className="relative min-h-screen flex items-end pb-32 px-4 md:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})` }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>

      <div className="absolute top-24 left-4 md:left-12 z-10">
        <h1 className="text-white text-4xl md:text-5xl font-bold">Películas</h1>
      </div>

      <div className="relative z-10 max-w-xl">
        <p className="text-white text-sm font-semibold mb-2">Película de Movira</p>
        <h1 className="text-3xl md:text-7xl font-bold text-white mb-4 uppercase">
          {movie.title}
        </h1>
        <p className="text-white text-sm md:text-base mb-6 line-clamp-3">
          {movie.overview}
        </p>
        <div className="flex gap-3">
          <button 
          onClick={handleReproducir}
          className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200"
          >
            <Play className="size-5" />
            Reproducir
          </button>
          <button className="flex items-center gap-2 bg-gray-500/70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-500">
            <Info className="size-5" />
            Más información
          </button>
        </div>
      </div>
    </div>
  )
}