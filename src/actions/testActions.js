import {createAction} from 'redux-actions';

export const ADD_BOOK = 'ADD_BOOK'
export const addBook = payload => ({type: ADD_BOOK, payload})

// ===

export const addBook2 = createAction('ADD_BOOK2')

console.log(addBook2.toString())