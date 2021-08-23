import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import './MovieResult.css';
import tomato from "./tomato.png"
import popcorn from "./popcorn.png"

function MovieResult(props) {
    const movie = props.movie
    console.log(movie)

    return (
        <Container>
            <Row>
                <Col>
                    <img className="movie-poster" src={movie.poster}/>
                    <button className="see-more-detail-button">See more details</button>
                    <div>
                        <div>
                            <img src={tomato} className="review-icon"/>
                            <span className="value-reviews"> --%</span>
                        </div>
                        <span className="reviews">Critic Reviews</span>
                    </div>
                    <div>
                        <div>
                            <img src={popcorn} className="review-icon"/>
                            <span className="value-reviews"> --%</span>
                        </div>
                        <span className="reviews">Audience Reviews</span>
                    </div>
                </Col>
                <Col>
                    <h3><b>{movie.name}</b></h3>
                    <span className="span-available-cinemas">Available Cinemas</span>
                </Col>
                <Col></Col>
            </Row>
        </Container>

    )
}

export default MovieResult
