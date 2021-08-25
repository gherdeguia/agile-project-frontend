import React from 'react'
import './CinemaResult.css'
import {Card, Col, Container, Row} from "react-bootstrap";
import {SelectMovieAndCinema} from "../../reducers/orderSlice";
import {useDispatch} from "react-redux";

function CinemaResult(props) {

    const cinema = props.cinema
    const movies = cinema.movies

    const dispatch = useDispatch()

    function selectMovie(movie) {
        dispatch(SelectMovieAndCinema({movie, cinema}))
    }

    return (
        <Container fluid className="App">
            <Row>
                <Col>
                    <Card style={{width: 'inherit', display: 'inline-grid', margin: '10px'}}>
                        <Card.Header>
                            <div><h4>{cinema.name}</h4></div>
                            <p>location</p>
                            <span className="span-available-movies">Available Movies</span>
                        </Card.Header>
                        <Card.Body>
                            {movies.map((movie) => (
                                <Card key={movie.id}>
                                    <Card.Body>
                                        <div>
                                            <img className="movie-poster-cinema" src={movie.poster} alt={movie.name}/>
                                            <button className="book-ticket-btn"
                                                    onClick={() => selectMovie(movie)}>Book Ticket
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Card.Body>
                    </Card>


                </Col>
            </Row>
        </Container>
    )
}

export default CinemaResult
