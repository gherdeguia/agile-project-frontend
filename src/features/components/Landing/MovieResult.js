import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import './MovieResult.css';
import tomato from "./tomato.png"
import popcorn from "./popcorn.png"

function MovieResult(props) {
    const movie = props.movie
    const cinemas = props.cinemas;

    return (
        <Container>
            <Row>
                <Col>
                    <img className="movie-poster" src={movie.poster} alt={movie.poster}/>
                    <button className="see-more-detail-button">See more details</button>
                    <div>
                        <div>
                            <img src={tomato} className="review-icon" alt={tomato}/>
                            <span className="value-reviews"> --%</span>
                        </div>
                        <span className="reviews">Critic Reviews</span>
                    </div>
                    <div>
                        <div>
                            <img src={popcorn} className="review-icon" alt={popcorn}/>
                            <span className="value-reviews"> --%</span>
                        </div>
                        <span className="reviews">Audience Reviews</span>
                    </div>
                </Col>
                <Col>
                    <h3><b>{movie.name}</b></h3>
                    <span className="span-available-cinemas">Available Cinemas</span>
                    {
                        cinemas.map((cinema) => (
                            <div key={cinema.id} className="card-cinema">
                                <div><h4><b>{cinema.name}</b></h4></div>
                                <p>location</p>
                            </div>
                        ))
                    }
                </Col>
                <Col></Col>
            </Row>
        </Container>

    )
}

export default MovieResult
