import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {Card, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {SelectMovieAndCinema} from "../../reducers/orderSlice";
import MovieDetails from "./MovieDetails";
import "./MovieItem.css"

function MovieItem(props) {
    const movie = props.movie
    const cinema = props.cinema

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    function showDetails() {
        setShow(true)
    }

    function selectMovie() {
        dispatch(SelectMovieAndCinema({movie, cinema}))
    }

    return (
        <div>
            <Card.Body>
                <div>
                    <img className="movie-poster-cinema" src={movie.poster} alt={movie.name}/>
                    <div className="tooltip-detail" onClick={showDetails}>
                        <div className="tooltip-span">See details</div>
                    </div>
                    <Link to="/screening_time">
                        <button className="book-ticket-btn"
                                onClick={selectMovie}>Book Ticket
                        </button>
                    </Link>
                </div>
            </Card.Body>

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
        </div>
    )
}

export default MovieItem
