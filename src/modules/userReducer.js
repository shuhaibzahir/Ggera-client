import ACTION_CONSTANTS from "../actions/constants";

const userData = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

const initialState = {
  user: userData,
  otpSend:false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.USER_DETAILS:
      return { ...state, user: action.payload };
    case ACTION_CONSTANTS.USER_OTP_SEND:
      return { ...state, otpSend: action.payload };
    default:
      return state;
  }
};

export default user;
