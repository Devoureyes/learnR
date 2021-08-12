import {handleActions} from 'redux-actions';
import {
    setUserRequest,
    setUserSuccess
} from './github_actions';

const defaultState = {
    user: null,
    userImage: null,
    userLogin: null,
    userFollowers: null,
}
const github_reducer =  handleActions({
    [setUserRequest]: (state,action) => ({
        ...state,
    }),
    [setUserSuccess]: (state,action) => ({
        ...state,
        user: action.payload
    })

},defaultState)

export const getUser = state => state.github_reducer.user

export default github_reducer;