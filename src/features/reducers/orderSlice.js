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
        user: null,
        payment: null
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
        },
        ReserveTickets(state, action) {
            state.price = action.payload.totalPrice;
            state.ticketQuantity = action.payload.quantity;
        },
        SelectSeats(state, action) {
            state.Seats = action.payload;
        },
        AddOrder(state, action){
            state.payment = action.payload;
        }
    }
})

export const {SelectMovieAndCinema, SelectScreeningTime, AddUser, ReserveTickets, SelectSeats, AddOrder} = orderSlice.actions;

export const getOrder = (state) => state.order

export const getPayment = (state) => state.order.payment

export default orderSlice.reducer;