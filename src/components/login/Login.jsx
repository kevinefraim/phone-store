import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
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
    setError("");
    formReset();
    navigate("/");
  };

  return (
    <main
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form onSubmit={handleLog} className="form-login">
        <div className="title d-flex flex-column">
          <h2 className="text-center">Inicia Sesión</h2>
          {error !== "" && (
            <h3 className="text-light text-center bg-danger">{error}</h3>
          )}
        </div>
        <div className="form-item">
          <label htmlFor="user">Nombre de Usuario</label>
          <input
            onChange={({ target }) => setUsuario(target.value)}
            value={usuario}
            type="text"
            name="user"
            placeholder="Ingrese su usuario"
          />
        </div>
        <div className="form-item">
          <label htmlFor="password">Contraseña</label>
          <input
            onChange={({ target }) => setPass(target.value)}
            value={pass}
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            min={0}
          />
        </div>
        <Link to="/registro">
          <p className="registro-btn">¿No tenés una cuenta? Registrate</p>
        </Link>
        <div className="form-btn">
          <button className="btn btn-light" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </main>
  );
};

export default LogIn;
