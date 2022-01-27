import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-text">
        <p>© Sitio realizado por Kevin Efraim y Nicolás Joaquín</p>
      </div>
      <div className="admin-btn">
        <Link to="/admin">
          <button className="btn btn-secondary">Admin</button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
