import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import HeaderRow from "./components/HeaderRow";
import UserService from "./service";
import Row from "./components/Row";
import { UserApi, UserUI } from "../../types/users";
import FormCreate from "./components/FormCreate";
import FormUpdate from "./components/FormUpdate";

function Users() {
  const {
    data: dataUsers,
    isLoading,
    isError,
    refetch,
  } = UserService.useGetUsers();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateUserModal, setUpdateUserModal] = useState(false);
  const [isReadyToUpdate, setIsReadyToUpdate] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("id") == null ||
      localStorage.getItem("token") == null
    ) {
      navigate("/login");
    }
  }, []);

  const [currentUserClicked, setCurrentUserClicked] = useState({});

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
      {updateUserModal && (
        <div className="bg-clear/95 absolute w-screen h-screen top-0 left-0 z-50 flex items-center justify-center">
          <FormUpdate
            closeModal={setUpdateUserModal}
            refetch={refetch}
            currentUserClicked={currentUserClicked}
          />
        </div>
      )}
      <div className="w-full">
        <Header title="Users" />
      </div>
      <div className="flex flex-row-reverse w-full">
        <button
          type="button"
          className="bg-primary text-white rounded-md p-[10px] my-[20px]"
          onClick={() => setIsModalOpen(true)}
        >
          Agregar Usuario
        </button>
        {isModalOpen && (
          <div className="bg-clear/95 absolute w-screen h-screen top-0 left-0 z-50 flex items-center justify-center">
            <FormCreate closeModal={setIsModalOpen} refetch={refetch} />
          </div>
        )}
      </div>
      <div className="grow">
        <div className="overflow-x-auto shadow-md sm:rounded-lg pb-[60px]">
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
                    updateUserModal={updateUserModal}
                    setUpdateUserModal={setUpdateUserModal}
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
