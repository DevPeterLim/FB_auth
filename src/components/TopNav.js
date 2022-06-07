import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import cozom_logo from '../cozom_logo.png'

const TopNav = () => {

    return (
        <Navbar bg="black" variant="dark">
        <Container>
        <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand href="/" >
            <img
              alt=""
              src={cozom_logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Coding Zombie
          </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Nav.Link href="/post">Posts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    )
}

export default TopNav;