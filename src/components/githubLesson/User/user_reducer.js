import {handleActions} from 'redux-actions';
import {
    setFollowersFailure,
    setFollowersRequest,
    setFollowersSuccess,
} from './user_actions';

const defaultState = {
    followersUser: null,
    error: '',
    toggleFollowersIsActive: false,
    page: 1,
    per_page: 100,
}
const user_reducer =  handleActions({
    [setFollowersRequest]: (state, action) => ({
        ...state,
        toggleFollowersIsActive: true,
        page: action.payload.page
    }),
    [setFollowersSuccess]: (state, action) => ({
        ...state,
        followersUser: action.payload.followersUser,
        page: action.payload.page,
        per_page: action.payload.per_page,
        toggleFollowersIsActive: false
    }),
    [setFollowersFailure]: (state, action) => ({
        ...state,
        error: action.payload,
        toggleFollowersIsActive: false
    }),

},defaultState)

export const getFollowers = state => state.user_reducer.followersUser;
export const getToggleFollowersIsActive = state => state.user_reducer.toggleFollowersIsActive;
export const getPage = state => state.user_reducer.page;
export const getPerPage = state => state.user_reducer.per_page;

export default user_reducer;