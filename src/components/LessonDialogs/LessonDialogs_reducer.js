import {handleActions} from 'redux-actions'
import {
    setDialogsRequest,
    setDialogsSuccess,
    setDialogsFailure,
} from './LessonDialogs_actions'

const defaultState = {
    users: [
        {id: 1, name: 'n1'},
        {id: 2, name: 'n2'},
        {id: 3, name: 'n3'},
    ],
    dialogs: [
    {
        id: 1, messages: [
            {message: 'h1', data: ''},
            {message: 'h2', data: ''},
            {message: 'h3', data: ''},
            {message: 'h4', data: ''},
        ]
    },
    {
        id: 2, messages: [
            {message: '2h1', data: ''},
            {message: '2h2', data: ''},
            {message: '2h3', data: ''},
            {message: '2h4', data: ''},
        ]
    },
    {
        id: 3, messages: [
            {message: '3h1', data: ''},
            {message: '3h2', data: ''},
            {message: '3h3', data: ''},
            {message: '3h4', data: ''},
        ]
    },
],
    toggleIsActive: false,
    error: '',
}

const LessonDialogs = handleActions({
    [setDialogsRequest]: (state,action) => ({
        ...state,
        toggleIsActive: true,
        error: ''
    }),
    [setDialogsSuccess]: (state,action) => ({
        ...state,
        users: action.payload.users,
        dialogs: action.payload.dialogs,
        toggleIsActive: true,
        error: ''
    }),
    [setDialogsFailure]: (state,action) => ({
        ...state,
        toggleIsActive: true,
        error: action.payload
    }),
},defaultState)

export const getUsers = state => state.LessonDialogs_reducer.users
export const getDialogs = state => state.LessonDialogs_reducer.dialogs
export const getToggle = state => state.LessonDialogs_reducer.toggleIsActive
export const getError = state => state.LessonDialogs_reducer.error

export default LessonDialogs;