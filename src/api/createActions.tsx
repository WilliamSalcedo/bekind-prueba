export interface CreateActionPayload {
  name: string
  description: string
  color: string
  status: 0 | 1
  icon: File
}

export const createAction = async (
  token: string,
  payload: CreateActionPayload
) => {
  const formData = new FormData()

  formData.append('name', payload.name)
  formData.append('description', payload.description)
  formData.append('color', payload.color)
  formData.append('status', String(payload.status))
  formData.append('icon', payload.icon)

  const response = await fetch(
    'https://dev.api.bekindnetwork.com/api/v1/actions/admin-add',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  )

  const data = await response.json()
  console.log(data,"data de crear accion")

  if (!response.ok) {
    throw new Error(data?.message || 'Error al crear acción')
  }

  return data
}
