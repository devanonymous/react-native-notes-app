import {ADD_FOLDER, REMOVE_FOLDER, UPDATE_FOLDER} from "../actionTypes";
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
        case UPDATE_FOLDER:
            const updateFolderState = [...state];
            updateFolderState[action.payload.id].text = action.payload.folderName;
            return updateFolderState;
        default:
            return state
    }
};

export default foldersReducer;