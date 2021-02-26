import { Link } from "react-router-dom";

    function Footer() {
    return (
      <footer>
        <section id="footer">
      <div className="row">
        <div className="col">
            Footer Section
        </div>
      </div>
      <Link to="/login" className="nav-item nav-link">Login</Link>
      </section>
    </footer>
    );
  }

  export default Footer;
