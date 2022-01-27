import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import LoginForm from "../../layout/loginForm/LoginForm";

const AdminLogin = () => {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const { handleAdminUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const adminAccount = {
    usuario: "admin",
    pass: "admin1234",
  };

  const formReset = () => {
    setUsuario("");
    setPass("");
  };

  const handleLog = (e) => {
    e.preventDefault();

    if ([usuario, pass].includes("")) {
      return setError("Hay campos vacios");
    }

    const adminUser = {
      usuario,
      pass,
    };

    onActiveUser(adminUser);
  };

  const onActiveUser = (user) => {
    const existUser =
      adminAccount.usuario === user.usuario && adminAccount.pass === user.pass;
    if (!existUser) {
      return setError("No existe un usuario con ese estos datos");
    }

    handleAdminUser(adminAccount);
    setError("");
    formReset();
    navigate("/admin");
  };

  return (
    <main>
      <Link to="/">
        <button className="btn btn-primary mt-5 ms-5">Ir a inicio</button>
      </Link>
      <div
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
        />
      </div>
    </main>
  );
};

export default AdminLogin;
