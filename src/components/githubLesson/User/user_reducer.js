import {handleActions} from 'redux-actions';
import {setFollowersFailure, setFollowersRequest, setFollowersSuccess} from './user_actions';

const defaultState = {
    followersUser: null,
    error: ''
}
const user_reducer =  handleActions({
    [setFollowersRequest]: (state,action) => ({
        ...state
    }),
    [setFollowersSuccess]: (state,action) => ({
        ...state,
        followers: action.payload
    }),
    [setFollowersFailure]: (state,action) => ({
        ...state,
        error: action.payload
    }),

},defaultState)

export const getFollowers = state => state.user_reducer.followers

export default user_reducer;