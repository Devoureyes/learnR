import {handleActions} from 'redux-actions';
import { setUserDataLFailure, setUserDataLRequest, setUserDataLSuccess} from './LAuth_actions';

let defaultState = {
    id: undefined,
    login: undefined,
    password: undefined,
    isAuth: false,
    toggleIsActive: false,
    error: ''
};
const LAuth_reducer = handleActions({
    [setUserDataLRequest]: (state,action) => ({
        ...state,
        toggleIsActive: true,
    }),
    [setUserDataLSuccess]: (state,action) => ({
        ...state,
        isAuth: true,
        id: action.payload.id,
        toggleIsActive: false,
    }),
    [setUserDataLFailure]: (state,action) => ({
        ...state,
        isAuth: false,
        error: action.payload,
        toggleIsActive: false,
    })

},defaultState)

export const getUserId = state => state.LAuth_reducer.id

export default LAuth_reducer;