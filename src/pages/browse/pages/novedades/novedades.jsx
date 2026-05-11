import { NovedadesPeliculasRow } from './components/novedades-peliculas-row'
import { NovedadesSeriesRow } from './components/novedades-series-row'
import { TopTenSeriesPeru } from './components/top-ten-series-peru'
import { TopTenPeru } from '../browseHome/components/top-ten-peru'

export function Novedades() {
  return (
    <div className="bg-black min-h-screen pt-28">

      <div className="px-4 md:px-8 mb-6">
        <h1 className="text-white text-4xl md:text-5xl font-bold">Novedades</h1>
      </div>

      <NovedadesPeliculasRow />
      <NovedadesSeriesRow />
      <TopTenPeru />
      <TopTenSeriesPeru />

    </div>
  )
}