import {handleActions} from 'redux-actions';
import {
    authorize, getIsAuthorized,
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
    [getIsAuthorized]: (state,action) => ({
        ...state
    })

},defaultState)

export const getterIsAuthorized = state => state.auth_reducer.isAuthorized

export default GitHubReducer;