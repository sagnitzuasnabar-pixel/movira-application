import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useGetPopularSeriesPeru } from '../hooks/use-get-popular-series-peru'
import { IMAGE_BASE_URL_SMALL } from '../../../../../services/get-trending'
import { useSliderNavigation } from '../../../../../hooks/use-slider-navigation'

export function TopTenSeriesPeru() {
  const { series, loading, error } = useGetPopularSeriesPeru()
  const { sliderRef, handleScrollRight, handleScrollLeft, handleClickSerie } = useSliderNavigation()

  if (loading) {
    return <p className="text-white px-8 py-6">Cargando...</p>
  }

  if (error) {
    return <p className="text-red-500 px-8 py-6">Error: {error}</p>
  }

  return (
    <section className="px-4 md:px-8 py-6">
      <h2 className="text-white text-lg md:text-xl font-bold mb-4">
        Las 10 series más populares en Perú hoy
      </h2>
      <div className="relative group">
        <button
          onClick={handleScrollLeft}
          className="absolute left-0 top-0 bottom-0 z-10 bg-black/50 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center"
        >
          <ChevronLeft className="text-white size-8" />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-0 overflow-x-scroll scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
        >
          {series.map(function(show, index) {
            return (
              <div
                key={show.id}
                onClick={function() { handleClickSerie(show.id) }}
                className="shrink-0 cursor-pointer flex items-end"
              >
                <span
                  className="font-bold text-gray-800 select-none leading-none"
                  style={{ fontSize: '120px', WebkitTextStroke: '3px #555' }}
                >
                  {index + 1}
                </span>
                <img
                  src={`${IMAGE_BASE_URL_SMALL}${show.poster_path}`}
                  alt={show.name}
                  className="w-28 md:w-36 h-40 md:h-52 object-cover rounded-md -ml-6"
                />
              </div>
            )
          })}
        </div>

        <button
          onClick={handleScrollRight}
          className="absolute right-0 top-0 bottom-0 z-10 bg-black/50 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center"
        >
          <ChevronRight className="text-white size-8" />
        </button>
      </div>
    </section>
  )
}