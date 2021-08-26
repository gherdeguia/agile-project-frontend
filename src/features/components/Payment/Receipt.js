import React, {useState} from "react";
import ticket from "./ticket.png"
import {getPayment, getOrder} from "../../reducers/orderSlice";
import {useSelector} from 'react-redux';
import "./receipt.css";
import {
    Col,
    Container,
    Row
} from "react-bootstrap";
import moment from "moment";


function Receipt() {
    const payment = useSelector(getPayment);
    const payment1 = useSelector(getOrder);
    console.log('payment', payment);
    // console.log(payment1);
    const movie = payment1.movie;

    // const movie = payment.movie;
    // const payment1 = {movieName, cinemaName, screeningDate, screeningEndTime, screeningStartTime, selectedSeats} 
    

    return(

        <Container className = "ticket-parent">
            <Row>
                <h1>Thank you for your purchase</h1>
            </Row>
            <Row> 
                {/* <Col></Col> */}
                <Col>
                    <div className = "ticket-wrapper">
                    <div className = "ticket-header">MOVIE TICKET</div>
                    <div className = "ticket-content">
                    <p>{movie.name}</p>
                    {/* <p><span>{payment.cinemaName}</span><span> {moment(payment.screeningDate).format("MMMM Do ")} {moment(payment.screeningStartTime,'HH:mm:ss').format("HH:mm")} - {moment(payment.screeningEndTime,'HH:mm:ss').format("HH:mm")}</span></p> */}
                    <p><span>Number of Tickets: </span><span> Seats: </span></p>
                    <p>Ticket No.: {payment.ticketNumber}</p>
                    </div>
                    </div>
                </Col>
                {/* <Col></Col> */}
            </Row>
        </Container>
    );
}

export default Receipt;