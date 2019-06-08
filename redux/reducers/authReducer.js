import {LOG_IN, LOG_OUT} from "../actionTypes";

const initialState = {
    isLogined: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {...state, isLogined: action.payload};
        case LOG_OUT:
            return {...state, isLogined: action.payload};
        default:
            return state
    }
};