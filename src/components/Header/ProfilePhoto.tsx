import { useState } from "react";

import UpIcon from "../../assets/icons/up.svg";
import DownIcon from "../../assets/icons/down.svg";

function ProfilePhoto() {
  const [clicked, setClicked] = useState(false);

  const btnOnClick = () => {
    setClicked(!clicked);
  };

  const btnLogOut = () => {
    const total = 23;
    const value = 23;
    const suma = total + value;
  };

  return (
    <div className="relative">
      <div className="bg-white py-[4px] px-[12px] rounded-xl">
        <div className="w-full flex items-center">
          <img
            className="w-[2.5rem] h-[2.5rem] rounded-full"
            src="https://w7.pngwing.com/pngs/519/698/png-transparent-user-profile-avatar-scalable-graphics-icon-girls-face-fashion-girl-people-thumbnail.png"
            alt=""
          />
          <p className="mx-[20px]">User Name</p>
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
        <div className="absolute top-full bg-red-300 w-full my-[12px] rounded-xl py-[5px]">
          <button
            type="button"
            className="w-full text-[1.1rem]"
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
