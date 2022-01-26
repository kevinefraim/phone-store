import ErrorForm from "../../assets/errorForm/ErrorForm";

const LoginForm = ({
  children,
  error,
  usuario,
  pass,
  handleLog,
  setUsuario,
  setPass,
}) => {
  return (
    <form onSubmit={handleLog} className="form-login">
      <div className="title d-flex flex-column">
        <h2 className="text-center">Inicia Sesión</h2>
        {error !== "" && <ErrorForm error={error} />}
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
      {children}
      <div className="form-btn">
        <button className="btn btn-light" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
