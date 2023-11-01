import { ordered as cakeOrdered } from "../cake/cakeSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    noOfIceCreams : number
}

const initialState : InitialState = {
  noOfIceCreams : 10
}

const iceCreamSlice = createSlice({
    name : "iceCream",
    initialState,
    reducers : {
        ordered : (state, action) => {
            state.noOfIceCreams -= action.payload
        },
        reStocked : (state, action : PayloadAction<number>) => {
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