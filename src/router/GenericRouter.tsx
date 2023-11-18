import { Navigate } from "react-router-dom";
import GenericLayout from "../layouts/GenericLayout";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";

const GenericRouter = {
  path: "/",
  element: <GenericLayout />,
  children: [
    {
      path: "",
      element: <Dashboard />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/*",
      element: <Navigate to="/" />,
    },
  ],
};

export default GenericRouter;
