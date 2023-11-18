import { useState } from "react";

import UserService from "../service";

interface IProps {
  closeModal: (a: boolean) => void;
  refetch: any;
}

function FormCreate({ closeModal, refetch }: IProps) {
  const { mutate: createUser } = UserService.useCreateUser();
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateUserBtn = () => {
    createUser(
      {
        nombre: name,
        apellido: secondName,
        username: username,
        password: password,
      },
      {
        onSuccess: () => {
          closeModal(false);
          refetch();
        },
      },
    );
  };

  return (
    <form className="w-[40%] p-[30px] shadow-[0px_5px_5px_0px_rgb(230_220_220)] rounded-xl relative">
      <button
        type="button"
        className="text-center absolute text-[3rem] bottom-full left-full"
        onClick={() => closeModal(false)}
      >
        x
      </button>
      <div className="py-[20px]">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Nombre
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            id="nombre"
            name="nombre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="nombre"
            required
          />
        </label>
      </div>
      <div className="py-[20px]">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Apellido
          <input
            onChange={(event) => setSecondName(event.target.value)}
            type="text"
            id="apellido"
            name="apellido"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="apellido"
            required
          />
        </label>
      </div>
      <div className="py-[20px]">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email
          <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="email"
            required
          />
        </label>
      </div>
      <div className="py-[20px]">
        <label
          htmlFor="Password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            id="Password"
            name="Password"
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
          onClick={handleCreateUserBtn}
        >
          Crear Usuario
        </button>
      </div>
    </form>
  );
}

export default FormCreate;
