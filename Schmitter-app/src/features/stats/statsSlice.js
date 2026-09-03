import { createSlice } from "@reduxjs/toolkit";

const statsSlice = createSlice({
    name: "stats",
    initialState: {
        followers: 10,
        following: 100
    },
    reducers: {
        changeStats: (state, action) => {
            const { statsType, sum } = action.payload;
            const nextValue = state[statsType] + sum;
            state[statsType] = nextValue < 0 ? 0 : nextValue;
        },
    },
});

export const { changeStats } = statsSlice.actions;
export default statsSlice.reducer;

