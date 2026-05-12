import { useAuthContext } from "../context/authContext";
import { loginService } from "../services/auth-service";
import { useState } from "react";

export const useAuth = () => {
  const { token, saveToken, removeToken, isAuthenticated } = useAuthContext()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = ({ username, password }) => {
    setLoading(true)
    setError(null)

    return loginService({ username, password })
      .then((token) => {
        saveToken(token)
      })
      .catch((error) => {
        setError(error.message)
        throw error
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const logout = () => {
    removeToken()
  }

  return { token, login, logout, loading, error, isAuthenticated }
}