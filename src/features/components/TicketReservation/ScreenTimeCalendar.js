import React from 'react'
import {useState, useEffect} from "react";
import './ScreenTimeCalendar.css';
import { useSelector, useDispatch} from 'react-redux';
import { getOrder, SelectScreeningTime } from '../../reducers/orderSlice';
import {getScreeningTime} from "../../apis/screeningtime";
import {selectScreenings, AddScreenings} from "../../reducers/screeningSlice";
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

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

  const [isSelected, setIsSelected]  = useState(false);
  const [screeningTime, setScreeningTime] = useState('');
 
  const fetchScreenTime = (screening) =>{
    const sTime = dateFormat(screening.movieDate,"yyyy mmm d" ) + " " + screening.startTime + " " + screening.endTime;
    if (isSelected === true && screeningTime === sTime){
      setScreeningTime("");
      setIsSelected(false);
      setSelectedScreeningTime("");
    }
    
    else{
    setScreeningTime(sTime);
    setIsSelected(true);
    setSelectedScreeningTime(screening);
    }
  }

  const [selectedScreeningTime, setSelectedScreeningTime] = useState('');
  
  const planSeats = () =>{
    if (selectedScreeningTime !== ""){
      dispatch(SelectScreeningTime({selectedScreeningTime}));
    }

  }


    return (
        <div>
            <div className='container-calendar'>
              <h1>{cinema.name}</h1>
              <h3>{movie.name}</h3>

            <div className="labels">
              <span className="available-time">Available</span>
              <span className="soldout-time">Sold Out</span>
              <span className="selected-time">Selected</span>
            </div>

                <div className='ant-calendar'>

            {screenings.map((screening) => (
            
            <span key={screening.id} className='screentime-button'>
              <button className="screeningTime-button" disabled={screening.availableSeats==='0'} onClick= {() => fetchScreenTime(screening)}>
               { dateFormat(screening.movieDate,"yyyy mmm d")+ "   " + screening.startTime + " " + screening.endTime}
              </button>
            </span>))}
                
                <div className='screenTime-output'>
                <h2 className='screenTime-title'>Selected Screening Time:</h2>
                <div className='screenTime-value'>{screeningTime}</div>
                </div>
                
                <span className='action-buttons'>
                <Link to="/"><button className="cancel-button">CANCEL</button>
                </Link>
                <Link to="/seats_selection">
                <button className="plan-button"  onClick={planSeats}>PLAN YOUR SEATS</button>
                </Link>
                
                </span>
                </div>
            </div>
        </div>
    )
}

export default ScreenTimeCalendar
