const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
 const res = await axios.get(URL);
    return res.data.map((user) => user.id);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
