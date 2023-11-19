import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

function GenericLayout() {
  return (
    <div className="h-screen w-screen bg-clear flex flex-col md:flex-row flex-col-reverse ">
      <div className="bg-primary w-full md:w-[20%]  lg:w-[15%] md:rounded-r-3xl py-8">
        <div className="collapse md:visible text-white md:text-[1.5rem] font-bold w-full flex items-center justify-center md:py-[10px]">
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
