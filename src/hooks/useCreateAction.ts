import { useState } from 'react'
import { useAuthStore } from '../context/authStore'
import { createAction, type CreateActionPayload } from '../api/createActions'

export const useCreateAction = () => {
  const token = useAuthStore((state) => state.accesToken) 

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (payload: CreateActionPayload) => {
    if (!token) {
      throw new Error('No hay sesión activa')
    }

    setIsLoading(true)
    setError(null)

    try {
      await createAction(token, payload)
    } catch (err: any) {
      setError(err.message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return {
    submit,
    isLoading,
    error,
    clearError: () => setError(null),
  }
}

