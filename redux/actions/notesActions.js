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
 * @param {{text: string, title: string}} note
 * @returns {{payload: {id: number, note: object}, type: string}}
 */
export const updateNote = (id, note) => ({
    type: UPDATE_NOTE,
    payload: {id, note: note}
});