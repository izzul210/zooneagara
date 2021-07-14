import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss';

function Navs() {
    return (
        <div className="navBar">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/">Zoo Negara</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav_left">
                            <Nav.Link href="/tickets">Ticket</Nav.Link>
                            <Nav.Link>Latest Information</Nav.Link>
                            <Nav.Link>About Zoo</Nav.Link>
                            <Nav.Link>Shop</Nav.Link>
                        </Nav>
                        <Nav className="nav_right">
                            <Nav.Link>Member Login</Nav.Link>
                            <Nav.Link className="cart">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navs
