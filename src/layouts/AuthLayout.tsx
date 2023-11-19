import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-clear flex flex-col md:flex-row">
      <div className="md:w-[30%] bg-primary py-[50px]">
        <h1 className="text-white text-[2rem] lg:text-[4rem] font-700 text-center">
          Bienvenido a nuestra <span className="font-bold">App</span>
        </h1>
      </div>
      <div className="grow bg-clear flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
