import { useEffect, useState, useCallback } from "react"
import { useAuthStore } from "../context/authStore"
import type { Action } from "../types/action"
import { fetchAction } from "../api/action"

export const useActions = () => {
  const token = useAuthStore((state) => state.accesToken) 

  const [actions, setActions] = useState<Action[]>([])
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const pageSize = 10

  const loadActions = useCallback(async () => {
    if (!token) return

    setIsLoading(true)
    setError(null)

    try {
      const data = await fetchAction(token, pageNumber, pageSize)
      setActions(data.data)
      setTotalPages(data.totalPages)
    } catch (err) {
      setError("No se pudieron cargar las acciones")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }, [token, pageNumber])

  useEffect(() => {
    loadActions()
  }, [loadActions])

  const nextPage = () => {
    setPageNumber((current) => Math.min(current + 1, totalPages))
  }

  const prevPage = () => {
    setPageNumber((current) => Math.max(current - 1, 1))
  }

  return {
    actions,
    pageNumber,
    totalPages,
    isLoading,
    error,
    nextPage,
    prevPage,
    reload: loadActions, 
  }
}
