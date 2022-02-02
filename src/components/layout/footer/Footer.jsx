import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer p-5 mt-5">
      <div className="d-flex justify-content-between w-100 flex-wrap">
        <div className="footer-text">
          <p>© Sitio realizado por Kevin Efraim y Nicolás Joaquín</p>
        </div>
        <div className="admin-btn">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://phoneadmin.vercel.app/"
          >
            <button className="btn btn-secondary">Admin</button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
