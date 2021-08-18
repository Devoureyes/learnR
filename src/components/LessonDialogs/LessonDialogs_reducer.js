import {handleActions} from 'redux-actions'
import {
    setUsersLRequest,
    setUsersLSuccess,
    setUsersLFailure,
    setDialogLRequest,
    setDialogLSuccess,
    setDialogLFailure,
    sendMessageRequest,
    sendMessageSuccess,
    sendMessageFailure,
} from './LessonDialogs_actions';

const defaultState = {
    users: [
        {id: undefined, name: undefined,dialogs: [undefined]},
    ],
    dialog: undefined,
    toggleIsActive: false,
    toggleDialog: false,
    toggleMessage: false,
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
    }),
    [sendMessageRequest]: (state,action) => ({
        ...state,
        toggleMessage: true,
    }),
    [sendMessageSuccess]: (state,action) => ({
        ...state,
        toggleMessage: false,
        error: '',
        dialog: action.payload,
    }),
    [sendMessageFailure]: (state,action) => ({
        ...state,
        toggleMessage: false,
        error: action.payload
    })
},defaultState)

export const getUsers = state => state.LessonDialogs_reducer.users
export const getDialog = state => state.LessonDialogs_reducer.dialog
export const getToggle = state => state.LessonDialogs_reducer.toggleIsActive
export const getError = state => state.LessonDialogs_reducer.error

export default LessonDialogs;