import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const trendingAdapter = createEntityAdapter();
const initialState = trendingAdapter.getInitialState({
    ids: [],
    entities: {}
});

const trendingSlice = createSlice({
    name: "trending",
    initialState: initialState,
    reducers: {
        AddTrendings(state, action) {
            trendingAdapter.addMany(state, action.payload);
        }
    }
})

export const {AddTrendings} = trendingSlice.actions;

export const {
    selectAll: selectTrendings,
    selectIds: selectTrendingIds,
    selectById: selectTrendingById
} = trendingAdapter.getSelectors((state) => state.trending);

export default trendingSlice.reducer;