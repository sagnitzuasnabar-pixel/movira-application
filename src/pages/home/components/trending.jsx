import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useGetTrending } from '../../../hooks/use-get-trending'
import { useSliderNavigation } from '../../../hooks/use-slider-navigation'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export function Trending() {
  const { movies, loading, error } = useGetTrending()
  const { sliderRef, handleScrollRight, handleScrollLeft } = useSliderNavigation()

  if (loading) {
    return (
      <section className="bg-black px-4 py-8">
        <p className="text-white">Cargando...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="bg-black px-4 py-8">
        <p className="text-red-500">Error: {error}</p>
      </section>
    )
  }

  return (
    <section className="bg-black px-4 py-8 md:px-30">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
        Tendencias
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
          {movies.map(function(movie, index) {
            return (
              <div
                key={movie.id}
                className="shrink-0 cursor-pointer flex items-end"
              >
                <span
                  className="font-bold text-gray-700 select-none leading-none"
                  style={{ fontSize: '160px', WebkitTextStroke: '4px #666' }}
                >
                  {index + 1}
                </span>
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-36 md:w-44 h-52 md:h-64 object-cover rounded-md -ml-8"
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