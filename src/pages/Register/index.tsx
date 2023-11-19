import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import UserService from "../Users/service";

function Register() {
  const navigate = useNavigate();

  const name = useRef<any>(null);
  const secondName = useRef<any>(null);
  const username = useRef<any>(null);
  const password = useRef<any>(null);

  const { mutate: registerUser } = UserService.useCreateUser();

  const btnNavigateLogin = () => {
    navigate("/login");
  };

  const btnOnRegister = () => {
    if (
      name.current.value.length > 0 &&
      secondName.current.value.length > 0 &&
      username.current.value.length > 0 &&
      password.current.value.length > 0
    ) {
      registerUser(
        {
          nombre: name.current.value,
          apellido: secondName.current.value,
          username: username.current.value,
          password: password.current.value,
        },
        {
          onSuccess: () => {
            name.current.value = "";
            secondName.current.value = "";
            username.current.value = "";
            password.current.value = "";
          },
        },
      );
    }
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
            ref={name}
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
            ref={secondName}
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
            ref={username}
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
            ref={password}
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
          onClick={btnOnRegister}
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
