import React from 'react'
import './CinemaResult.css'
import {Card, Col, Container, Row} from "react-bootstrap";
import MovieItem from "./MovieItem";

function CinemaResult(props) {

    const cinema = props.cinema
    const movies = cinema.movies

    return (
        <Container fluid className="App">
            <Row>
                <Col>
                    <Card style={{width: 'inherit', display: 'inline-grid', margin: '10px'}}>
                        <Card.Header>
                            <div><h4>{cinema.name}</h4></div>
                            <span className="span-available-movies">Available Movies</span>
                        </Card.Header>
                        <Card.Body>
                            {movies.map((movie) => (
                                <Card key={movie.id}>
                                    <MovieItem movie={movie} cinema={cinema}/>
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
