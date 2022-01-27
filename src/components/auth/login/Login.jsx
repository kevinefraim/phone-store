import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import LoginForm from "../../layout/loginForm/LoginForm";

import "./Login.css";

const LogIn = () => {
  const { users, handleActiveUser } = useContext(AuthContext);
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //reset form
  const formReset = () => {
    setUsuario("");
    setPass("");
  };

  //funcion de login
  const handleLog = (e) => {
    e.preventDefault();

    if ([usuario, pass].includes("")) {
      return setError("Hay campos vacios");
    }

    const user = {
      usuario,
      pass,
    };

    onActiveUser(user);
  };

  const onActiveUser = (user) => {
    const existUser = users.find(
      (us) => us.usuario === user.usuario && us.pass === user.pass
    );

    if (!existUser) {
      return setError("No existe un usuario con ese estos datos");
    }

    handleActiveUser(existUser);
    formReset();
    setError("");
    navigate("/");
  };

  return (
    <main
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <LoginForm
        error={error}
        usuario={usuario}
        pass={pass}
        handleLog={handleLog}
        setUsuario={setUsuario}
        setPass={setPass}
      >
        <Link to="/registro">
          <p className="registro-btn">¿No tenés una cuenta? Registrate</p>
        </Link>
      </LoginForm>
    </main>
  );
};

export default LogIn;
