import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("id") == null ||
      localStorage.getItem("token") == null
    ) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="">
      <Header title="Dashboard" />
    </div>
  );
}

export default Dashboard;
