import ACTION_CONSTANTS from "./constants";

export const setApplicationStatusList = (data) => (dispatch) => {
    dispatch({
      type: ACTION_CONSTANTS.APPLICATION_STATUS_LIST,
      payload: data,
    });
  };