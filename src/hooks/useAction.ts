import { useEffect, useState } from "react"
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

  useEffect(() => {
    if (!token) return
    const loadActions = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await fetchAction(token, pageNumber, pageSize)
        console.log(data, "este es la data de las acciones")
        setActions(data.data)
        setTotalPages(data.totalPages)
      } catch (error) {
        setError("No se pudieron cargar las acciones")
        console.log(error, "error de las acciones")
      } finally {
        setIsLoading(false)
      }
    }
    loadActions()

  }, [pageNumber, token])

  const nextPage = () => {
    setPageNumber((current) => Math.min(current + 1, totalPages))
  }

  const prevPage = () => {
    setPageNumber((current) => Math.max(current - 1))
  }
  return {
    actions,
    pageNumber,
    totalPages,
    isLoading,
    nextPage,
    prevPage,
    error
  }
}