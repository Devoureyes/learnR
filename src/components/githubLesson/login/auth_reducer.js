import {handleActions} from 'redux-actions';
import {
    authorize,
    logout,
} from './auth_actions';

const defaultState = {
    isAuthorized: false
}
const GitHubReducer =  handleActions({
    [authorize]: (state,action) => ({
        ...state,
        isAuthorized: true
    }),
    [logout]: (state,action) => ({
        ...state,
        isAuthorized:false
    }),

},defaultState)

export const getIsAuthorized = state => state.auth_reducer.isAuthorized

export default GitHubReducer;