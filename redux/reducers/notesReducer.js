import {ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE} from "../actionTypes";

const initialState = [];

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [action.payload, ...state];
        case REMOVE_NOTE:
            const newState = [...state];
            newState.splice(action.payload, 1);
            return newState;
        case UPDATE_NOTE:
            const updateNoteState = [...state];
            updateNoteState[action.payload.id] = action.payload.note;
            return updateNoteState;
        default:
            return state
    }
};

export default notesReducer;