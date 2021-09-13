import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import './DashboardNavbar.css';
import logoimg from '../../images/logo@2x.png'

const DashboardNavbar = () => {
    return (
        <div >
             <Navbar className="dashboard_navbar" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <NavbarBrand href="#home" className=''> 
                        <div className='brandLogo'>
                            <img className='img-fluid' src={logoimg} alt='logo'/>
                        </div> 
                    </NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="ms-auto ">
                            <Link className="dashboard_menu" to="/dashboard">Dashboard</Link>
                            <Link className="me-auto dashboard_menu" to="/addnews">Add News</Link>
                            <Link className="me-auto dashboard_menu" to="/users">Users</Link>
                            <Link className="me-auto dashboard_menu" to="/add-admin">Add Admin</Link>
                        </Nav>

                        <Nav>
                            <Link className="me-auto dashboard_menu" to="/">Back Home</Link>
                            <Link className="me-auto btnPrimary" eventKey={2} to="/login">
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