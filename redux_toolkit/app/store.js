const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice.js");
const iceCreamReducer = require("../features/icecream/icecreamSlice.js");

const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;