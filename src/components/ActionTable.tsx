import type { Action } from "../types/action";

interface Props {
  actions: Action[];
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export const ActionsTable = ({ actions }: Props) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50 text-left text-sm text-gray-600">
            <th className="px-6 py-4">Nombre</th>
            <th className="px-6 py-4">Estado</th>
            <th className="px-6 py-4">Descripción</th>
            <th className="px-6 py-4">Fecha creación</th>
          </tr>
        </thead>

        <tbody>
          {actions.map((action) => (
            <tr
              key={action.id}
              className="border-t text-sm text-gray-700 hover:bg-gray-50"
            >
              <td className="px-6 py-4 font-medium text-gray-900">
                {action.name}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                  ${
                    action.status === 1
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {action.status === 1 ? "Activo" : "Inactivo"}
                </span>
              </td>

              <td className="px-6 py-4 max-w-sm truncate">
                {action.description}
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                {formatDate(action.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
