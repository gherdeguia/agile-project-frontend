import React, {useState} from 'react'
import {Col, Container, Modal, Row} from "react-bootstrap";
import './MovieResult.css';
import tomato from "./tomato.png"
import popcorn from "./popcorn.png"
import {SelectMovieAndCinema} from "../../reducers/orderSlice";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import MovieDetails from "./MovieDetails";


function MovieResult(props) {
    const movie = props.movie
    const cinemas = props.cinemas;
    const dispatch = useDispatch();
    const criticsRating = movie.criticsRating ? movie.criticsRating : "--"
    const audienceRating = movie.audienceRating ? movie.audienceRating : "--"
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    function selectCinema(cinema) {
        dispatch(SelectMovieAndCinema({movie, cinema}))
    }

    return (
        <Container>
            <Row>
                <div className="movie-info">
                    <img className="movie-poster" src={movie.poster} alt={movie.name}/>
                    <button className="see-more-detail-button" onClick={handleShow}>See more details</button>
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
                                <div className="card-cinema" onClick={() => selectCinema(cinema)}>
                                    <div><h4><b>{cinema.name}</b></h4></div>
                                </div>
                            </Link>
                        ))
                    }
                </Col>
            </Row>

            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Body className="show-grid">
                        <MovieDetails movie={movie}/>

                    </Modal.Body>
                </Modal.Body>
            </Modal>


        </Container>

    )
}

export default MovieResult
