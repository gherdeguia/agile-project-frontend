import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import './MovieResult.css';
import tomato from "./tomato.png"
import popcorn from "./popcorn.png"

function MovieResult(props) {
    const movie = props.movie
    const cinemas = props.cinemas;

    const criticsRating = movie.criticsRating ? movie.criticsRating : "--"
    const audienceRating = movie.audienceRating ? movie.audienceRating : "--"

    return (
        <Container>
            <Row>
                <div className="movie-info">
                    <img className="movie-poster" src={movie.poster} alt={movie.name}/>
                    <button className="see-more-detail-button">See more details</button>
                    <div>
                        <div>
                            <img src={tomato} className="review-icon" alt={tomato}/>
                            <span className="value-reviews"> {criticsRating}%</span>
                        </div>
                        <span className="reviews">Critic Reviews</span>
                    </div>
                    <div>
                        <div>
                            <img src={popcorn} className="review-icon" alt={popcorn}/>
                            <span className="value-reviews"> {audienceRating}%</span>
                        </div>
                        <span className="reviews">Audience Reviews</span>
                    </div>
                </div>
                <Col className="col-available-cinemas">
                    <div>
                    <h3><b>{movie.name}</b></h3>
                    <span className="span-available-cinemas">Available Cinemas</span>
                    </div>
                    {
                        cinemas.map((cinema) => (
                            <div key={cinema.id} className="card-cinema">
                                <div><h4><b>{cinema.name}</b></h4></div>
                                <p>location</p>
                            </div>
                        ))
                    }
                </Col>
            </Row>
        </Container>

    )
}

export default MovieResult
