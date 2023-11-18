import { Outlet } from "react-router-dom";

function GenericLayout() {
  return (
    <div>
      <h1>Generic Layout</h1>
      <Outlet />
    </div>
  );
}

export default GenericLayout;
