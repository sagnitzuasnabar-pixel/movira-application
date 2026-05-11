import { ChevronRight } from "lucide-react"

export function Hero() {

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-no-repeat 
    bg-[url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw)]
    "
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Contenido del centro */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-5">
          Películas y series ilimitadas y mucho más
        </h1>
        <p className="text-base md:text-2xl font-semibold mb-9">
          A partir de S/ 28.90. Cancela cuando quieras.
        </p>
        <p className="text-sm md:text-xl mb-6">
          ¿Quieres ver Movira ya? Ingresa tu email para crear una cuenta.
        </p>

        {/* Input + Botón */}
        <div className="flex flex-col md:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 text-white text-sm md:text-base rounded w-full md:w-96 outline-none border border-gray-300 placeholder-gray-300 bg-black/40"
          />
          <button
            className="bg-red-600 text-white px-6 py-3 text-sm md:text-base font-semibold rounded hover:bg-red-700 flex gap-2 justify-center items-center"
          >
            Comenzar <ChevronRight className='size-6 '/>
          </button>
        </div>
      </div>
    </div>
  )
}
