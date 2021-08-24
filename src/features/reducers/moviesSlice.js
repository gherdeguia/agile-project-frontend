import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const moviesAdapter = createEntityAdapter();
const initialState = moviesAdapter.getInitialState({
    ids: [],
    entities: {}
});

const movieSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        AddMovies(state, action) {
            moviesAdapter.addMany(state, action.payload);
        }
    }
})

export const {AddMovies} = movieSlice.actions;

export const {
    selectAll: selectMovies,
    selectIds: selectMovieIds,
    selectById: selectMovieById
} = moviesAdapter.getSelectors((state) => state.movie);

export default movieSlice.reducer;