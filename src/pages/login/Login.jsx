import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const LogIn = () => {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");

  //reset form
  const formReset = () => {
    setUsuario("");
    setPass("");
  };

  //funcion de login
  const handleLog = (e) => {
    e.preventDefault();
    const user = {
      usuario,
      pass,
    };
    console.log(user);
    formReset();
  };

  return (
    <main
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form onSubmit={handleLog} className="form-login">
        <div className="title">
          <h1>Inicia Sesión</h1>
        </div>
        <div className="form-item">
          <label htmlFor="user">Nombre de Usuario</label>
          <input
            onChange={({ target }) => setUsuario(target.value)}
            type="text"
            name="user"
            placeholder="Ingrese su usuario"
          />
        </div>
        <div className="form-item">
          <label htmlFor="password">Contraseña</label>
          <input
            onChange={({ target }) => setPass(target.value)}
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
