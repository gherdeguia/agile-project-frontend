import React from 'react'
import { Calendar, Badge } from 'antd';
import {useState} from "react";
import './ScreenTimeCalendar.css'

function ScreenTimeCalendar() {

  const [isSelected, setIsSelected]  = useState(false);
  const [screeningTime, setScreeningTime] = useState('');
  
  const cinemaName = "CinemaSample";
  const movieName ="MovieSample";
  const screenTime = '9:00 AM - 10:00 AM';
  const screenTime2 = '11:00 AM - 12:00 PM';
  const availableSeat = 1;
  // const screenTimeList = [{startDate:"9:00 AM", endDate:"10:00 AM", availableSeat:"23"},
  //                         {startDate:"11:00 AM", endDate:"12:00 PM", availableSeat:"0"},
  //                         {startDate:"1:00 PM", endDate:"2:00 PM", availableSeat:"23"}];



  const getScreenTime = (value, screenTime) =>{
     if (value.month() === 7){
       var monthEquivalent = "AUG";
     }
     if (value.month() === 8){
      var monthEquivalent = "SEP";
    }
    if (value.month() === 9){
      var monthEquivalent = "OCT";
    }

    if (isSelected===true){
      setScreeningTime("");
    }
    else{
     setScreeningTime(monthEquivalent + '  ' + `${value.date()}` + '  |  ' + screenTime)
    }
     setIsSelected(!isSelected);
  }

function getListData(value) {
    let listData;
    if (value.month() === 7){
      switch (value.date()) {
         case 10:
          listData = [
          { type: '', content: 
          <span className='screentime-button'>
          <button className={isSelected ? "selectedScreenTime":"screeningTime-button"} disabled={availableSeat===0} onClick= {() => getScreenTime(value, screenTime)}>
           {screenTime}
          </button></span> },
        ];
        break;
        default:
    }
  }
    return listData || [];
  }

  
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
  
    return (
        <div>
            <div className='container-calendar'>
              <h1>{cinemaName}</h1>
              <h3>{movieName}</h3>

            <div className="labels">
              <span className="available-time">Available</span>
              <span className="soldout-time">Sold Out</span>
              <span className="selected-time">Selected</span>
            </div>

      

                <div className='ant-calendar'>
                  
                <Calendar className='calendar' dateCellRender={dateCellRender} />
                <div className='screenTime-output'>
                <h2>Selected Screening Time:</h2>
                <div className='screenTime-value'>{screeningTime}</div>
                </div>
                <span className='action-buttons'><button className="cancel-button">CANCEL</button>
                <button className="plan-button">PLAN YOUR SEATS</button>
                
                </span>
                </div>
            </div>
        </div>
    )
}

export default ScreenTimeCalendar
