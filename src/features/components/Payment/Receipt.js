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
import Footer from '../Footer/Footer.js';


function Receipt() {

    const payment = useSelector(getPayment);
    const payment1 = useSelector(getOrder);
    const quantity = payment1.ticketQuantity;
    const seats = payment1.Seats.seatSelected;
    const movieDate = payment1.screeningTime.selectedScreeningTime.movieDate;
    const selectedScreeningStartTime = payment1.screeningTime.selectedScreeningTime.startTime;
    const selectedScreeningEndTime = payment1.screeningTime.selectedScreeningTime.endTime;

    return(
        <div>
        <Container className = "ticket-parent">
            <Header/>
            <Row>
                <h1>Thank you for your purchase!</h1>
            </Row>
            <Row>
                <Col>
                    <div className = "ticket-wrapper">
                    <div className = "ticket-header">MOVIE TICKET</div>
                    <div className = "ticket-content">
                    {null !== payment && (
                    <div>
                    <p>{payment.movieName}</p>
                    <p><span>{payment.cinemaName}&emsp;</span><span className = "ticket-content2"> {moment(movieDate).format("MMMM Do ")} </span> <span className = "ticket-content2">{moment(selectedScreeningStartTime,'HH:mm:ss').format("HH:mm")} </span> <span className = "ticket-content2"> - {moment(selectedScreeningEndTime,'HH:mm:ss').format("HH:mm")}</span></p>
                    <p><span>{quantity} TICKETS </span><span className = "ticket-content2"> &emsp; SEATS: {seats.map((seat, idx) => (<span key={idx}> {seat} </span>))}  </span></p>
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