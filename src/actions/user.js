import ACTION_CONSTANTS from "./constants";

export const setUserDetails = (data) => (dispatch) => {
    dispatch({
      type: ACTION_CONSTANTS.USER_DETAILS,
      payload: data,
    });
  };
  export const setSendUSerOtp = (data) => (dispatch) => {
    dispatch({
      type: ACTION_CONSTANTS.USER_OTP_SEND,
      payload: data,
    });
  };