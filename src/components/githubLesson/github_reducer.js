import {handleActions} from 'redux-actions';
import {
    setUserRequest,
    setUserSuccess,
    setUserFailure,
} from './github_actions';

const defaultState = {
    user: null,
    userSearch: '',
    error: '',
    toggleIsActive: false,
};
const github_reducer = handleActions({
    [setUserRequest]: (state, action) => ({
        ...state,
        userSearch: action.payload,
        toggleIsActive: true,
        error: ''
    }),
    [setUserSuccess]: (state, action) => ({
        ...state,
        user: action.payload,
        toggleIsActive: false,
        error: ''
    }),
    [setUserFailure]: (state, action) => ({
        ...state,
        error: action.payload,
        toggleIsActive: false,
    }),

}, defaultState);

export const getUser = state => state.github_reducer.user;
export const getUserSearch = state => state.github_reducer.userSearch;
export const getError = state => state.github_reducer.error;
export const getToggleIsActive = state => state.github_reducer.toggleIsActive;

export default github_reducer;