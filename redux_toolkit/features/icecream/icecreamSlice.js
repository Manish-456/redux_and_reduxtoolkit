const { cakeActions } = require("../cake/cakeSlice");
const createSlice = require("@reduxjs/toolkit").createSlice;

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
        builder.addCase(cakeActions.ordered, (state) => {
            state.noOfIceCreams --;
        })
    }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;