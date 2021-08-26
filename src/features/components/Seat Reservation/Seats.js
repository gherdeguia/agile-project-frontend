import React, { useState, useEffect } from 'react';
import './Seats.css';
import { useSelector, useDispatch } from "react-redux";
import { getOrder, SelectSeats } from "../../reducers/orderSlice";

function Seats() {
    const dispatch = useDispatch();
    const selected = useSelector(getOrder);
    const screening = selected.screeningTime.selectedScreeningTime;
    const seats = screening.seats;

    const [seat] = useState(seats);
    const [seatAvailable, setSeatAvailable] = useState(seat.filter(seat => seat.is_available));
    const [seatSelected, setSeatSelected] = useState([]);

    useEffect(() => {
        dispatch(SelectSeats({seatSelected}));
    });

    const onClickData = (seat) =>{
        if (seat.is_available) {
            if (!seatSelected.includes(seat.seatNumber)) {
                setSeatSelected(seatSelected.concat(seat.seatNumber))
                setSeatAvailable(seatAvailable.filter(seatAvailable => seatAvailable.seatNumber !== seat.seatNumber))
            } else {
                setSeatSelected(seatSelected.filter(seatSelected => seatSelected !== seat.seatNumber))
                setSeatAvailable(seatAvailable.concat(seat))
            }
        }
        
    }

    const hasSelected = seatSelected.length > 0 ? "hasPicked" : "blank";
    return (
        <div className="seat-container">
            <div className="grid">
                {seat.map(row =>
                    <div
                        className={!row.is_available ? 'sold_out' : seatSelected.includes(row.seatNumber) ? 'selected' : 'available'}
                        key={row.id} onClick={() => onClickData(row)}>{row.seatNumber}
                    </div>)
                }
            </div>
            <br></br>
            <div className={`selected_seats_output ${hasSelected}`}>
                Selected Seats: ({seatSelected.length})
                <ul>
                    {seatSelected.map(seat => <span key={seat} >{seat} </span>)}
                </ul>
            </div>
        </div>
    )
}

export default Seats;