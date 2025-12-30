import { useState } from "react";
import { FiX, FiUpload } from "react-icons/fi";

interface CreateActionDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const CreateActionDrawer = ({
  open,
  onClose,
}: CreateActionDrawerProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [status, setStatus] = useState(true);

  if (!open) return null;

  const canCreate =
    name.trim() !== "" &&
    description.trim() !== "" &&
    color.trim() !== "" &&
    file !== null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />

      <aside className="relative ml-auto h-full w-[440px] bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-slate-900">
            Crear categoria
          </h2>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700"
          >
            <FiX size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              Nombre de la categoria*
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Escribe el nombre de la buena acción"
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Descripción de la buena acción*
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Agregar descripción"
              rows={4}
              className="w-full rounded-md border px-3 py-2 text-sm resize-none"
            />
            <div className="text-right text-xs text-slate-400 mt-1">
              {description.length}/200
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Logo*</label>

            <label
              htmlFor="icon-upload"
              className="
                flex items-center justify-between
                rounded-md border
                px-3 py-2
                text-sm
                cursor-pointer
                hover:bg-slate-50
              "
            >
              <span className={file ? "text-slate-700" : "text-slate-400"}>
                {file ? file.name : "Carga archivo"}
              </span>
              <FiUpload />
            </label>

            <input
              id="icon-upload"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              className="hidden"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                  setFile(selectedFile);
                }
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Color*</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Registra color codigo HEX"
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setStatus(!status)}
              className={`
                relative inline-flex h-6 w-11 items-center rounded-full
                ${status ? "bg-teal-400" : "bg-gray-300"}
              `}
            >
              <span
                className={`
                  inline-block h-5 w-5 rounded-full bg-white transition
                  ${status ? "translate-x-5" : "translate-x-1"}
                `}
              />
            </button>
            <span className="text-sm">Activo</span>
          </div>
        </div>

        <div className="border-t px-6 py-4 flex gap-4">
          <button
            onClick={onClose}
            className="
              w-full
              rounded-md
              border
              border-indigo-900
              px-4 py-2
              text-sm
              text-indigo-900
            "
          >
            Cancelar
          </button>

          <button
            type="button"
            disabled={!canCreate}
            className={`
              w-full
              rounded-md
              px-4 py-2
              text-sm
              text-white
              ${
                canCreate
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-300 cursor-not-allowed"
              }
            `}
          >
            Crear
          </button>
        </div>
      </aside>
    </div>
  );
};
