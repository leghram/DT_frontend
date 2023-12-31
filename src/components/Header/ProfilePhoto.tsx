import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import UpIcon from "../../assets/icons/up.svg";
import DownIcon from "../../assets/icons/down.svg";

import UserService from "../../pages/Users/service";

import { useDataContextProvider } from "../../context/AuthContext";

function ProfilePhoto() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const { setData: setLogged } = useDataContextProvider();

  const { data, isLoading, isError } = UserService.useGetUserById(
    Number(localStorage.getItem("id")),
  );

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (!isLoading && !isError) {
      setUsername(data.username);
      setName(`${data.nombre} ${data.apellido}`);
    }
  }, [isLoading, isError]);

  const btnOnClick = () => {
    setClicked(!clicked);
  };

  const btnLogOut = () => {
    setLogged(false);
    navigate("/login");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
  };

  return (
    <div className="relative">
      <div className="bg-white py-[4px] px-[12px] rounded-xl">
        <div className="w-full flex items-center">
          <img
            className="w-[2.5rem] h-[2.5rem] rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/1698/1698535.png"
            alt=""
          />
          <p className="mx-[20px]">{name}</p>
          <button
            type="button"
            className="h-[25px] w-[25px] flex items-center justify-center"
            onClick={btnOnClick}
          >
            <img
              className="w-full h-full rounded-md bg-clear p-[2px]"
              src={clicked ? UpIcon : DownIcon}
              alt="get out"
            />
          </button>
        </div>
      </div>
      {clicked && (
        <div className="absolute top-full bg-white px-[5px] w-full my-[12px] rounded-xl py-[5px] z-50 shadow-md">
          <p className="py-[4px] text-center">{username}</p>
          <button
            type="button"
            className="w-full text-[1.1rem] bg-red-300 rounded-md my-[4px] py-[3px] text-white font-bold"
            onClick={btnLogOut}
          >
            Salir
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfilePhoto;
