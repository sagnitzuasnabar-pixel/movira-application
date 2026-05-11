import { useGetTrendingSeries } from './hooks/use-get-trending-series'
import { SeriesHero } from './components/series-hero'
import { SeriesRow } from './components/series-row'

export function Series() {
  const { series, loading, error } = useGetTrendingSeries()

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
      <SeriesHero show={series[0]} />
      <SeriesRow title="Series de drama"           genreId={18} />
      <SeriesRow title="Series de acción"          genreId={10759} />
      <SeriesRow title="Series de comedia"         genreId={35} />
      <SeriesRow title="Series de crimen"          genreId={80} />
      <SeriesRow title="Series de misterio"        genreId={9648} />
      <SeriesRow title="Ciencia ficción"           genreId={10765} />
      <SeriesRow title="Series románticas"         genreId={10749} />
      <SeriesRow title="Series de animación"       genreId={16} />
      <SeriesRow title="Series de reality"          genreId={10764} />
    </div>
  )
}