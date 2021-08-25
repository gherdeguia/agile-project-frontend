import React from 'react'
import { Calendar, Badge } from 'antd';
import { Button} from 'antd';
import {useState} from "react";
import './ScreenTimeCalendar.css'
import moment from 'moment';
//For value
//For data in each screening date
function ScreenTimeCalendar() {

  const [btnBackground, setBackground]  = useState('#FF7700');

  const setStyle = (btnBackground) => {
    setBackground(btnBackground);
  }

//For Calendar 
function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: '', content: 
          <span className='screentime-button'>
          <Button className= 'ant-button'type="primary" shape="round" size={'small'} style={{marginRight:"0px", background:{btnBackground}, border:"none", fontSize: "12px"}}
          onClick= {() => setStyle('#BD4F12')}>
            9:00 AM - 10:00 AM 
          </Button></span> },
        ];
        break;
      default:
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
              <h1>Cinema Name</h1>
              <h3>Movie Name</h3>

            <div className="labels">
              <span className="available-time">Available</span>
              <span className="soldout-time">Sold Out</span>
              <span className="selected-time">Selected</span>
            </div>

                <div className='ant-calendar'>
                <Calendar className='calendar' dateCellRender={dateCellRender} />,
                <span className='action-buttons'><button className="cancel-button">CANCEL</button>
                <button className="plan-button">PLAN YOUR SEATS</button>
                </span>
                </div>
            </div>
        </div>
    )
}

export default ScreenTimeCalendar
