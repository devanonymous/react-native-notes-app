import {LOG_IN} from "../actionTypes";

const initialState = {
    isLogined: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case LOG_IN:
          return {...state, isLogined: action.payload};
      default:
          return state
  }
};