import ACTION_CONSTANTS from "../actions/constants";

const userData = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

const initialState = {
  user: userData,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.USER_DETAILS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default user;
