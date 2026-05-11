import { useNavigate } from 'react-router'
import { useMiLista } from './hooks/use-mi-lista'

const IMAGE_BASE_URL_SMALL = 'https://image.tmdb.org/t/p/w500'

export function MiLista() {
  const { lista } = useMiLista()
  const navigate = useNavigate()

  function handleClickItem(item) {
    if (item.tipo === 'movie') {
      navigate(`/browse/movie/${item.id}`)
    } else {
      navigate(`/browse/serie/${item.id}`)
    }
  }

  return (
    <div className="bg-black min-h-screen pt-28 px-4 md:px-8">

      <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">Mi Lista</h1>

      {lista.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-400 text-lg">
            Aún no has reproducido nada. Dale click a Reproducir en cualquier película o serie.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Continuar viendo</h2>
          <div className="flex flex-wrap gap-3">
            {lista.map(function(item) {
              return (
                <div
                  key={item.id}
                  onClick={function() { handleClickItem(item) }}
                  className="cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                >
                  <img
                    src={`${IMAGE_BASE_URL_SMALL}${item.poster_path}`}
                    alt={item.title}
                    className="w-28 md:w-36 h-40 md:h-52 object-cover rounded-md"
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}

    </div>
  )
}