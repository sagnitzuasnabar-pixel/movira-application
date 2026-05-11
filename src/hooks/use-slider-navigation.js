import { useRef } from 'react'
import { useNavigate } from 'react-router'

export function useSliderNavigation() {
  const sliderRef = useRef(null)
  const navigate = useNavigate()

  function handleScrollRight() {
    sliderRef.current.scrollLeft += 300
  }

  function handleScrollLeft() {
    sliderRef.current.scrollLeft -= 300
  }

  function handleClickMovie(movieId) {
    navigate(`/browse/movie/${movieId}`)
  }

  function handleClickSerie(serieId) {
    navigate(`/browse/serie/${serieId}`)
  }

  return {
    sliderRef,
    handleScrollRight,
    handleScrollLeft,
    handleClickMovie,
    handleClickSerie,
  }
}