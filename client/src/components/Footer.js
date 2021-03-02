import { Link } from "react-router-dom";


    function Footer() {
    return (
      <footer style={{backgroundColor: "rgb(61, 57, 57)",
      borderTop: "1px solid #E7E7E7",
      textAlign: "center",
      padding: "20px",
      position: "fixed",
      left: 0,
      bottom: 0,
      height: "60px",
      width: "100%", 
      display: "inline",       
      }}>
        <section id="footer">
      <div className="row">
        <div className="col">
        <p style={{ color: "white" }}>Guled ~ Shane ~ Travis</p>
        </div>
      </div>
      <Link to="/login" className="nav-item nav-link">Login</Link>
      </section>
    </footer>
    );
  }

  export default Footer;
