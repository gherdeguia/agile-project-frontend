import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Seats from './Seats';
import './SeatsSelection.css';
import { getOrder, ReserveTickets } from "../../reducers/orderSlice";
import { InputNumber, Button } from 'antd';
import moment from "moment";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function SeatsSelection() {
    const dispatch = useDispatch();
    const selected = useSelector(getOrder);
    const movie = selected.movie;
    const cinema = selected.cinema;
    const screening = selected.screeningTime.selectedScreeningTime;
    const movieDate = screening.movieDate;
    const endTime = screening.endTime;
    const startTime = screening.startTime;
    const price = parseFloat("250.0");
    const [quantity, setQuantity] = useState("");
    const [totalPrice, setTotalPrice] = useState("0.00");

    function changeTicketQuantity(value) {
        setQuantity(value);
        calculateTotalPrice(value);
    }

    function calculateTotalPrice(value) {
        setTotalPrice(parseFloat(price * value).toFixed(2));
    }

    function sendSeatDetails() {
        dispatch(ReserveTickets({totalPrice, quantity}));
    }

    return (
        <div>
            <Header/>
            <div className="seats_page">
                
                <span className="movie">{movie.name}</span>
                <span className="cinema">{cinema.name}</span>
                <span className="date">{moment(movieDate).format("MMMM D")}</span>
                <span className="time">{moment(startTime,'HH:mm:ss').format("HH:mm")} - {moment(endTime,'HH:mm:ss').format("HH:mm a")}</span>
                <hr></hr>
                <h6 className="ticket_qty">Ticket Quantity</h6>
                <InputNumber className="ticket_input" size="small" min={0} defaultValue={0} onChange={changeTicketQuantity} value={quantity}></InputNumber>
                <span className="total_price">TOTAL PRICE: PHP {totalPrice}</span>
                <hr></hr>
                <span className="seat_label">Select Your Seats</span>
                <span className="status_available">Available Seats</span>
                <span className="status_sold_out">Sold Out</span>
                <span className="status_selected">Selected</span>
                <Seats className="seats"/>
                <Link key={cinema.id} to="/screening_time">
                <Button className="back_btn" shape="round">Back</Button>
                </Link>
                <Link to="/payment">
                <Button className="proceed_btn" type="primary" shape="round" onClick={sendSeatDetails}>Proceed</Button>
                </Link>
            </div>
        </div>
    )
}

export default SeatsSelection;