import uuidv1 from "uuid/v1";
import {ADD_NOTE, REMOVE_NOTE} from "../actionTypes";

const initialState = [];

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [{id: uuidv1(),text:action.payload}, ...state];
        case REMOVE_NOTE:
            const newState = [...state];
            newState.splice(action.payload, 1);
            return newState;
        default:
            return state
    }
};

export default notesReducer;