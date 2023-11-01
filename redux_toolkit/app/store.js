const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice.js");
const iceCreamReducer = require("../features/icecream/icecreamSlice.js");
const userReducer = require("../features/user/userSlice.js");

const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user : userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

module.exports = store;
