import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "../features/reducers/moviesSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer
    }
});

export default store;