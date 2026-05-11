import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Search, Bell, ChevronDown, X,Menu } from 'lucide-react';
import logoMovira from "../../../../../assets/movira-logo.png";
import { useAuth } from '../../../../../hooks/use-auth';
import { navLinks } from '../../../data/navLinks-data';

const TOKEN = import.meta.env.VITE_TMDB_TOKEN
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL_SMALL = 'https://image.tmdb.org/t/p/w500'

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { logout } = useAuth()
  const [showMenu, setShowMenu] = useState(false)
   const [showMobileMenu, setShowMobileMenu] = useState(false) 
  const [showSearch, setShowSearch] = useState(false)
  const [query, setQuery] = useState('')
  const [resultados, setResultados] = useState([])
  const [buscando, setBuscando] = useState(false)

  function handleLogout() {
    logout()
    navigate('/')
  }

  function handleToggleMenu() {
    setShowMenu(!showMenu)
  }

  function handleToggleMobileMenu() {
    setShowMobileMenu(!showMobileMenu)
  }

  function handleOpenSearch() {
    setShowSearch(true)
  }

  function handleCloseSearch() {
    setShowSearch(false)
    setQuery('')
    setResultados([])
  }

  function handleSearch(event) {
    const valor = event.target.value
    setQuery(valor)

    if (valor.trim() === '') {
      setResultados([])
      return
    }

    setBuscando(true)

    fetch(`${BASE_URL}/search/multi?query=${valor}&language=es-ES&page=1`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        const filtrados = data.results.filter(function(item) {
          return item.media_type === 'movie' || item.media_type === 'tv'
        })
        setResultados(filtrados.slice(0, 8))
      })
      .finally(function() {
        setBuscando(false)
      })
  }

  function handleClickResultado(item) {
    if (item.media_type === 'movie') {
      navigate(`/browse/movie/${item.id}`)
    } else {
      navigate(`/browse/serie/${item.id}`)
    }
    handleCloseSearch()
  }

  return (
    <div>

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-3 fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-sm">

        {/* IZQUIERDA */}
        <div className="flex items-center gap-4">
          <img
            src={logoMovira}
            alt="Movira logo"
            className="w-20 md:w-24 cursor-pointer"
            onClick={() => navigate('/browse')}
          />

          <Menu
            className="block md:hidden text-white size-6 cursor-pointer"
            onClick={handleToggleMobileMenu}
          />

          <ul className="hidden md:flex gap-2 text-white text-sm shrink-0">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path
              return (
                <li
                  key={link.id}
                  onClick={() => navigate(link.path)}
                  className={`cursor-pointer px-3 py-1 rounded ${
                    isActive ? 'bg-white/20' : 'hover:text-gray-300'
                  }`}
                >
                  {link.label}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex items-center gap-4">

          {showSearch ? (
            <div className="relative flex items-center w-full md:w-auto">
              <div className="flex items-center bg-black/80 border border-white/50 rounded px-3 py-1 gap-2 w-full md:w-auto">
                <Search className="text-white size-4" />
                <input
                  type="text"
                  value={query}
                  onChange={handleSearch}
                  placeholder="Buscar..."
                  className="bg-transparent text-white text-sm outline-none w-24 md:w-32 lg:w-64"
                  autoFocus
                />
                <button onClick={handleCloseSearch}>
                  <X className="text-white size-4" />
                </button>
              </div>

              {resultados.length > 0 && (
                <div 
                  className="absolute top-10 left-0 right-0 md:left-auto md:right-0 md:w-80 bg-zinc-900 border border-gray-700 rounded-lg max-h-96 overflow-y-scroll z-50"
                  style={{ scrollbarWidth: 'none' }}  
                >
                  {resultados.map(item => {
                    const titulo = item.title ?? item.name
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleClickResultado(item)}
                        className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer"
                      >
                        {titulo}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          ) : (
            <Search
              onClick={handleOpenSearch}
              className="text-white cursor-pointer size-5"
            />
          )}

          <Bell className="text-white size-5" />

          <div onClick={handleToggleMenu} className="relative cursor-pointer">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
              M
            </div>

            {showMenu && (
              <div className="absolute right-0 top-10 bg-black border rounded w-36">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>

        </div>
      </nav>

      {/* MENÚ MOBILE */}
      {showMobileMenu && (
        <div className="fixed top-16 left-0 w-full bg-black z-80 flex flex-col p-4 gap-4 md:hidden">
          {navLinks.map(link => (
            <div
              key={link.id}
              onClick={() => {
                navigate(link.path)
                setShowMobileMenu(false)
              }}
              className="text-white text-lg cursor-pointer hover:text-gray-300"
            >
              {link.label}
            </div>
          ))}
        </div>
      )}

    </div>
  )
}