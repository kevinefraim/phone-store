import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";
import { AuthContext } from "../../../context/AuthContext";
import ErrorForm from "../../assets/errorForm/ErrorForm";

import "./Registro.css";

const Registro = () => {
  const { users, handleAddUsers } = useContext(AuthContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/register`,
        {
          email,
          name: nombre,
          last_name: apellido,
          password: pass,
        }
      );
      if (data.ok) navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };
  console.log(error);
  return (
    <main
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form onSubmit={handleSubmit} className="form-registro">
        <div className="title d-flex flex-column">
          <h2 className="text-center">Registrarse</h2>
          {error && typeof error.msg === "string" && (
            <ErrorForm error={error.msg} />
          )}
        </div>
        <div className="form-item">
          <label htmlFor="name">Nombre</label>
          <input
            onChange={({ target }) => setNombre(target.value)}
            value={nombre}
            type="text"
            name="name"
            placeholder="Escriba su nombre"
          />
          {error?.msg?.name && <ErrorForm error={error?.msg.name[0]} />}
        </div>
        <div className="form-item">
          <label htmlFor="lastname">Apellido</label>
          <input
            onChange={({ target }) => setApellido(target.value)}
            value={apellido}
            type="text"
            name="lastname"
            placeholder="Escriba su Apellido"
          />
          {error?.msg?.last_name && (
            <ErrorForm error={error?.msg.last_name[0]} />
          )}
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
          {error?.msg?.email && <ErrorForm error={error?.msg.email[0]} />}
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
          {error?.msg?.password && <ErrorForm error={error?.msg.password[0]} />}
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
