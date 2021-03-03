import { Link } from "react-router-dom";
import { useAuth } from "../util/authContext";
import React, { Component, Fragment } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


function NavbarFunc() {
  const auth = useAuth();

  const signOut = () => {
    auth.logout();
  };
 

return (
<Fragment>
    <Navbar sticky="top" bg="#bbbbbbed" expand="lg" >
      <Navbar.Brand as= {Link} to="/home-page">Tag Generator</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home-page">Home</Nav.Link>
          <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          {auth.isLoggedIn && <Nav.Link className="nav-item nav-link" as= {Link} to="/user-profile">
            Account
            </Nav.Link>}

          {auth.isLoggedIn ? (
            <button type="button" as={Link} onClick={signOut}>
              Sign Out
            </button>
          ) : (
            <Nav.Link as= {Link} to="/login" className="nav-item nav-link">Login</Nav.Link>
          )}

        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item as= {Link} to="/user-profile">Account</NavDropdown.Item>
          <NavDropdown.Item as= {Link}to="/login">Login</NavDropdown.Item>
          <NavDropdown.Item as= {Link}to="/signup">Sign Up</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as= {Link}to="/protected">protected</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</Fragment >
  );
}

export default NavbarFunc;
