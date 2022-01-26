import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import ErrorForm from "../../assets/errorForm/ErrorForm";

import "./Registro.css";

const Registro = () => {
  const { users, handleAddUsers } = useContext(AuthContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formReset = () => {
    setNombre("");
    setEmail("");
    setUsuario("");
    setPass("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, email, usuario, pass].includes("")) {
      return setError("Hay campos vacios");
    }
    if (pass.length < 6) {
      return setError("La contraseña debe tener al menos 6 caractéres");
    }

    const user = {
      nombre,
      email,
      usuario,
      pass,
    };
    OnAddUser(user);
  };

  const OnAddUser = (user) => {
    const exist = users.find(
      (us) => us.email === user.email || us.usuario === user.usuario
    );
    if (exist) {
      return setError("El email o el usuario ya estan registrados");
    }
    handleAddUsers(user);
    setError("");
    formReset();
    navigate("/login");
  };

  return (
    <main
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form onSubmit={handleSubmit} className="form-registro">
        <div className="title d-flex flex-column">
          <h2 className="text-center">Registrarse</h2>
          {error !== "" && <ErrorForm error={error} />}
        </div>
        <div className="form-item">
          <label htmlFor="fullName">Nombre</label>
          <input
            onChange={({ target }) => setNombre(target.value)}
            value={nombre}
            type="text"
            name="fullName"
            placeholder="Escriba su nombre"
          />
        </div>
        <div className="form-item">
          <label htmlFor="fullName">Email</label>
          <input
            onChange={({ target }) => setEmail(target.value)}
            value={email}
            type="email"
            name="mail"
            placeholder="Escriba su Email"
          />
        </div>
        <div className="form-item">
          <label htmlFor="fullName">Nombre de usuario</label>
          <input
            onChange={({ target }) => setUsuario(target.value)}
            value={usuario}
            type="text"
            name="userName"
            placeholder="Escriba su nombre de usuaro"
          />
        </div>
        <div className="form-item">
          <label htmlFor="fullName">Contraseña</label>
          <input
            onChange={({ target }) => setPass(target.value)}
            value={pass}
            type="password"
            name="password"
            placeholder="Escriba su contraseña"
            min={0}
          />
        </div>
        <Link to="/login">
          <p className="registro-btn">¿Ya tenés una cuenta? Iniciá sesión</p>
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

export default Registro;
