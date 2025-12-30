import { useState } from "react";
import { ActionsTable } from "../components/ActionTable"
import { DashboardLayout } from "../components/DashboardLayout"
import { useActions } from "../hooks/useAction"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { CreateActionDrawer } from "../components/CreateActionDrawer";


const Dashboard = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const {
    actions,
    pageNumber,
    totalPages,
    isLoading,
    error,
    nextPage,
    prevPage,
    reload
  } = useActions()

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Acciones</h1>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm" onClick={()=>setOpenDrawer(true)}>
          Crear acción
        </button>
        <CreateActionDrawer open={openDrawer} onClose={()=>setOpenDrawer(false)} onCreated={reload}/>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="flex items-center gap-3">
            <span
              className="
                inline-block
                h-6 w-6
                animate-spin
                rounded-full
                border-3
                border-indigo-600
                border-t-transparent
              "
            />
            <p className="text-indigo-600 font-medium">Cargando acciones…</p>
          </div>
        </div>
      )}

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
