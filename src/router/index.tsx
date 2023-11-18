import { useRoutes } from "react-router-dom";

import AuthRouter from "./AuthRouter";
import GenericRouter from "./GenericRouter";

function AppRouter() {
  return useRoutes([...AuthRouter, GenericRouter]);
}

export default AppRouter;
