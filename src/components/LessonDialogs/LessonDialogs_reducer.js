import {handleActions} from 'redux-actions'
import {
    setUsersLRequest,
    setUsersLSuccess,
    setUsersLFailure, setDialogLRequest, setDialogLSuccess, setDialogLFailure,
} from './LessonDialogs_actions';

const defaultState = {
    users: [
        {id: undefined, name: undefined,dialogs: [undefined]},
    ],
    dialog: undefined,
    toggleIsActive: false,
    toggleDialog: false,
    error: '',
}

const LessonDialogs = handleActions({
    [setUsersLRequest]: (state,action) => ({
        ...state,
        toggleIsActive: true
    }),
    [setUsersLSuccess]: (state,action) => ({
        ...state,
        users: action.payload.users,
        toggleIsActive: true,
        error: ''
    }),
    [setUsersLFailure]: (state,action) => ({
        ...state,
        toggleIsActive: true,
        error: action.payload
    }),
    [setDialogLRequest]: (state,action) => ({
        ...state,
        toggleDialog: true,
    }),
    [setDialogLSuccess]: (state,action) => ({
        ...state,
        dialog: action.payload,
        error: ''
    }),
    [setDialogLFailure]: (state,action) => ({
        ...state,
        error: action.payload
    })
},defaultState)

export const getUsers = state => state.LessonDialogs_reducer.users
export const getDialog = state => state.LessonDialogs_reducer.dialog
export const getToggle = state => state.LessonDialogs_reducer.toggleIsActive
export const getError = state => state.LessonDialogs_reducer.error

export default LessonDialogs;