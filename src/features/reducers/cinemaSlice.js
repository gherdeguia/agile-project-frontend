import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const cinemasAdapter = createEntityAdapter();
const initialState = cinemasAdapter.getInitialState({
    ids: [],
    entities: {}
});

const cinemaSlice = createSlice({
    name: "cinemas",
    initialState: initialState,
    reducers: {
        AddCinemas(state, action) {
            cinemasAdapter.addMany(state, action.payload);
        }
    }
})

export const {AddCinemas} = cinemaSlice.actions;

export const {
    selectAll: selectCinemas,
    selectIds: selectCinemaIds,
    selectById: selectCinemaById
} = cinemasAdapter.getSelectors((state) => state.cinema);

export default cinemaSlice.reducer;