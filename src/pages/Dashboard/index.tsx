import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

import UserIcon from "../../assets/icons/users.svg";

import UserService from "../Users/service";

function Dashboard() {
  const navigate = useNavigate();
  const [isUserActive, setIsUserActive] = useState(false);
  const [data, setData] = useState([]);

  const {
    data: user,
    isLoading,
    isError,
  } = UserService.useGetUserById(Number(localStorage.getItem("id")));

  const {
    data: users,
    isLoading: loadUsers,
    isError: errorUsers,
  } = UserService.useGetUsers();

  useEffect(() => {
    if (!loadUsers && !errorUsers) {
      setData(users);
    }
  }, [users, loadUsers, errorUsers]);

  useEffect(() => {
    if (
      localStorage.getItem("id") == null ||
      localStorage.getItem("token") == null
    ) {
      navigate("/login");
    } else {
      setIsUserActive(true);
    }
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="w-full">
        <Header title="Dashboard" />
      </div>
      <div className="grow flex items-center justify-around flex-col md:flex-row">
        <div className="h-[50%] bg-white w-[80%] md:w-[40%] rounded-xl flex flex-col justify-around">
          <h1 className="text-center text-[2rem] md:text-[2.4rem] lg:text-[3rem] text-black/60 font-bold">
            Bienvenido
          </h1>
          {isUserActive && !isLoading && !isError && (
            <p className="text-[1.4rem] md:text-[2rem] text-center">{`${user.nombre} ${user.apellido}`}</p>
          )}
        </div>
        <div className="my-[2rem] md:my-0 h-[50%] bg-white w-[80%] md:w-[40%] rounded-xl flex flex-col items-center justify-around">
          <div className="h-[30%] w-full flex bg-primary/95 items-center px-[1rem] rounded-t-xl justify-center">
            <img className="h-[60%] text-white" src={UserIcon} alt="" />
            <p className=" text-[1rem] md:text-[1.4rem] pl-6 text-white font-bold ">
              Usuarios activos
            </p>
          </div>
          <p className="w-full text-center text-[8rem] grow flex items-center justify-center">
            {data.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
