import { Link } from "react-router-dom";
import { useAuth } from "../util/authContext";


function Navbar() {
  const auth = useAuth();

  const signOut = () => {
    auth.logout();
  };
  // return (
  //   <ul style={styles.ul}>
  //     <li style={styles.li}>
  //       <Link to="/public">Public Page</Link>
  //     </li>
  //     <li style={styles.li}>
  //       <Link to="/protected">Protected Page</Link>
  //     </li>
  //     {auth.isLoggedIn && (
  //       <li style={styles.li}>
  //         <Link to="/profile">Profile Page</Link>
  //       </li>
  //     )}
  //     <li style={styles.li}>
  //       {auth.isLoggedIn ? (
  //         <button type="button" onClick={signOut}>
  //           Sign Out
  //         </button>
  //       ) : (
  //         <Link to="/login">Login</Link>
  //       )}
  //     </li>
  //   </ul>


return (
  <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <Link className="navbar-brand" to="/">
          Tag Generator
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/home-page">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="/signup">
              Register
            </Link>
            {auth.isLoggedIn && <Link className="nav-item nav-link" to="/user-profile">
              Account
            </Link>}
            
        {auth.isLoggedIn ? (
          <button type="button" onClick={signOut}>
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="nav-item nav-link">Login</Link>
        )}
      
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
