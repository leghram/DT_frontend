import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

function GenericLayout() {
  return (
    <div className="h-screen w-screen flex bg-clear">
      <div className="bg-primary w-[15%] rounded-r-3xl py-8">
        <div className="text-white text-[1.5rem] font-bold w-full flex items-center justify-center py-[10px]">
          Menu
        </div>
        <Navbar />
      </div>
      <div className="grow overflow-y-scroll px-8 bg-clear">
        <div className="w-full h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default GenericLayout;
