import React from 'react';
import { Container, Navbar, NavbarBrand , NavbarToggle, Nav, NavLink, NavDropdown, } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import './DashboardNavbar.css';

function DashboardAreaNavbar() {
    return (
        <div>
            <Navbar>
                <Container>
                    <NavbarBrand href="#home"> Logo</NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink href="#addNews">Add News</NavLink>
                            <NavLink href="#users">Users</NavLink>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#addAdmin">Add Admin"</NavDropdown.Item>
                                <NavDropdown.Item href="#addAdmin">All user"</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default DashboardAreaNavbar;
