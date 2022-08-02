import ACTION_CONSTANTS from "../actions/constants";
  

const initialState = {
  sample:{}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.SET_CURRENT_PAGE:
      return { ...state, sample: action.payload };
    default:
      return state;
  }
};

export default user;
