import logo from './CINEQ-2.png';
import React from 'react'
import {Container, Nav, Navbar, Table} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";


function Header() {
    return (
        <Navbar bg="white">
            <Container>
                <Table>
                    <tr>
                        <td>
                <Navbar.Brand href="/">
                    <div style={{marginRight:"300px"}}>
                    <img
                        src={logo}
                        width="170px"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </div>               
                </Navbar.Brand>
                </td>
                <td>
                <Nav>
                    <Nav.Link>
                        <b>Sign</b> up
                        <FontAwesomeIcon icon={faUserCircle}/>
                    </Nav.Link>
                </Nav>
                </td>
                </tr>
                </Table>
            </Container>
        </Navbar>
    )
}

export default Header
