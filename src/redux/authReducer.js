import {AuthAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: undefined,
    email: undefined,
    login: undefined,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});

export const auth = () => (dispatch) => {
    AuthAPI.me().then(r => {
            if (r.resultCode === 0) {
                let {id, email, login} = r.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
};
export const login = (email, password, rememberMe) => dispatch => {
    AuthAPI.login(email, password, rememberMe).then(r => {
        if (r.data.resultCode === 0) {
            dispatch(auth());
        } else {
            dispatch(stopSubmit('login', {_error: r.data.messages.length > 0 ? r.data.messages[0] : 'Something is wrong'}));
        }
    });
};

export const logout = () => dispatch => {
    AuthAPI.logout().then(r => r.data.resultCode === 0 && dispatch(setAuthUserData(null, null, null, false)));
};
export default authReducer;