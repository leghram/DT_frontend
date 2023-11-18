import { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeaderRow from "./components/HeaderRow";
import UserService from "./service";
import Row from "./components/Row";
import { UserApi, UserUI } from "../../types/users";

function Users() {
  const { data: dataUsers, isLoading, isError } = UserService.useGetUsers();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!isLoading && !isError) {
      const newData = dataUsers.map((elemen: UserApi) => {
        return {
          id: elemen.id,
          nombres: `${elemen.nombre} ${elemen.apellido}`,
          username: elemen.username,
          componente: "hola",
        };
      });
      setData(newData);
    }
  }, [isLoading, isError]);

  return (
    <div className="">
      <Header title="Users" />
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right ">
            <thead className="text-xs text-gray-700 uppercase ">
              <HeaderRow />
            </thead>
            <tbody>
              {data.map((item: UserUI) => {
                return <Row key={item.id} objecto={item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
