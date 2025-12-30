import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../context/authStore"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { loginRequest } from "../api/auth"

interface LoginFormValues {
  email: string
  password: string
}

interface LoginError {
  message: string

}

export const useLogin = () => {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    mode: "onChange",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true)
    setErrorMessage(null)
    try {
      const response = await loginRequest({ username: data.email, password: data.password })
      console.log(response,"response Login")
      login(response)
      navigate("/dashboard")
    } catch (error) {
      const apiError = error as LoginError
      setErrorMessage(apiError.message)

    } finally {
      setIsLoading(false)
    }

  }

  const togglePassword = () => { setShowPassword((prev) => !prev) }

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    isLoading,
    errorMessage,
    togglePassword,
    showPassword,
    onSubmit
  }
}