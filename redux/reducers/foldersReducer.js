import {ADD_FOLDER, REMOVE_FOLDER} from "../actionTypes";

const initialState = [{text: 'folder1'}, {text: 'folder2'}, {text: 'folder3'},{text: 'folder4'},{text: 'folder5'}];

const foldersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOLDER:
            return [{text:action.payload}, ...state];
        case REMOVE_FOLDER:
            return state.filter((item, index) => {
                if (index === action.payload) {
                    return false
                }
            });
        default:
            return state
    }
};

export default foldersReducer;