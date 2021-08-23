import logo from './logo.png';
import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";


function Header() {
    return (
        <Navbar bg="white">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="160px"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav>
                    <Nav.Link>
                        <b>Sign</b> up
                        <FontAwesomeIcon icon={faUserCircle}/>

                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
