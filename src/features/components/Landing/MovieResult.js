import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import './MovieResult.css';
import tomato from "./tomato.png"
import popcorn from "./popcorn.png"
import {SelectMovieAndCinema} from "../../reducers/orderSlice";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

function MovieResult(props) {
    const movie = props.movie
    const cinemas = props.cinemas;
    const dispatch = useDispatch();
    const criticsRating = movie.criticsRating ? movie.criticsRating : "--"
    const audienceRating = movie.audienceRating ? movie.audienceRating : "--"

    function selectCinema(cinema) {
        dispatch(SelectMovieAndCinema({movie, cinema}))
    }

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
                            <Link key={cinema.id} to="/screening_time">
                                <div  className="card-cinema" onClick={() => selectCinema(cinema)}>
                                    <div><h4><b>{cinema.name}</b></h4></div>
                                </div>
                            </Link>
                        ))
                    }
                </Col>
            </Row>
        </Container>

    )
}

export default MovieResult
