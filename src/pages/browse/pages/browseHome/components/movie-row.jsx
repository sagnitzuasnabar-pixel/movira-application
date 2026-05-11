import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useGetMoviesByGenre } from '../../../../../hooks/use-get-movies-by-genre'
import { IMAGE_BASE_URL_SMALL } from '../../../../../services/get-trending'
import { useSliderNavigation } from '../../../../../hooks/use-slider-navigation'

export function MovieRow({ title, genreId }) {
  const { movies, loading, error } = useGetMoviesByGenre(genreId)
  const { sliderRef, handleScrollRight, handleScrollLeft, handleClickMovie } = useSliderNavigation();  
  if (loading) {
    return <p className="text-white px-8 py-6">Cargando...</p>
  }

  if (error) {
    return <p className="text-red-500 px-8 py-6">Error: {error}</p>
  }

  return (
    <section className="px-4 md:px-8 py-4">
      <h2 className="text-white text-lg md:text-xl font-bold mb-3">{title}</h2>
      <div className="relative group">
        <button onClick={handleScrollLeft} className="absolute left-0 top-0 bottom-0 z-10 bg-black/50 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
          <ChevronLeft className="text-white size-8" />
        </button>

        <div ref={sliderRef} className="flex gap-2 overflow-x-scroll scroll-smooth" style={{ scrollbarWidth: 'none' }}>
          {movies.map(function(movie) {
            return (
              <div 
                key={movie.id} 
                onClick={() => handleClickMovie(movie.id)}
                className="relative shrink-0 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                <img
                  src={`${IMAGE_BASE_URL_SMALL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-28 md:w-36 h-40 md:h-52 object-cover rounded"
                />
              </div>
            )
          })}
        </div>

        <button onClick={handleScrollRight} className="absolute right-0 top-0 bottom-0 z-10 bg-black/50 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
          <ChevronRight className="text-white size-8" />
        </button>
      </div>
    </section>
  )
}