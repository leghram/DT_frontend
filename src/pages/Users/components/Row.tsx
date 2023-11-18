import { useState, useEffect } from "react";
import { UserUI } from "../../../types/users";

import UserService from "../service";

interface IProps {
  userRow: UserUI;
  currentUserClicked: number;
  setCurrentUserClicked: (item: number) => void;
  refetch: any;
}

function Row({
  userRow,
  currentUserClicked,
  setCurrentUserClicked,
  refetch,
}: IProps) {
  const [clicked, setClicked] = useState(false);
  const [activeRow, setActiveRow] = useState(false);

  const { mutate: deleteUser, isLoading } = UserService.useDeleteUser();

  const handleClickBtn = () => {
    setClicked(!clicked);
    setCurrentUserClicked(userRow.id);
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
    console.log("asdf");
    deleteUser(currentUserClicked, {
      onSuccess: () => refetch(),
    });
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
                clicked && activeRow ? "z-50" : ""
              } `}
            >
              <button
                className="my-[5px] p-[4px] bg-blue-100 rounded-md"
                type="button"
              >
                Update
              </button>
              <button
                className="my-[3px] p-[4px] bg-red-100 rounded-md"
                type="button"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          )}
        </button>
      </td>
    </tr>
  );
}

export default Row;
