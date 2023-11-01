const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");

const URL = "url";

const FETCHED_USER_REQUESTED = "FETCHED_USER_REQUESTED";
const FETCHED_USER_SUCCEEDED = "FETCHED_USER_SUCCEEDED";
const FETCHED_USER_FAILED = "FETCHED_USER_FAILED";

const initialState = {
  isLoading: false,
  users: [],
  error: "",
};

function fetchUserRequest() {
  return {
    type: FETCHED_USER_REQUESTED,
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCHED_USER_SUCCEEDED,
    payload: users,
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCHED_USER_FAILED,
    payload: error,
  };
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_USER_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case FETCHED_USER_SUCCEEDED:
      return {
        isLoading: false,
        users: action.payload,
        error: "",
      };

    case FETCHED_USER_FAILED:
      return {
        isLoading: false,
        users: [],
        error: action.payload,
      };

      default :
      return state
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get(URL)
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => dispatch(fetchUsersFailure(error.message)))
      .finally(() => unsubscribe());
  };
};

const store = createStore(reducers, applyMiddleware(thunk));
const unsubscribe = store.subscribe(() => console.log(`INITIAL_STATE`, store.getState()));

store.dispatch(fetchUsers());

