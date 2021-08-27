import React from 'react'
import {useState, useEffect} from "react";
import './ScreenTimeCalendar.css';
import {useSelector, useDispatch} from 'react-redux';
import {getOrder, SelectScreeningTime} from '../../reducers/orderSlice';
import {getScreeningTime} from "../../apis/screeningtime";
import {selectScreenings, AddScreenings} from "../../reducers/screeningSlice";
import {Link} from 'react-router-dom';
import dateFormat from 'dateformat';
import moment from 'moment';
import Header from '../Header/Header';


function ScreenTimeCalendar() {
    const selected = useSelector(getOrder);
    const movie = selected.movie;
    const cinema = selected.cinema;

    const screenings = useSelector(selectScreenings);
    const dispatch = useDispatch();

    useEffect(() => {
        getScreeningTime(cinema.id, movie.name).then((response) => {
            dispatch(AddScreenings(response.data));
        })
    })

    const [isSelected, setIsSelected] = useState(false);
    const [screeningTime, setScreeningTime] = useState('');


    const fetchScreenTime = (screening) => {
        const sTime = dateFormat(screening.movieDate, "yyyy mmm d") + " " + moment(screening.startTime, 'HH:mm:ss').format("hh:mm A") + " - " + moment(screening.endTime, 'HH:mm:ss').format("hh:mm A");
        if (isSelected === true && screeningTime === sTime) {
            setScreeningTime("");
            setIsSelected(false);
            setSelectedScreeningTime("");
        } else {
            setScreeningTime(sTime);
            setIsSelected(true);
            setSelectedScreeningTime(screening);
        }
    }

    const [selectedScreeningTime, setSelectedScreeningTime] = useState('');

    const planSeats = () => {
        if (selectedScreeningTime !== "") {
            dispatch(SelectScreeningTime({selectedScreeningTime}));
        }
    }

    return (
        <div>
            <Header/>
            <div className='container-calendar'>
                <h1 className='cinema-name'>{cinema.name}</h1>
                <h3 className='movie-name'>{movie.name}</h3>

                <div className='screenTime-output'>
                    <h2 className='screenTime-title'>Selected Screening Time:</h2>
                    <div className='screenTime-value'>{screeningTime}</div>
                </div>

                <div className="labels">
                    <span className="available-time">Available</span>
                    <span className="soldout-time">Sold Out</span>
                    <span className="selected-time">Selected</span>
                </div>

                <div className='item-container' style={{zoom: '0.75'}}>
                    {screenings.map((screening) => (
                        <div key={screening.id} className='screentime-button'>
                            <button className="screeningTime-button" disabled={screening.availableSeats === '0'}
                                    onClick={() => fetchScreenTime(screening)}>
                                <div className='movie-date'>{dateFormat(screening.movieDate, "yyyy mmm d")} </div>
                                <hr className='break-line'></hr>
                                <div
                                    className='movie-time'>{moment(screening.startTime, 'HH:mm:ss').format("hh:mm A") + " - " + moment(screening.endTime, 'HH:mm:ss').format("hh:mm A")}</div>
                            </button>
                        </div>))}
                </div>

                <div className='action-buttons'>
                    <Link to="/">
                        <button className="cancel-button">CANCEL</button>
                    </Link>
                    <Link to="/seats_selection">
                        <button className="plan-button" onClick={planSeats} disabled={selectedScreeningTime === ''}>PLAN
                            YOUR SEATS
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ScreenTimeCalendar
