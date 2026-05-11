import { motivos } from "../../../data/feautures-data"

export function Features() {
  return (
    <section className="bg-black px-4 py-12 md:px-30">
      <h2 className="text-white text-xl md:text-2xl font-medium mb-6">
        Más motivos para unirte
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {motivos.map(function(motivo) {
          return (
            <div
              key={motivo.id}
              className="bg-indigo-950 rounded-lg p-6 flex flex-col justify-between min-h-48"
            >
              <div>
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {motivo.titulo}
                </h3>
                <p className="text-gray-500 text-base font-semibold">
                  {motivo.descripcion}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <img
                  src = {motivo.imagen}
                  alt = {motivo.titulo}
                  className="w-12 h-12 object-contain"
                />
                
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
