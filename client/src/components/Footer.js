import { Link } from "react-router-dom";


    function Footer() {
    return (
      <footer style={{backgroundColor: "#ff8243",
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
        <p style={{ color: "white" }}>Created By: KODE GOATS</p>
        </div>
      </div>
      <Link to="/login" className="nav-item nav-link">Login</Link>
      </section>
    </footer>
    );
  }

  export default Footer;
