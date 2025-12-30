import { DashboardLayout } from "../components/DashboardLayout"

function Home() {
  return (
    <DashboardLayout>
      <div
        className="
          relative
          flex
          min-h-[calc(100vh-56px)]
          items-center
          justify-center
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: "url('/Background.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/80" />

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <img
            src="/Logo.png"
            alt="Be Kind Network"
            className="mb-6 w-40 md:w-52"
          />

          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            ¡Bienvenido a Be Kind Network!
          </h1>

          <p className="text-gray-600 max-w-md">
            Desde aquí podrás gestionar las acciones, visualizar el impacto
            social y administrar la comunidad.
          </p>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Home
