import { useState } from "react"
import faqs  from "../../../data/faqs.json"

export function FAQ() {
  const [abierto, setAbierto] = useState(null)

  function handleToggle(id) {
    if (abierto === id) {
      setAbierto(null)
    } else {
      setAbierto(id)
    }
  }

  return (
    <section className="bg-black px-4 py-12 md:px-30">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-6">
        Preguntas frecuentes
      </h2>
      <div className="flex flex-col gap-2">
        {faqs.map(function(item) {
          return (
            <div key={item.id}>
              <button
                onClick={() => handleToggle(item.id)}
                className="w-full flex items-center justify-between bg-zinc-800 text-white text-left px-6 py-5 text-base md:text-lg hover:bg-zinc-700"
              >
                {item.pregunta}
                <span className="text-2xl ml-4">
                  {abierto === item.id ? '×' : '+'}
                </span>
              </button>
              {abierto === item.id && (
                <div className="bg-zinc-800 text-white px-6 py-5 text-sm md:text-base border-t border-zinc-600">
                  {item.respuesta}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}