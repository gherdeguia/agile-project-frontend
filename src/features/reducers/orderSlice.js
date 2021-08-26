import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        cinema:null,
        movie:null,
        ScreeningTime:null,
        price:null,
        ticketQuantity:null,
        Seats:null,
        user: null
    },
    reducers: {
        SelectMovieAndCinema(state, action) {
            state.cinema = action.payload.cinema
            state.movie = action.payload.movie
        },
        SelectScreeningTime(state, action) {
            state.screeningTime = action.payload
        },
        AddUser(state, action){
            state.user = action.payload
            console.log(action);
        },
        ReserveTickets(state, action) {
            state.price = action.payload.totalPrice;
            state.ticketQuantity = action.payload.quantity;
        },
        SelectSeats(state, action) {
            state.Seats = action.payload;
        }
    }
})

export const {SelectMovieAndCinema, SelectScreeningTime, AddUser, ReserveTickets, SelectSeats} = orderSlice.actions;

export const getOrder = (state) => state.order

export default orderSlice.reducer;