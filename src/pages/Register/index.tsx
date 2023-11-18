import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const btnNavigateLogin = () => {
    navigate("/login");
  };

  return (
    <form className="w-[40%] p-[30px] shadow-[0px_5px_5px_0px_rgb(230_220_220)] rounded-xl">
      <h1 className="text-center py-[10px] font-bold text-[1.2rem]">
        Register
      </h1>
      <div className="py-[10px]">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Nombre
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="nombre"
            required
          />
        </label>
      </div>

      <div className="py-[10px]">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Apellido
          <input
            type="text"
            id="apellido"
            name="apellido"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="apellido"
            required
          />
        </label>
      </div>

      <div className="py-[10px]">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Correo
          <input
            type="text"
            id="Correo"
            name="Correo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Correo"
            required
          />
        </label>
      </div>

      <div className="py-[10px]">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="password"
            required
          />
        </label>
      </div>

      <div className="py-[10px]">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="password"
            required
          />
        </label>
      </div>

      <div className="py-[20px]">
        <button
          type="button"
          className="w-full bg-primary rounded-lg block p-2.5 text-white hover:bg-primary/70"
        >
          Crear cuenta
        </button>
      </div>

      <div className="py-[20px]">
        <button onClick={btnNavigateLogin} type="button">
          Iniciar sesion
        </button>
      </div>
    </form>
  );
}

export default Register;
