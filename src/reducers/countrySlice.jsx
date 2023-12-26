import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const countrySlice = createSlice({
    name: "country",
    reducers:{
        decrement: (state) => {
            state.value -= 1
          },
    }
})

export const { decrement } = countrySlice.actions;

export default countrySlice.reducer;