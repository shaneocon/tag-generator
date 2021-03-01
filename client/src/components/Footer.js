import { Link } from "react-router-dom";


    function Footer() {
    return (
      <footer style={{backgroundColor: "#F8F8F8",
      borderTop: "1px solid #E7E7E7",
      textAlign: "center",
      padding: "20px",
      position: "fixed",
      left: 0,
      bottom: 0,
      height: "60px",
      width: "100%", 
      display: "block",       
      }}>
        <section id="footer">
      <div className="row">
        <div className="col">
        <i className="fa fa-feather">Guled, Shane & Travis</i>
        </div>
      </div>
      <Link to="/login" className="nav-item nav-link">Login</Link>
      </section>
    </footer>
    );
  }

  export default Footer;
