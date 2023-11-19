import { useState, useEffect } from "react";
import { UserUI } from "../../../types/users";

import UserService from "../service";

interface IProps {
  userRow: UserUI;
  currentUserClicked: any;
  setCurrentUserClicked: (item: any) => void;
  refetch: any;
  setUpdateUserModal: (value: boolean) => void;
}

function Row({
  userRow,
  currentUserClicked,
  setCurrentUserClicked,
  refetch,
  setUpdateUserModal,
}: IProps) {
  const [clicked, setClicked] = useState(false);
  const [activeRow, setActiveRow] = useState(false);

  const { mutate: deleteUser } = UserService.useDeleteUser();

  const handleClickBtn = () => {
    setClicked(!clicked);
    setCurrentUserClicked({ ...userRow });
  };

  useEffect(() => {
    if (clicked) {
      setCurrentUserClicked(userRow.id);
    }
  }, [clicked]);

  useEffect(() => {
    if (currentUserClicked === userRow.id) {
      setActiveRow(true);
    } else {
      setActiveRow(false);
    }
  }, [currentUserClicked]);

  const handleDelete = () => {
    deleteUser(currentUserClicked, {
      onSuccess: () => refetch(),
    });
  };

  const handleUpdate = () => {
    setUpdateUserModal(true);
  };

  return (
    <tr className="odd:bg-clear even:bg-white hover:bg-primary/90 hover:text-white ">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {userRow.id}
      </th>
      <td className="px-6 py-4">{userRow.nombre}</td>
      <td className="px-6 py-4">{userRow.username}</td>
      <td className="px-6 py-4">
        <button
          type="button"
          className="flex items-center justify-center relative"
          onClick={() => handleClickBtn()}
        >
          <p className="w-[20px] h-[20px] bg-white rounded-md text-black">
            ver
          </p>
          {clicked && activeRow && (
            <div
              className={`rounded-md absolute top-full flex flex-col bg-white text-black text-[1rem] px-[10px] ${
                clicked && activeRow ? "z-40" : ""
              } `}
            >
              <input
                className="my-[5px] p-[4px] bg-blue-100 rounded-md"
                type="button"
                value="Update"
                onClick={handleUpdate}
              />
              <input
                className="my-[3px] p-[4px] bg-red-100 rounded-md"
                type="button"
                onClick={handleDelete}
                value="Delete"
              />
            </div>
          )}
        </button>
      </td>
    </tr>
  );
}

export default Row;
