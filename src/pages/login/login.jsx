import { useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "../../hooks/use-auth"
import logoMovira from "../../assets/movira-logo.png"
import { ChevronLeft } from "lucide-react"

export function Login() {
  const [form, setForm] = useState({ username: '', password: '' })
  const { login, loading, error } = useAuth()
  const navigate = useNavigate()

  function handleUsernameChange(event) {
    setForm({ ...form, username: event.target.value })
  }

  function handlePasswordChange(event) {
    setForm({ ...form, password: event.target.value })
  }

  async function handleSubmit() {
    await login(form)
    navigate('/browse')
  }
  
  function handleHome(){
    navigate('/');
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw')"
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute top-0 left-0 right-0 px-6 py-4 flex items-center justify-center">
        <ChevronLeft
          onClick={handleHome}
          className="stroke-white cursor-pointer size-10 absolute left-6"
        />
        <img
          src={logoMovira}
          alt="Movira logo"
          className="w-24 md:w-32"
        />
      </div>


      <div className="relative z-10 bg-black/80 text-white px-8 py-10 rounded-md w-full max-w-sm md:max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Iniciar sesión
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Usuario"
            value={form.username}
            onChange={handleUsernameChange}
            className="bg-zinc-800 text-white px-4 py-3 rounded outline-none placeholder-zinc-400"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handlePasswordChange}
            className="bg-zinc-800 text-white px-4 py-3 rounded outline-none placeholder-zinc-400"
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? 'Cargando...' : 'Iniciar sesión'}
          </button>
        </div>

        <p className="text-gray-400 text-sm mt-6">
          ¿Nuevo en Movira?{' '}
          <span
            className="text-white cursor-pointer hover:underline"
          >
            Regístrate ahora
          </span>
        </p>
      </div>
    </div>
  )
}