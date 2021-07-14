import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { FaShoppingCart, FaUser } from "react-icons/fa"

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" left>
            ThePizza
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" right>
              <Nav.Link href="/cart">
                <FaShoppingCart className="mx-2" />
                Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser className="mx-2" />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
