import React from "react";

import {
  Card,
  Form,
  Row,
  Col,
  Container,
  FormLabel,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Modal
} from "react-bootstrap";
import "./payment.css";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import {useDispatch} from "react-redux";
import { AddUser } from "../../reducers/orderSlice";
import { createPayment } from "../../apis/payment";

function Payment() {
  const [value, setValue] = useState([1, 3]);
  const handleChange = (val) => setValue(val);
  const [fname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNum, setCardNum] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCVV] = useState('');
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const transactionDetails = {
    fullName: fname,
    email: email,
    contactDetail: phoneNo,
    cardHolderName: cardName,
    cardDetail: cardNum,
    cardExpiration: expiration,
    cardCode: cvv, 
    movieName: "Avengers",
    cinemaName: "SM Lipa",
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

  function onPayment(event){
    // console.log("full name: ",fname)
    // console.log("email: ",email)
    // console.log("Phone number: ",phoneNo)
    // console.log("card name: ",cardName)
    // console.log("card number: ",cardNum)
    // console.log("expiration: ",expiration)
    // console.log("cvv: ",cvv)
    if(fname)
    handleShow();
    createPayment(transactionDetails).then((response)=>{
      dispatch(AddUser(userDetails));
    })
    
  } 
  
  function onChangeName(event){
    setName(event.target.value)
  }

  function onChangeEmail(event){
    setEmail(event.target.value)
  }

  function onChangePhoneNo(event){
    setPhoneNo(event.target.value)
  }

  function onChangeCardName(event){
    setCardName(event.target.value)
  }

  function onChangeCardNum(event){
    setCardNum(event.target.value)
  }

  function onChangeExpiration(event){
    setExpiration(event.target.value)
  }

  function onChangeCVV(event){
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
                    <Form.Control placeholder="Full Name" value={fname} onChange={onChangeName}/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={onChangeEmail}/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPhoneNo">
                    <Form.Control type="text" placeholder="Phone No."  value={phoneNo} onChange={onChangePhoneNo}/>
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
                        <Icon.CreditCard size={36} /> Credit Card
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formCardName">
                    <Form.Control type="text" placeholder="Card Name" required value={cardName} onChange={onChangeCardName}/>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formCardNumber">
                    <Form.Control type="text" placeholder="Card Number" value={cardNum} onChange={onChangeCardNum}/>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridExpiration">
                    <FormLabel>Expiration</FormLabel>
                    <Form.Control type="text" placeholder="MM/YY" value={expiration} onChange={onChangeExpiration} />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formCVV">
                    <FormLabel>CVV</FormLabel>
                    <Form.Control type="text" placeholder="CVV" value={cvv} onChange={onChangeCVV}/>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Button variant="warning" className="btn-submit" onClick={onPayment} type="submit">
                      Make Payment
                    </Button>
                  </Form.Group>
                </Row>
            </Card>
           
        </Row>
     </Form>
    </Container>
      </Col>

      <Col>
      <Container className="container-body">
         <Card className="card-body">
              
                <Row className="mb-3">
                  <h2>Booking Summary</h2>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    Movie Title
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    Cinema Location
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    Number of Tickets
                  </Form.Group>
                    <hr className="hr-width"/>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    Amount Payable
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    PHP 0.00
                  </Form.Group>
                   
                </Row>
              
            </Card>
        </Container>
      </Col>
    </Row> 
    
    </Container>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Information</Modal.Title>
        </Modal.Header>
        <Modal.Body><h3>Hi {fname}!, Your purchase was successful! <Icon.CheckCircle size={36}/> </h3></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" href="/">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Payment;
