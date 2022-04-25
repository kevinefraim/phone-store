import ErrorForm from "../../assets/errorForm/ErrorForm";

const LoginForm = ({
  children,
  error,
  email,
  pass,
  handleLog,
  setEmail,
  setPass,
}) => {
  return (
    <form onSubmit={handleLog} className="form-login">
      <div className="title d-flex flex-column">
        <h2 className="text-center">Inicia Sesión</h2>
        {error !== null && <ErrorForm error={error.response.data.error} />}
      </div>
      <div className="form-item">
        <label htmlFor="email">Email de Usuario</label>
        <input
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          type="text"
          name="email"
          placeholder="Ingrese su email"
        />
        {error?.email && <ErrorForm error={error?.email} />}
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
        {error?.password && <ErrorForm error={error?.password} />}
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
