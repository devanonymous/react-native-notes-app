import {ADD_FOLDER, REMOVE_FOLDER} from "../actionTypes";

/**
 * @param {string} name
 */
export const addFolder = (name) => {
    return {
        type: ADD_FOLDER,
        payload: name
    }
};

/**
 * @param {number} id
 */
export const removeFolder = (id) => ({
        type: REMOVE_FOLDER,
        payload: id
    });