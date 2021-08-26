import logo from './CINEQ-2.png';
import React from 'react'
import {Nav, Navbar} from "react-bootstrap";



function Header() {
    return (
        <Navbar>
            <Navbar.Brand href="/">
                <img
                    style={{ paddingLeft: '20%' }}
                    src={logo}
                    width="160px"
                    alt="CineQ Logo"
                />
            </Navbar.Brand>
            <Nav>
            </Nav>
            <Nav>
                {/* <Link to="/">
                    <b>Sign up</b>&nbsp;
                    <FontAwesomeIcon icon={faUserCircle}/>

                </Link> */}
            </Nav>
        </Navbar>
        
    )
}

export default Header
