import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "../features/reducers/moviesSlice";
import cinemaReducer from "../features/reducers/cinemaSlice";
import trendingReducer from "../features/reducers/trendingSlice";
import orderReducer from "../features/reducers/orderSlice";
import screenReducer from "../features/reducers/screeningSlice";
const store = configureStore({
    reducer: {
        movie: movieReducer,
        cinema: cinemaReducer,
        trending: trendingReducer,
        order: orderReducer,
        screening: screenReducer
    }
});

export default store;