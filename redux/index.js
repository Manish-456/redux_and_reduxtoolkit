const {createStore, bindActionCreators, combineReducers} = require("redux");

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

const orderIcecream = (qty = 1) => ({
  type: ICECREAM_ORDERED,
  payload: qty,
});

const restockIcecream = (qty = 1) => ({
  type: ICECREAM_RESTOCKED,
  payload: qty,
});

const initialCakeState = {
  noOfCakes: 10,
};

const initialIcecreamState = {
  noOfIcecreams: 10,
};

// Reducers

/*
- Specify how the app's state changes in response to actions sent to the store
-Function that accepts state and actions as arguments, and returns the next state of the application
- (prevState, action) => newState
*/

const cakeReducers = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const iceCreamReducers = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1,
      };

    case ICECREAM_RESTOCKED:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams + action.payload,
      };

      case CAKE_ORDERED :
        return {
          ...state,
          noOfIcecreams : state.noOfIcecreams - 1
        }

    default:
      return state;
  }
};

// REDUX STORE
/*
- One store for the entire application

Responsibilites -
- Holds application state
- Allows access to state via getState()
- Allows state to be updated via dispatch(action)
- Registers listeners via subscribe(listener)
- Handles unregistering of listeners via the function returned by subscribe(listener)
*/

const rootReducer = combineReducers({
  cake: cakeReducers,
  iceCream: iceCreamReducers,
});
const store = createStore(rootReducer);
console.log(`INITIAL_STATE `, store.getState());

const unsubscribe = store.subscribe(() =>
  console.log(`UPDATED_STATE`, store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreators(
  { orderCake, restockCake, restockIcecream, orderIcecream },
  store.dispatch
);
// bindActionCreator is not really necessary.

actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockCake(5);

actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
unsubscribe();
