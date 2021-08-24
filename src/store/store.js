import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "../features/reducers/moviesSlice";
import cinemaReducer from "../features/reducers/cinemaSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        cinema: cinemaReducer
    }
});

export default store;