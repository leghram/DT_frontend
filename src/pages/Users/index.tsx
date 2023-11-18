import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import HeaderRow from "./components/HeaderRow";
import UserService from "./service";
import Row from "./components/Row";
import { UserApi, UserUI } from "../../types/users";

function Users() {
  const {
    data: dataUsers,
    isLoading,
    isError,
    refetch,
  } = UserService.useGetUsers();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("id") == null ||
      localStorage.getItem("token") == null
    ) {
      navigate("/login");
    }
  }, []);

  const [currentUserClicked, setCurrentUserClicked] = useState(0);

  useEffect(() => {
    if (!isLoading && !isError) {
      const newData = dataUsers.map((elemen: UserApi) => {
        return {
          id: elemen.id,
          nombre: elemen.nombre,
          apellido: elemen.apellido,
          username: elemen.username,
          componente: "hola",
        };
      });
      const updatedData = newData.filter(
        (e: any) => e.id !== Number(localStorage.getItem("id")),
      );
      setData(updatedData);
    }
  }, [isLoading, isError, dataUsers]);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="w-full">
        <Header title="Users" />
      </div>
      <div className="grow">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-[60px]">
          <table className="w-full text-sm text-left rtl:text-right ">
            <thead className="text-xs text-gray-700 uppercase ">
              <HeaderRow />
            </thead>
            <tbody>
              {data.map((item: UserUI) => {
                return (
                  <Row
                    key={item.id}
                    userRow={item}
                    currentUserClicked={currentUserClicked}
                    setCurrentUserClicked={setCurrentUserClicked}
                    refetch={refetch}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
