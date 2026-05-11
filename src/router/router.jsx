import { createBrowserRouter } from "react-router"
import { Home } from "../pages/home/home"
import { Login } from "../pages/login/login"
import { BrowseLayout } from "../pages/browse/browseLayout"
import { BrowseHome } from "../pages/browse/pages/browseHome/browseHome"
import { Series } from "../pages/browse/pages/series/series"
import { Peliculas } from "../pages/browse/pages/peliculas/peliculas"
import { Novedades } from "../pages/browse/pages/novedades/novedades"
import { MiLista } from "../pages/browse/pages/miLista/miLista"
import { MovieDetail } from "../pages/browse/pages/detail/movie-detail"
import { SerieDetail } from "../pages/browse/pages/detail/serie-detail"

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/browse',
    Component: BrowseLayout,
    children: [
      {
        index:true,
        Component: BrowseHome,
      },
      {
        path: 'series',
        Component: Series,
      },
      {
        path: 'peliculas',
        Component: Peliculas,
      },
      {
        path: 'novedades',
        Component: Novedades,
      },
      {
        path: 'mi-lista',
        Component: MiLista,
      },
      {
        path: 'movie/:id',
        Component: MovieDetail,
      },
      {
        path: 'serie/:id',
        Component: SerieDetail ,
      },
    ],
  },
])
