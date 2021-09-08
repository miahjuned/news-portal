import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink, Button, FormControl, Form, NavDropdown } from 'react-bootstrap';

const NavbarArea = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
        <Container>
          <NavbarBrand href="#home">
            LOGO
          </NavbarBrand>
          <Nav className="me-auto">
            <NavLink  href="#home">Home</NavLink>
            <NavLink  href="#About">About</NavLink>
            <NavLink  href="#Fetured">Fetured</NavLink>
            <NavLink  href="#Dropwon">Dropwon</NavLink>
            <NavLink  href="Dashboard">Dashboard</NavLink>

            <NavDropdown>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarArea;