import { useState } from 'react'

export function useMiLista() {
  const [lista, setLista] = useState(function() {
    const guardado = localStorage.getItem('miLista')
    if (guardado) {
      return JSON.parse(guardado)
    }
    return []
  })

  function agregarALista(item) {
    const yaExiste = lista.find(function(elemento) {
      return elemento.id === item.id
    })
    if (yaExiste) return

    const nuevaLista = [...lista, item]
    setLista(nuevaLista)
    localStorage.setItem('miLista', JSON.stringify(nuevaLista))
  }

  function estaEnLista(id) {
    return lista.some(function(elemento) {
      return elemento.id === id
    })
  }

  return { lista, agregarALista, estaEnLista }
}