import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "../features/reducers/moviesSlice";
import cinemaReducer from "../features/reducers/cinemaSlice";
import trendingReducer from "../features/reducers/trendingSlice";
import orderReducer from "../features/reducers/orderSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        cinema: cinemaReducer,
        trending: trendingReducer,
        order: orderReducer
    }
});

export default store;