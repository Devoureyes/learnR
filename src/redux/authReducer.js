import {AuthAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: 18746,
    email:'devoureyes@yandex.ru',
    login:'devoureyes',
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}

const setAuthUserData = (id,email,login) => ({type:SET_USER_DATA,data: {id,email,login} })

export const auth = () => (dispatch) => {
    AuthAPI.me().then(r => {
        if(r.resultCode === 0) {
            let {id,email,login} = r.data
            dispatch(setAuthUserData(id,email,login))
        }
    })
}
export default authReducer;