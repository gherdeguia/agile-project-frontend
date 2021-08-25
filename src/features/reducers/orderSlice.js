import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        cinema:null,
        movie:null,
        ScreeningTime:null,
        Seats:null
    },
    reducers: {
        SelectMovieAndCinema(state, action) {
            state.cinema = action.payload.cinema
            state.movie = action.payload.movie
        }
    }
})

export const {SelectMovieAndCinema} = orderSlice.actions;

export const getOrder = (state) => state.order

export default orderSlice.reducer;