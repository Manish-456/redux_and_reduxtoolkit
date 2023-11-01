const store = require("./app/store.js");
const { iceCreamActions } = require("./features/icecream/icecreamSlice.js");
const cakeActions = require("./features/cake/cakeSlice.js").cakeActions;
const {fetchUsers} = require("./features/user/userSlice.js");
console.log(store.getState())
const unsubscribe = store.subscribe(() => {console.log(`UPDATED_STATE`, store.getState())})

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(iceCreamActions.ordered(4))
// store.dispatch(iceCreamActions.ordered(3))

// store.dispatch(iceCreamActions.reStocked(5))
store.dispatch(fetchUsers());
// unsubscribe();