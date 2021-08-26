import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const screeningAdapter = createEntityAdapter();
const initialState = screeningAdapter.getInitialState({
    ids: [],
    entities: {}
});

const screeningSlice = createSlice({
    name: "screening",
    initialState: initialState,
    reducers: {
        AddScreenings(state, action) {
            screeningAdapter.addMany(state, action.payload);
        }
        
    }
})

export const {AddScreenings} = screeningSlice.actions;

export const {
    selectAll: selectScreenings,
    selectIds: selectScreeningIds,
    selectById: selectScreeningById
} = screeningAdapter.getSelectors((state) => state.screening);

export default screeningSlice.reducer;