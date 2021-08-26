import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import dateFormat from "dateformat";
import tomato from "./tomato.png";
import popcorn from "./popcorn.png";

function MovieDetails(props) {
    const movie = props.movie
    const runningTime = movie.runningTime.split(':');
    return (

        <Container style={{margin: "0px"}}>
            <Row>
                <Col xs={12} md={8}>
                    <div>
                        <div className="movie-title-modal"><b>{movie.name}</b></div>
                        <div><span>{movie.rated}</span>
                            <span
                                style={{marginLeft: "30px"}}>{runningTime[0] + " hr " + runningTime[1] + " min"}</span>
                        </div>
                    </div>
                    <div className="details-movie-modal">
                        <div className="movie-synopsis-modal"><p>{movie.synopsis}</p></div>
                        <b>
                            <div>Directed By: {movie.directedBy}</div>
                            <div>Genre: {movie.genre}</div>
                            <div>Release Date: {dateFormat(movie.releaseDate, "mmm dd, yyyy")}</div>
                        </b>
                    </div>
                    <div className="cast-and-crews-modal">
                        <div><b>CAST & CREWS</b></div>
                        <div>{movie.castAndCrews}</div>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div>
                        <div><img src={movie.poster}
                                  style={{width: "-webkit-fill-available", margin: "10px"}}
                                  alt={movie.name}/>
                        </div>
                        <div>
                            <Container style={{margin: "0px"}}>
                                <Row>
                                    <Col style={{padding: "0px"}}>
                                        <div>
                                            <div>
                                                <img src={tomato} className="review-icon" alt={tomato}/>
                                                {movie.criticsRating} %
                                            </div>
                                            <span className="reviews-modal">Critic Reviews</span>
                                        </div>
                                    </Col>
                                    <Col style={{padding: "0px"}}>
                                        <div>
                                            <div>
                                                <img src={popcorn} className="review-icon"
                                                     alt={popcorn}/>
                                                {movie.audienceRating} %
                                            </div>
                                            <span className="reviews-modal">Audience Reviews</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Col>
            </Row>
            <div>
            </div>
        </Container>
    )
}

export default MovieDetails
