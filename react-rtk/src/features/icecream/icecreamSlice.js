import { ordered as cakeOrdered } from "../cake/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfIceCreams : 10
}

const iceCreamSlice = createSlice({
    name : "iceCream",
    initialState,
    reducers : {
        ordered : (state, action) => {
            state.noOfIceCreams -= action.payload
        },
        reStocked : (state, action) => {
            state.noOfIceCreams += action.payload
        }      
    },
    // extraReducers : {
    //     ["cake/ordered"] : (state) => {
    //         state.noOfIceCreams --;
    //     }
    // }

    extraReducers : (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.noOfIceCreams --;
        })
    }
});

export default iceCreamSlice.reducer;
export const {ordered, reStocked } = iceCreamSlice.actions;