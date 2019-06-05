/**
 * @param {string} name
 */
import {ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE} from "../actionTypes";

export const addNote = (name) => ({
        type: ADD_NOTE,
        payload: name
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