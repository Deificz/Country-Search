import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "Error",
    country: null,
}

export const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers:{
        SET_COUNTRY: (state,action) => {
            state.country = action.payload
          },
        SET_STATUS: (state, action) =>{
            state.status = action.payload
        }
    }
})

export const { SET_COUNTRY, SET_STATUS } = countrySlice.actions;

export default countrySlice.reducer;