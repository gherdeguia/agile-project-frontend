import React from "react";
import {getPayment, getOrder} from "../../reducers/orderSlice";
import {useSelector} from 'react-redux';
import "./receipt.css";
import {
    Col,
    Container,
    Row
} from "react-bootstrap";
import moment from "moment";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Receipt() {

    const payment = useSelector(getPayment);
    const payment1 = useSelector(getOrder);
    const quantity = payment1.ticketQuantity
    const seats = payment1.Seats.seatSelected

    return (
        <div>
            <Container className="ticket-parent">
                <Header/>
                <Row>
                    <h1>Thank you for your purchase!</h1>
                </Row>
                <Row>
                    <Col>
                        <div className="ticket-wrapper">
                            <div className="ticket-header">MOVIE TICKET</div>
                            <div className="ticket-content">
                                {null !== payment && (
                                    <div>
                                        <p>{payment.movieName}</p>
                                        <p><span>{payment.cinemaName}&emsp;</span><span
                                            className="ticket-content2"> {moment(payment.screeningDate).format("MMMM Do ")} {moment(payment.screeningStartTime, 'HH:mm:ss').format("HH:mm")} - {moment(payment.screeningEndTime, 'HH:mm:ss').format("HH:mm")}</span>
                                        </p>
                                        <p><span>{quantity} TICKETS </span><span
                                            className="ticket-content2"> &emsp; SEATS: {seats.map((seat, idx) => (
                                            <span key={idx}> {seat} </span>))}  </span></p>
                                        <p>Ticket No.: {payment.ticketNumber}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div style={{marginTop: '210px'}}>
                <Footer/>
            </div>
        </div>
    );
}

export default Receipt;