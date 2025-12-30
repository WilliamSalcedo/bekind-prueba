import { useLogin } from "../hooks/useLogin";
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'

const Login = () => {

const {
    register,
    handleSubmit,
    errors,
    isValid,
    isLoading,
    errorMessage,
    togglePassword,
    showPassword,
    onSubmit
  } = useLogin()

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Background.png')" }}
    >
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative z-10 w-full max-w-[90%] sm:max-w-[480px] md:max-w-[581px] bg-white shadow-xl rounded-xl md:rounded-[20px] px-6 py-8 md:px-[32px] md:py-[48px]">
        <div className="flex justify-center mb-6">
          <img
            src="/Logo.png"
            alt="Be Kind Network"
            className="h-10 sm:h-12 md:h-[71px] w-auto"
          />
        </div>

        <h1 className="text-center text-base font-semibold text-black mb-8 leading-6 sm:text-lg sm:leading-7 md:text-[28px] md:leading-[36px]">
          ¡Empieza a conectar tu comunidad ante buenas acciones!
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            
            Correo Electrónico*
          </label>
          <div className="relative">
            <FiMail className="absolute top-3 left-3  text-gray-400"/>
            <input
            type="email"
            {...register("email",{required:true})}
            placeholder="Ingresar correo"
            className="w-full h-10  rounded-md border border-gray-300 pl-10 pr-3 text-sm bg-gray-50"
          />
          </div>
          {errors.email&&<p className="text-red-500 text-xs">Correo requerido</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña*
          </label>
          <div className="relative">
            <FiLock className="absolute top-3 left-3  text-gray-400"/>
            <input
            type={showPassword?"text":"password"}
            {...register("password",{required:true})}
            placeholder="Ingresa tu contraseña"
            className="w-full h-10  rounded-md border border-gray-300 pl-10 pr-3 text-sm bg-gray-50"
          />
          <button type="button" onClick={togglePassword} className="absolute right-3 top-3 text-gray-400">
            {showPassword? <FiEyeOff />: <FiEye />}
          </button>
          </div>
          {errors.password&&<p className="text-red-500 text-xs">Contraseña requerida</p>}
        </div>


        {errorMessage && (<p className="text-red-500 text-center mb-4 text-xs">{errorMessage}</p>)}

        <div className="text-center mb-6">
          <button
            type="button"
            className="text-sm text-[#1E1B4D] underline underline-offset-4 font-semibold sm:text-sm md:text-base"
          >
            Recuperar contraseña
          </button>
        </div>
        <div className="flex justify-center mt-8 md:mt-12">
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            disabled = {!isValid || isLoading}
            className="w-[200px] sm:w-[220px] md:w-[260px] h-10 rounded-md bg-gray-300 text-sm font-medium text-gray-600 cursor-not-allowed"
          >
            {isLoading?"Ingresando..." : "Ingresar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
