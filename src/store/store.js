import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "../features/reducers/moviesSlice";
import cinemaReducer from "../features/reducers/cinemaSlice";
import trendingReducer from "../features/reducers/trendingSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        cinema: cinemaReducer,
        trending: trendingReducer
    }
});

export default store;