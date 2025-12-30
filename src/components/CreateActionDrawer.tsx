import { useState } from 'react'
import { FiX, FiUpload } from 'react-icons/fi'
import { useCreateAction } from '../hooks/useCreateAction'

interface CreateActionDrawerProps {
  open: boolean
  onClose: () => void
  onCreated?: () => void
}

export const CreateActionDrawer = ({
  open,
  onClose,
  onCreated,
}: CreateActionDrawerProps) => {
  const { submit, isLoading, error, clearError } = useCreateAction()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState('')
  const [status, setStatus] = useState(true)
  const [file, setFile] = useState<File | null>(null)

  if (!open) return null

  const canCreate =
    name.trim() !== '' &&
    description.trim() !== '' &&
    color.trim() !== '' &&
    file !== null

  const handleClose = () => {
    clearError()
    onClose()
  }

  const handleCreate = async () => {
    if (!file) return

    try {
      await submit({
        name,
        description,
        color,
        status: status ? 1 : 0,
        icon: file,
      })
      setName('')
      setDescription('')
      setColor('')
      setStatus(true)
      setFile(null)

      onCreated?.()
      onClose()
    } catch {
      console.log('error')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-black/40"
        onClick={handleClose}
      />
      <aside className="relative ml-auto h-full w-[440px] bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">
            Crear acción
          </h2>
          <button onClick={handleClose}>
            <FiX />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
          <div>
            <label className="text-sm font-medium">Nombre de la acción*</label>
            <input
              className="w-full border rounded px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Escribe el nombre de la buena acción'
            />
          </div>
          <div>
            <label className="text-sm font-medium">
              Descripción de la buena acción*
            </label>
            <textarea
              rows={4}
              className="w-full border rounded px-3 py-2 text-sm resize-none text-gray-900 placeholder:text-gray-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Agregar descripción'
            />
            <div className="text-xs text-right text-gray-400">
              {description.length}/200
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Logo*</label>
            <label
              htmlFor="icon-upload"
              className="flex justify-between items-center border rounded px-3 py-2 cursor-pointer"
            >
              <span className={file ? 'text-gray-700' : 'text-gray-400'}>
                {file ? file.name : 'Carga archivo'}
              </span>
              <FiUpload />
            </label>
            <input
              id="icon-upload"
              type="file"
              accept="image/png,image/jpeg"
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
          </div>
          <div>
            <label className="text-sm font-medium ">Color*</label>
            <input
              className="w-full border rounded px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400"
              placeholder="Registra color codigo HEX"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setStatus(!status)}
              className={`h-6 w-11 rounded-full ${
                status ? 'bg-teal-400' : 'bg-gray-300'
              }`}
            >
              <span
                className={`block h-5 w-5 bg-white rounded-full transition ${
                  status ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-sm">Activo</span>
          </div>
        </div>
        {error && (
          <p className="px-6 pb-2 text-sm text-red-600">
            {error}
          </p>
        )}
        <div className="border-t px-6 py-4 flex gap-4">
          <button
            onClick={handleClose}
            className="w-full border border-indigo-900 text-indigo-900 rounded py-2 text-sm"
          >
            Cancelar
          </button>

          <button
            disabled={!canCreate || isLoading}
            onClick={handleCreate}
            className={`w-full rounded py-2 text-sm text-white ${
              canCreate && !isLoading
                ? 'bg-indigo-600 hover:bg-indigo-700'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {isLoading ? 'Creando…' : 'Crear'}
          </button>
        </div>
      </aside>
    </div>
  )
}

