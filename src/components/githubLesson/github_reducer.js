import {handleActions} from 'redux-actions';
import {
    setUserRequest,
    setUserSuccess,
    setUserFailure,
    setFollowersFailure, setFollowersRequest, setFollowersSuccess
} from './github_actions';

const defaultState = {
    user: null,
    userSearch: '',
    error: ''
};
const github_reducer = handleActions({
    [setUserRequest]: (state, action) => ({
        ...state,
        userSearch: action.payload,
        error: ''
    }),
    [setUserSuccess]: (state, action) => ({
        ...state,
        user: action.payload,
        error: ''
    }),
    [setUserFailure]: (state, action) => ({
        ...state,
        userSearch: action.payload.userSearch,
        error: action.payload.error
    }),
    [setFollowersRequest]: (state, action) => ({
        ...state
    }),
    [setFollowersSuccess]: (state, action) => ({
        ...state,
        followers: action.payload
    }),
    [setFollowersFailure]: (state, action) => ({
        ...state,
        error: action.payload
    }),

}, defaultState);

export const getUser = state => state.github_reducer.user;
export const getUserSearch = state => state.github_reducer.userSearch;
export const getError = state => state.github_reducer.error;

export default github_reducer;