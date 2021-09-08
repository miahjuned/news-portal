import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import './DashboardNavbar.css';

const DashboardNavbar = () => {
    return (
        <div >
             <Navbar className="dashboard_navbar" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <NavbarBrand href="#home"> Logo</NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Link className="dashboard_menu" to="/dashboard">Dashboard</Link>
                            <Link className="me-auto dashboard_menu" to="/addnews">Add News</Link>
                            <Link className="me-auto dashboard_menu" to="/users">Users</Link>
                            <Link className="me-auto dashboard_menu" to="/add-admin">Add Admin</Link>
                        </Nav>

                        <Nav>
                            <Link className="me-auto dashboard_menu" to="/">More deets</Link>
                            <Link className="me-auto dashboard_Login" eventKey={2} to="/login">
                                Login
                            </Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default DashboardNavbar;