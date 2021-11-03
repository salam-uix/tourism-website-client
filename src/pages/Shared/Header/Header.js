import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="w-25" href="#home"><img className="img-fluid" src="https://i.ibb.co/8YJKQrB/tdaddy.png" alt=""
                        class="img-fluid bg-white w-75" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        {
                            user.email && <div className="d-flex">
                                <NavLink className="text-decoration-none" to="/manageAllOrders">Manage all order</NavLink>
                                <NavLink className="text-decoration-none mx-3" to="/myOrders">My Order</NavLink>
                                <NavLink className="text-decoration-none" to="/addnewservice">Add new service</NavLink>
                            </div>
                        }

                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Hello: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;