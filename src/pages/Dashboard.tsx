import { ActionsTable } from "../components/ActionTable"
import { DashboardLayout } from "../components/DashboardLayout"
import { useActions } from "../hooks/useAction"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";


const Dashboard = () => {
  const {
    actions,
    pageNumber,
    totalPages,
    isLoading,
    error,
    nextPage,
    prevPage,
  } = useActions()

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Acciones</h1>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">
          Crear acción
        </button>
      </div>

      {isLoading && <p>Cargando acciones…</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!isLoading && !error && (
        <>
          <ActionsTable actions={actions} />

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevPage}
              disabled={pageNumber === 1}
            >
              <FaArrowAltCircleLeft />
            </button>

            <span>
              Página {pageNumber} de {totalPages}
            </span>

            <button
              onClick={nextPage}
              disabled={pageNumber === totalPages}
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </>
      )}
    </DashboardLayout>
  )
}

export default Dashboard
