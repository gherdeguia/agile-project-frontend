import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        cinema:null,
        movie:null,
        screeningTime:null,
        seats:null
    },
    reducers: {
        SelectMovieAndCinema(state, action) {
            state.cinema = action.payload.cinema
            state.movie = action.payload.movie
        },
        SelectScreeningTime(state, action) {
            state.screeningTime = action.payload
        }

    }
})

export const {SelectMovieAndCinema, SelectScreeningTime} = orderSlice.actions;

export const getOrder = (state) => state.order

export default orderSlice.reducer;