const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
 noOfCakes : 10
}

 const cakeSlice = createSlice({
    name : "cake",
    initialState,
    reducers : {
        ordered : (state) => {
          state.noOfCakes -= 1
        },
        reStocked : (state, action) => {
            state.noOfCakes += action.payload
        }
    }
});


module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
