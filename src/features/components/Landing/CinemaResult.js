import React from 'react'
import './CinemaResult.css'
import {Card, Col, Container, Row} from "react-bootstrap";

function CinemaResult(props) {

    const cinema = props.cinema
    const movies = cinema.movies

    return (
        <Container fluid className="App">
            <Row></Row>
            <Row>
                <Col>
                    <Card style={{width: '15rem', display: 'inline-grid', margin: '10px'}}>
                        <Card.Header>
                            <div><h4>{cinema.name}</h4></div>
                            <p>location</p>
                            <span className="span-available-movies">Available Movies</span>
                        </Card.Header>
                        <Card.Body>
                            {movies.map((movie) => (
                                <div key={movie.id}>
                                    <img className="movie-poster-cinema" src={movie.poster} alt={movie.poster}/>
                                    <button className="book-ticket-btn" >Book Ticket</button>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>


                </Col>
            </Row>
        </Container>
    )
}

export default CinemaResult
