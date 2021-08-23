import React from 'react'
import {Container, Nav, Navbar, Table} from "react-bootstrap";
import logo from "../Header/logo.png";
import './Footer.css'

function Footer() {
    return (
        <Navbar bg="dark"  fixed="bottom">
            <Container>
                <Navbar.Brand href="/">
                    <Table>
                        <tr>
                            <td>
                                About
                            </td>
                            <td>
                                Popular Movies
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Contact Us
                            </td>
                            <td>
                                Upcoming Movies
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                Cinemas
                            </td>
                        </tr>
                    </Table>
                    <Nav.Item></Nav.Item>
                </Navbar.Brand>
                <Nav>
                    <img
                        src={logo}
                        width="160px"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <span>© 2021 | CTRL ALT ELITE</span>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer
