import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import cozom_logo from '../cozom_logo.png' 
import { useNavigate } from "react-router-dom";

const TopNav = () => {
    const navigate = useNavigate();

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
          <Button variant="outline-success" onClick={()=>navigate('/signup')}>회원가입</Button>
          <Button variant="outline-success" style={{marginLeft: "10px"}} onClick={()=>navigate('/')}>로그인</Button>
        </Container>
      </Navbar>

    )
}

export default TopNav;