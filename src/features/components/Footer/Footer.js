import React from 'react'
import {Table} from "react-bootstrap";
import logo from "../Header/CINEQ-2.png";
import emails from "../Header/email.png";
import instagram from "../Header/instagram.png";
import facebook from "../Header/facebook.png";
import './Footer.css'

function Footer() {
    return (
       
            <footer className="footer-container">
                <Table>
                        <tr>
                            <td rowspan="3">
                            <img
                                src={logo}
                                width="170px"
                                className="cineq-logo"
                                alt="React Bootstrap logo"
                            />
                            </td>
                            <td rowSpan="4" className="vertical-line">|</td>
                            <th class="follow-text">Follow us on</th>
                        </tr>
                        <tr>
                            <td class="email-text">
                                <img
                                    src={emails}
                                    width="30px"
                                    className='email-logo'
                                    alt="Email Logo"
                                />
                                cineq@business-email.com
                            </td>
                        </tr>
                        <tr>
                            <td class="facebook-text">
                            <img
                                    src={facebook}
                                    width="30px"
                                    className='facebook-logo'
                                    alt="Facebook Logo"
                                />
                                /cineQ
                            </td>
                        </tr>
   
                        <tr>
                            <td class="group-name">© 2021 | CTRL ALT ELITE</td>
                            <td class="insta-text">     
                                <img
                                    src={instagram}
                                    width="30px"
                                    className='instagram-logo'
                                    alt="Instagram Logo"
                                />
                                @cineQ</td>
                        </tr>
                </Table>
            </footer>
    )
}

export default Footer
