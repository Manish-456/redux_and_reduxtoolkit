const { produce } = require("immer");
const { createStore, applyMiddleware } = require("redux");
const { log } = console;
const {createLogger} = require('redux-logger');

const logger = createLogger();
const UPDATE_STREET = "UPDATE_STREET";


const initialState = {
  name: "YOUR_NAME",
  address: {
    street: "YOUR_STREET",
    city: "YOUR_CITY",
    state: "YOUR_STATE",
  },
};

const updateStreet = (street) => ({
  type: UPDATE_STREET,
  payload: street,
});

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

const store = createStore(reducers, applyMiddleware(logger));
log("INITIAL_STATE", store.getState());

const unsubscribe = store.subscribe(() =>
  log(`UPDATED_STATE`, store.getState())
);

store.dispatch(updateStreet("423 Main ST"));

unsubscribe();

// MIDDLEWARE
/*
- Middleware is the suggested way to extend Redux with custom functionality.
- Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
- Use middleware for logging, crash reporting
*/
