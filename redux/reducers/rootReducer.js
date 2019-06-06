import { combineReducers } from "redux";
import foldersReducer from "./foldersReducer";
import notesReducer from "./notesReducer";
import {authReducer} from "./authReducer";

export const rootReducer = combineReducers({
    folders: foldersReducer,
    notes: notesReducer,
    auth: authReducer
});