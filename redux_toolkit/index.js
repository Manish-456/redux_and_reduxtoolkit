const store = require("./app/store.js");
const { iceCreamActions } = require("./features/icecream/icecreamSlice.js");
const cakeActions = require("./features/cake/cakeSlice.js").cakeActions;

console.log(store.getState())
const unsubscribe = store.subscribe(() => {})

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
// store.dispatch(iceCreamActions.ordered(4))
// store.dispatch(iceCreamActions.ordered(3))

// store.dispatch(iceCreamActions.reStocked(5))

unsubscribe();