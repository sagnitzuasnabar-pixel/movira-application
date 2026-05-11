export function Footer() {
  const linkClasses = "underline cursor-pointer"

  return (
    <footer className="bg-black text-gray-300 px-4 py-12 md:px-30">
      <p className="mb-6 text-sm md:text-base">
        ¿Preguntas? Llama al{' '}
        <span className="underline cursor-pointer">0 800 55821</span>
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-xs md:text-sm">
        <ul className="flex flex-col gap-3">
          <li className={linkClasses}>Preguntas frecuentes</li>
          <li className={linkClasses}>Relaciones con inversionistas</li>
          <li className={linkClasses}>Formas de ver</li>
          <li className={linkClasses}>Información corporativa</li>
          <li className={linkClasses}>Solo en Movira</li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className={linkClasses}>Centro de ayuda</li>
          <li className={linkClasses}>Empleo</li>
          <li className={linkClasses}>Términos de uso</li>
          <li className={linkClasses}>Contáctanos</li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className={linkClasses}>Cuenta</li>
          <li className={linkClasses}>Canjear tarjetas de regalo</li>
          <li className={linkClasses}>Privacidad</li>
          <li className={linkClasses}>Prueba de velocidad</li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className={linkClasses}>Prensa</li>
          <li className={linkClasses}>Comprar tarjetas de regalo</li>
          <li className={linkClasses}>Preferencias de cookies</li>
          <li className={linkClasses}>Avisos legales</li>
        </ul>
      </div>

      <p className="text-xs md:text-sm mb-2">Movira Perú</p>
      <p className="text-xs text-gray-500">
        Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.
      </p>
    </footer>
  )
}
