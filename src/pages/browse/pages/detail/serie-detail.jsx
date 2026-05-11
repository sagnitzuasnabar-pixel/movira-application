import { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Play, ThumbsUp, X, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react'
import { useGetSerieDetail } from './hooks/use-get-serie-detail'
import { useGetSerieTrailer } from './hooks/use-get-serie-trailer'
import { useMiLista } from '../miLista/hooks/use-mi-lista'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
const IMAGE_BASE_URL_SMALL = 'https://image.tmdb.org/t/p/w500'

export function SerieDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { serie, loading, error } = useGetSerieDetail(id)
  const { trailerKey } = useGetSerieTrailer(id)
  const { agregarALista } = useMiLista()
  const [showTrailer, setShowTrailer] = useState(false)
  const [temporadaAbierta, setTemporadaAbierta] = useState(null)
  const [liked, setLiked] = useState(false)

  function handleOpenTrailer() {
    setShowTrailer(true)
    agregarALista({
      id: serie.id,
      title: serie.name,
      poster_path: serie.poster_path,
      tipo: 'serie'
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

  function handleToggleTemporada(index) {
    if (temporadaAbierta === index) {
      setTemporadaAbierta(null)
    } else {
      setTemporadaAbierta(index)
    }
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
        style={{ backgroundImage: `url(${IMAGE_BASE_URL}${serie.backdrop_path})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/90 to-black/30"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>

        <button
          onClick={handleGoBack}
          className="absolute top-35 left-4 md:left-12 z-40 flex items-center gap-2 text-white"
        >
          <ArrowLeft className="size-6" />
          <span className="text-sm font-semibold">Regresar</span>
        </button>

        <div className="relative z-10 max-w-2xl">

          <p className="text-red-500 text-sm font-bold mb-2 uppercase tracking-widest">
            Serie de Movira
          </p>

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 uppercase leading-tight">
            {serie.name}
          </h1>

          <div className="flex items-center gap-3 mb-4 text-white text-sm">
            <span className="text-green-400 font-bold">
              {Math.round(serie.vote_average * 10)}% relevante
            </span>
            <span>{serie.first_air_date?.split('-')[0]}</span>
            <span className="border border-gray-500 px-1 text-xs">+13</span>
            <span>{serie.number_of_seasons} temporadas</span>
          </div>

          <p className="text-white text-sm md:text-base mb-6 line-clamp-4 leading-relaxed">
            {serie.overview}
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
            {serie.genres && serie.genres.map(function(genre) {
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

      <div className="bg-black px-4 md:px-12 py-10">
        <h2 className="text-white text-2xl font-bold mb-6">Episodios</h2>

        {serie.seasons && serie.seasons.map(function(temporada, index) {
          return (
            <div key={temporada.id} className="mb-4 border border-gray-800 rounded-lg overflow-hidden">

              <button
                onClick={function() { handleToggleTemporada(index) }}
                className="w-full flex items-center justify-between px-6 py-4 bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {temporada.poster_path && (
                    <img
                      src={`${IMAGE_BASE_URL_SMALL}${temporada.poster_path}`}
                      alt={temporada.name}
                      className="w-12 h-16 object-cover rounded"
                    />
                  )}
                  <div className="text-left">
                    <p className="text-white font-bold">{temporada.name}</p>
                    <p className="text-gray-400 text-sm">{temporada.episode_count} episodios</p>
                  </div>
                </div>
                {temporadaAbierta === index ? (
                  <ChevronUp className="text-white size-5" />
                ) : (
                  <ChevronDown className="text-white size-5" />
                )}
              </button>

              {temporadaAbierta === index && (
                <div className="bg-zinc-950 px-6 py-4">
                  <p className="text-gray-400 text-sm mb-4">{temporada.overview}</p>
                  <p className="text-gray-500 text-xs">
                    Estreno: {temporada.air_date?.split('-')[0] ?? 'Sin fecha'}
                  </p>
                </div>
              )}

            </div>
          )
        })}
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