import {ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE} from "../actionTypes";

/**
 *
 * @param {object} note
 * @returns {{payload: object, type: string}}
 */
export const addNote = (note) => ({
        type: ADD_NOTE,
        payload: note
});

/**
 * @param {number} id
 */
export const removeNote = (id) => ({
    type: REMOVE_NOTE,
    payload: id
});

/**
 * @param {number} id
 * @param {string} text
 * @returns {{payload: {id: number, text: string}, type: string}}
 */
export const updateNote = (id, text) => ({
    type: UPDATE_NOTE,
    payload: {id, text}
});