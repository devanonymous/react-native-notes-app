import {ADD_FOLDER, REMOVE_FOLDER, UPDATE_FOLDER} from "../actionTypes";

/**
 * @param {string} name
 */
export const addFolder = (name) => ({
    type: ADD_FOLDER,
    payload: name
});


/**
 * @param {number} id
 * @param {string} folderName
 * @returns {{payload: {id: number, folderName: string}, type: string}}
 */
export const updateFolder = (id, folderName) => ({
    type: UPDATE_FOLDER,
    payload: {id, folderName: folderName}
});


/**
 * @param {number} id
 */
export const removeFolder = (id) => ({
    type: REMOVE_FOLDER,
    payload: id
});