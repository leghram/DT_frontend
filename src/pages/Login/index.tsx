import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDataContextProvider } from "../../context/AuthContext";
import getToken from "../../services/auth.service";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const { data, setData } = useDataContextProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, []);

  const btnNavigateRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    if (logged) {
      setData(true);
      navigate("/");
    }
  }, [logged]);

  const btnLogin = async () => {
    try {
      if (username.length > 0 && password.length > 0) {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        const response = await getToken(formData);

        if (response.status === 200) {
          setLogged(true);
        }
      }
    } catch (error) {
      setLogged(false);
    }
  };

  const onChangeUsername = (event: any) => {
    setUserName(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <form className="w-[40%] p-[30px] shadow-[0px_5px_5px_0px_rgb(230_220_220)] rounded-xl">
      <h1 className="text-center py-[10px] font-bold text-[1.2rem]">Login</h1>
      <div className="py-[20px]">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email
          <input
            onChange={onChangeUsername}
            type="text"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="email"
            required
          />
        </label>
      </div>
      <div className="py-[20px]">
        <label
          htmlFor="Password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password
          <input
            onChange={onChangePassword}
            type="password"
            id="Password"
            name="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="password"
            required
          />
        </label>
      </div>
      <div className="py-[20px]">
        <button
          type="button"
          className="w-full bg-primary rounded-lg block p-2.5 text-white hover:bg-primary/70"
          onClick={btnLogin}
        >
          Log In
        </button>
      </div>

      <div className="py-[20px]">
        <button onClick={btnNavigateRegister} type="button">
          Crear una cuenta
        </button>
      </div>
    </form>
  );
}

export default Login;
