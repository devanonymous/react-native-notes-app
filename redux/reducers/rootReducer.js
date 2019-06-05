import { combineReducers } from "redux";
import foldersReducer from "./foldersReducer";
import notesReducer from "./notesReducer";

export const rootReducer = combineReducers({
    folders: foldersReducer,
    notes: notesReducer
});