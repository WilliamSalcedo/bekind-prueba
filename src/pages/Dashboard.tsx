import { useActions } from "../hooks/useAction"


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

  if (isLoading) {
    return <p>Cargando acciones...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  if (actions.length === 0) {
    return <p>No hay acciones registradas</p>
  }

  return (
    <div>
      <h1>Acciones</h1>

      <ul>
        {actions.map((action) => (
          <li key={action.id}>
            <strong>{action.name}</strong> – {action.description}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 16 }}>
        <button onClick={prevPage} disabled={pageNumber === 1}>
          Anterior
        </button>

        <span style={{ margin: '0 8px' }}>
          Página {pageNumber} de {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={pageNumber === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default Dashboard
