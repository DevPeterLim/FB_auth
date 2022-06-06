import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNav = () => {

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Link to={'/'}>
          <Navbar.Brand href="#">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          React Bootstrap
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>

    )
}

export default TopNav;