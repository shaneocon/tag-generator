import { Link } from "react-router-dom";
import { useAuth } from "../util/authContext";
import React, { Component, Fragment } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

function NavbarFunc() {
  const auth = useAuth();

  const signOut = () => {
    auth.logout();
  };

  return (
    <Fragment>
      <Navbar style={{backgroundColor: "#ff8243f2"}} sticky="top" expand="lg">
        <Navbar.Brand id="tag" as={Link} to="/home-page">
        <img src="https://fontmeme.com/permalink/210303/bbbe5546682f1ec9267b8854759e16fd.png" alt="tag-generator" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home-page">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
            {auth.isLoggedIn && (
              <Nav.Link
                className="nav-item nav-link"
                as={Link}
                to="/user-profile"
              >
                Account
              </Nav.Link>
            )}

            {auth.isLoggedIn ? (
              <button type="button" as={Link} onClick={signOut}>
                Sign Out
              </button>
            ) : (
              <Nav.Link as={Link} to="/login" className="nav-item nav-link">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default NavbarFunc;
