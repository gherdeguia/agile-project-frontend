import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        cinema:null,
        movie:null,
        ScreeningTime:null,
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
        }
    }
})

export const {SelectMovieAndCinema, SelectScreeningTime, AddUser} = orderSlice.actions;

export const getOrder = (state) => state.order

export default orderSlice.reducer;