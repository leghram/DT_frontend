import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AuthRouter = [
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
  {
    path: "/register",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Register />,
      },
    ],
  },
];

export default AuthRouter;
