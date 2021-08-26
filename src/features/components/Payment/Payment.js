import React, {useState} from "react";

import {
    Button,
    Card,
    Col,
    Container,
    Form,
    FormLabel,
    Row,
    ToggleButton,
    ToggleButtonGroup
} from "react-bootstrap";
import "./payment.css";
import * as Icon from "react-bootstrap-icons";
import {useDispatch} from "react-redux";
import {AddUser, getOrder, AddOrder} from "../../reducers/orderSlice";
import {createPayment} from "../../apis/payment";
import { useSelector } from "react-redux";
import moment from "moment";
import {Link} from "react-router-dom";

function Payment(props) {
    const [value, setValue] = useState([1, 3]);
    const handleChange = (val) => setValue(val);
    const [fname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNum, setCardNum] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCVV] = useState('');
    const dispatch = useDispatch();

    const selected = useSelector(getOrder);
    const movie = selected.movie;
    const cinema = selected.cinema;
    const screening = selected.screeningTime.selectedScreeningTime;
    const movieDate = screening.movieDate;
    const endTime = screening.endTime;
    const startTime = screening.startTime;
    const quantity = selected.ticketQuantity
    const totalPrice = selected.price
    const seats = selected.Seats.seatSelected
    
    console.log(seats)

    const transactionDetails = {
        fullName: fname,
        email: email,
        contactDetail: phoneNo,
        cardHolderName: cardName,
        cardDetail: cardNum,
        cardExpiration: expiration,
        cardCode: cvv,
        movieName: movie.name,
        cinemaName: cinema.name,
        screeningDate: "2021-08-23",
        screeningStartTime: "19:00:00",
        screeningEndTime: "20:00:00",
        selectedSeats: "A1 A2 A3",
        totalPrice: "150.00"
    }
    

    const userDetails = {
        fullName: fname,
        emailAdd: email,
        phoneNum: phoneNo,
    }

    function onPayment(event) {
        createPayment(transactionDetails).then((response) => {
            dispatch(AddUser(userDetails));
            dispatch(AddOrder(response.data));
        })
    }

    function onChangeName(event) {
        setName(event.target.value)
    }

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePhoneNo(event) {
        setPhoneNo(event.target.value)
    }

    function onChangeCardName(event) {
        setCardName(event.target.value)
    }

    function onChangeCardNum(event) {
        setCardNum(event.target.value)
    }

    function onChangeExpiration(event) {
        setExpiration(event.target.value)
    }

    function onChangeCVV(event) {
        setCVV(event.target.value)
    }


    return (
        <div>
            <Container className="whole-container">

                <Row>
                    <Col>
                        <Container className="container-body">
                            <Form>
                                <Row>
                                    <Card className="card-body">
                                        <Row className="mb-3">
                                            <h2>Contact Details</h2>
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Control placeholder="Full Name" value={fname}
                                                              onChange={onChangeName}/>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Control type="email" placeholder="Enter email" value={email}
                                                              onChange={onChangeEmail}/>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPhoneNo">
                                                <Form.Control type="text" placeholder="Phone No." value={phoneNo}
                                                              onChange={onChangePhoneNo}/>
                                            </Form.Group>
                                        </Row>

                                    </Card>
                                </Row>

                                <Row>
                                    <Card className="card-body">

                                        <Row className="mb-3">
                                            <h2>Payment Methods</h2>
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <ToggleButtonGroup
                                                    type="checkbox"
                                                    value={value}
                                                    onChange={handleChange}
                                                    className="button-group"
                                                >
                                                    <ToggleButton
                                                        id="tbg-btn-1"
                                                        value={1}
                                                        variant="outline-light"
                                                    >
                                                        <Icon.CreditCard size={36}/> Credit Card
                                                    </ToggleButton>
                                                </ToggleButtonGroup>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formCardName">
                                                <Form.Control type="text" placeholder="Card Name" required
                                                              value={cardName} onChange={onChangeCardName}/>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formCardNumber">
                                                <Form.Control type="text" placeholder="Card Number" value={cardNum}
                                                              onChange={onChangeCardNum}/>
                                            </Form.Group>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridExpiration">
                                                <FormLabel>Expiration</FormLabel>
                                                <Form.Control type="text" placeholder="MMYY" value={expiration}
                                                              onChange={onChangeExpiration}/>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formCVV">
                                                <FormLabel>CVV</FormLabel>
                                                <Form.Control type="text" placeholder="CVV" value={cvv}
                                                              onChange={onChangeCVV}/>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Link to = "/receipt">
                                              <Button variant="warning" className="btn-submit" onClick={onPayment}> 
                                                    Make Payment
                                                </Button>   
                                                </Link>                                 
                                            </Form.Group>
                                        </Row>
                                    </Card>

                                </Row>
                            </Form>
                        </Container>
                    </Col>

                    <Col>
                        <Container>
                            <Card className="card-body-right">

                                <Row className="mb-3">
                                    <h2>Booking Summary</h2>
                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        Movie Title:<br/> {movie.name}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        Cinema: {cinema.name}<br/>
                                        <span>{moment(movieDate).format("MMMM D")}, </span>
                                        <span>{moment(startTime,'HH:mm:ss').format("HH:mm")} - {moment(endTime,'HH:mm:ss').format("HH:mm")}</span>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        Number of Tickets: {quantity}<br/>
                                        Seats {seats.map((seat, idx) => (<span key={idx}> {seat} </span>))} 
                                    </Form.Group>
                                    <hr className="hr-width"/>
                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        Amount Payable
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        PHP {totalPrice}
                                    </Form.Group>

                                </Row>

                            </Card>
                        </Container>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Payment;
