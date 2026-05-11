import { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Play, ThumbsUp, X, ArrowLeft } from 'lucide-react'
import { useGetMovieDetail } from './hooks/use-get-movie-details'
import { useGetMovieTrailer } from './hooks/use-get-movie-trailer'
import { useMiLista } from '../miLista/hooks/use-mi-lista'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

export function MovieDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { movie, loading, error } = useGetMovieDetail(id)
  const { trailerKey } = useGetMovieTrailer(id)
  const { agregarALista } = useMiLista()
  const [showTrailer, setShowTrailer] = useState(false)
  const [liked, setLiked] = useState(false)

  function handleOpenTrailer() {
    setShowTrailer(true)
    agregarALista({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      tipo: 'movie'
    })
  }

  function handleCloseTrailer() {
    setShowTrailer(false)
  }

  function handleGoBack() {
    navigate(-1)
  }

  function handleLike() {
    setLiked(!liked)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-xl">Cargando...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-red-500 text-xl">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">

      <div
        className="relative min-h-screen flex items-end pb-20 px-4 md:px-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})` }}
      >
        <div className="absolute inset-0  bg-linear-to-r from-black/90 to-black/30"></div>
        <div className="absolute inset-0  bg-linear-to-t from-black via-black/20 to-transparent"></div>

        <button
          onClick={handleGoBack}
          className="absolute top-35 left-4 md:left-12 z-30 flex items-center gap-2 text-white"
        >
          <ArrowLeft className="size-6" />
          <span className="text-sm font-semibold">Regresar</span>
        </button>

        <div className="relative z-10 max-w-2xl">

          <p className="text-red-500 text-sm font-bold mb-2 uppercase tracking-widest">
            Película de Movira
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 uppercase leading-none">
            {movie.title}
          </h1>

          <div className="flex items-center gap-3 mb-4 text-white text-sm">
            <span className="text-green-400 font-bold">
              {Math.round(movie.vote_average * 10)}% relevante
            </span>
            <span>{movie.release_date?.split('-')[0]}</span>
            <span className="border border-gray-500 px-1 text-xs">
              {movie.adult ? '+18' : '+13'}
            </span>
            <span>{movie.runtime} min</span>
          </div>

          <p className="text-white text-sm md:text-base mb-6 line-clamp-4 leading-relaxed">
            {movie.overview}
          </p>

          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={handleOpenTrailer}
              className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              <Play className="size-6" />
              Reproducir
            </button>

            <button
              onClick={handleLike}
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors duration-300 ${
                liked
                  ? 'border-white bg-white text-black'
                  : 'border-gray-400 text-white hover:border-white'
              }`}
            >
              <ThumbsUp className="size-5" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres && movie.genres.map(function(genre) {
              return (
                <span
                  key={genre.id}
                  className="text-xs border border-gray-600 text-gray-300 px-3 py-1 rounded-full"
                >
                  {genre.name}
                </span>
              )
            })}
          </div>

        </div>
      </div>

      {showTrailer && trailerKey && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={handleCloseTrailer}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 flex items-center gap-2"
            >
              <X className="size-6" />
              <span>Cerrar</span>
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                title="Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {showTrailer && !trailerKey && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-xl mb-4">No hay trailer disponible</p>
            <button
              onClick={handleCloseTrailer}
              className="text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

    </div>
  )
}