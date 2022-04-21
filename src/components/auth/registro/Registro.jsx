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
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formReset = () => {
    setNombre("");
    setEmail("");
    setPass("");
    setApellido("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/register`,
        {
          email,
          name: nombre,
          last_name: apellido,
          password: pass,
        }
      );
      console.log(res.data.token);
    } catch (error) {
      console.log(error);
    }
    formReset();
    // // navigate("/");
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
          <label htmlFor="name">Nombre</label>
          <input
            onChange={({ target }) => setNombre(target.value)}
            value={nombre}
            type="text"
            name="name"
            placeholder="Escriba su nombre"
          />
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
