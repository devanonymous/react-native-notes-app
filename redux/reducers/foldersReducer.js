import {ADD_FOLDER, REMOVE_FOLDER} from "../actionTypes";
import uuidv1 from 'uuid/v1';

const initialState = [];

const foldersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOLDER:
            return [{id: uuidv1(),text:action.payload}, ...state];
        case REMOVE_FOLDER:
            const newState = [...state];
            newState.splice(action.payload, 1);
            return newState;
        default:
            return state
    }
};

export default foldersReducer;