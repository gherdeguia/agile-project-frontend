import React from 'react'
import {Container, Nav, Navbar, Table} from "react-bootstrap";
import logo from "../Header/logo.png";
import './Footer.css'

function Footer() {
    return (
        <Navbar bg="dark" fixed="bottom">
            <Container>
                <Navbar.Brand href="/">
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                                <a className="nav-link" href="/">About</a>
                            </td>
                            <td>
                                <a className="nav-link" href="/">Popular Movies</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="nav-link" href="/">Contact Us</a>
                            </td>
                            <td>
                                <a className="nav-link" href="/">Upcoming Movies</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                <a className="nav-link" href="/">Cinemas</a>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Navbar.Brand>
                <Nav>
                    <div>
                        <div>
                            <img
                                src={logo}
                                width="160px"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </div>
                        <div>
                            <span>© 2021 | CTRL ALT ELITE</span>
                        </div>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer
