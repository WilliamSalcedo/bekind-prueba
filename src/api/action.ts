import type { ActionApiResponse } from "../types/action"

export const fetchAction = async (token: string, pageNumber: number, pageSize: number) => {
  console.log(token, 'token')
  const response = await fetch(
    `https://dev.api.bekindnetwork.com/api/v1/actions/admin-list?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  if (!response.ok) {
    throw new Error("Error al cargar acciones")
  }
  const json: ActionApiResponse = await response.json()

  console.log(json, 'eres la respuesta', token)
  return json.data
}
