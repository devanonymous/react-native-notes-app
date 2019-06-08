import {LOG_IN, LOG_OUT} from "../actionTypes";

export const logIn = () => ({
    type: LOG_IN,
    payload: true
});

export const logOut = () => ({
    type: LOG_OUT,
    payload: false
});