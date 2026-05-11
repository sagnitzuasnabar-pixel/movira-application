import { useNavigate } from "react-router"
import logoMovira from "../../../assets/movira-logo.png"
export function Navbar() {
  
  const navigate = useNavigate();

  function handleLogin(){
    navigate('/login');
  }
  return (
    <nav className="flex items-center justify-between px-4 py-3 md:px-20 md:py-0 absolute top-0 left-0 right-0 z-10 m-0 ">
      <img src = {logoMovira} alt={logoMovira} className="w-24 md:w-32"/>
      <button
        onClick={handleLogin}
        className="bg-red-600 text-white text-sm md:text-sm px-3 py-1 md:px-4 md:py-2 rounded font-semibold hover:bg-red-700"
      >
        Iniciar sesión
      </button>
    </nav>
  )
}
