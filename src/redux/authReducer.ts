import {AuthAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean | null,
    captchaUrl: null as string | null
};

export type initialStateType = typeof initialState

const authReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.payload.captchaUrl,
            }
        }
        default:
            return state;
    }
};

type setAuthUserDataPayloadType = {
    id:number | null
    email:string | null
    login:string | null
    isAuth:boolean | null
}

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: setAuthUserDataPayloadType
}

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {
        captchaUrl: string
    }
}

const setAuthUserData = (id:number | null, email:string | null, login:string | null, isAuth:boolean | null): setAuthUserDataActionType => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});
const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const auth = () => (dispatch:any) => {
    AuthAPI.me().then(r => {
            if (r.resultCode === 0) {
                let {id, email, login} = r.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
};
export const login = (email: string, password: string, rememberMe:boolean,captcha:string) => (dispatch:any) => {
    AuthAPI.login(email, password, rememberMe,captcha).then(r => {
        if (r.data.resultCode === 0) {
            dispatch(auth());
        } else {
            if(r.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            dispatch(stopSubmit('login', {_error: r.data.messages.length > 0 ? r.data.messages[0] : 'Something is wrong'}));
        }
    });
};
export const getCaptchaUrl = () => async (dispatch:any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}
export const logout = () => (dispatch:any) => {
    AuthAPI.logout().then(r => r.data.resultCode === 0 && dispatch(setAuthUserData(null, null, null, false)));
};

export const getAuth = (state:any) => state.authPage.isAuth
export const getCaptcha = (state:any) => state.authPage.captchaUrl

export default authReducer;