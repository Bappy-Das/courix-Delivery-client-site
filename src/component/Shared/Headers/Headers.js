import React from 'react';
import logo1 from '../../../images/resize-1635501537805284272cover.png'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FaArrowRight } from 'react-icons/fa';
import './Headers.css'
// import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';

const Headers = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" fixed="top" className="my-0 py-0 head-bg" variant="dark">
                <Container>
                    <Navbar.Brand as={HashLink} to="/" > <img className="img-fluid" src={logo1} alt="Curix" srcset="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={HashLink} to="/">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/service#service">Service</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact">Contact Us</Nav.Link>

                            <Nav.Link as={HashLink} to="/newservice">Add New Service</Nav.Link>
                            <Nav.Link as={HashLink} to="/manageorder">Manage All Order</Nav.Link>


                        </Nav>
                        <Nav>
                            {user?.accessToken ?
                                <div className="d-flex">
                                    <HashLink to="/myorder"><img className="user-img" src={user?.photoURL} alt="" srcset="" /></HashLink>
                                    <NavDropdown title={user?.displayName} id="collasible-nav-dropdown">
                                        <NavDropdown.Item as={HashLink} to="/">My Profile</NavDropdown.Item>
                                        <NavDropdown.Item as={HashLink} to="/myorder">My Order</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={logOut}>Log Out</NavDropdown.Item>
                                    </NavDropdown>
                                </div>

                                :
                                <Nav.Link as={HashLink} to="/login"> <Button>Log In <FaArrowRight /></Button> </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Headers;